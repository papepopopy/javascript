-- 백업 및 복원
-- root 사용자 권한

/*
	cmd 입력
	
	모든 DB 백업
	mysqldump -u root -p1234 -A > c:/test/maria_backup.sql
	
	특정 DB 백업
	mysqldump -u root -p1234 mydb > c:/test/maria_backup.sql

	여러 DB 백업
	mysqldump -u root -p1234 --database > c:/test/maria_backup.sql
	
	특정 db의 특정 테이블 백업
	mysqldump -u root -p1234 mydb students > c:/test/maria_backup.sql
	
	데이터 없이 db 구조 백업
	mysqldump -u root -p --no-data -A >c:/test/alldb_scherma_only.sql
	
	특정 db의 구조 백업
	mysqldump -u root -p1234 --no-data mydb > c:/test/mydb_schema_only.sql
	
	-u root -p 1234 -A < c:/test/maria_backup.sql
	 
	mysql -uroot -p1234 < c:/test/maria_backup.sql
	
	mysql -uroot -p1234 -A < c:/test/maria_backup.sql
	
*/

