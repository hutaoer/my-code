# 边框和字体颜色渐变

* border-image 会对整个border生效。所以要针对不同方向的border单独设置，则可以使用伪类来实现。

```css

.statistics-item {
    width: 440px;
    height: 178px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 3px solid #eee;
    border-bottom: 3px solid #eee;
    position: relative;
    // 左边框渐变
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(180deg, #ab3414, #fff);
      border-radius: 3px 0 0 3px;
    }
    
    // 右边框渐变
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(180deg, #ab3414, #fff) ;
      border-radius: 0 3px 3px 0;
    }
  }
  .statistics-item-title {
    color: rgba(171, 52, 20, 1);
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    
  }
  .radial-gradient-text {
    background: linear-gradient(#fff, #ab3414);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
```