const path = require('path');
const fs = require('fs');
const readline = require('readline');
const fileNames = ['test1', 'test2'];

// 每个 xml 文件中的链接，不能超过 5 w 个，文件小于 10M

const xmlStartText = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="
            http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\r\n`;


const xmlEndText = `</urlset>`;

for(let i = 0; i < fileNames.length; i++) {
    const filePath = path.resolve(__dirname, `./${fileNames[i]}.txt`);
    if(fs.existsSync(filePath)) {
        try {
            const xmlFilePath = path.resolve(__dirname, `./${fileNames[i]}.xml`);
            if(fs.existsSync(xmlFilePath)) {
                fs.writeFileSync(xmlFilePath, '');
            }

            const readFileStream = fs.createReadStream(filePath);
            const writeFileStream = fs.createWriteStream(xmlFilePath);
            const lineReader = readline.createInterface({
                input: readFileStream
            });
            let currentLineNumber = 0;
            writeFileStream.write(xmlStartText);
            lineReader.on('line', function(l) {
                // 超过 5w 条的时候，停止写入
                if(currentLineNumber >= 50000) {
                    lineReader.pause();
                    lineReader.close();
                    return;
                }
                const item = `<url>
           <loc>${l}</loc>
        </url>\r\n`;
                writeFileStream.write(item);
                currentLineNumber++;
            })
            lineReader.on('close', function() {
                writeFileStream.write(xmlEndText);
                console.log(`${xmlFilePath} 生成！`);
            })
        } catch(err) {
            console.error(err);
        }
    }
}

