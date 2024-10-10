-- 백업 및 복원
-- root사용자에게 적용되는 권한
-- MYSQLDUMP -u계정 -p비밀번호 백업선택>백업파일의위치 이름

-- C:\Program Files\MariaDB 11.2\data

/*
모든 DB백업
mysqldump -u root -p1234 -A > c:/test/maria_backup.sql

특정 DB백업
mysqldump -u root -p1234 mydb > c:/test/mydb_backup.sql

여러 db백업
mysqldump -u root -p1234  --databases mydb mysql > c:/test/mydb_mysql_backup.sql

특정 db의 특정 테이블백업
mysqldump -u root -p1234 mydb students  > c:/test/mydb_students_backup.sql

데이터 없이 db구조 백업
mysqldump -u root -p1234 --no-data -A > c:/test/alldb_schema_only.sql


특정 db의 구조 백업mydb
mysqldump -u root -p1234 --no-data mydb > c:/test/mydb_schema_only.sql


전체 복원
mysql -uroot -p1234 -A < c:/test/maria_backup.sql
특정 db복원
mysql -uroot -p1234  mydb < c:/test/mydb_backup.sql
*/

