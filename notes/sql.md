# sql

## 计算时间差
* select timediff(end_time, start_time) from files where timediff(end_time, start_time) > 0 order by timediff(end_time, start_time) desc; 