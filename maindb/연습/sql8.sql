SHOW COLUMNS FROM students;
SHOW COLUMNS FROM  students2;

SELECT * FROM students;
SELECT * FROM students2;

INSERT INTO students2 
	(SELECT * FROM students);
	
DELETE FROM students2;

INSERT 
	INTO students2 
		(student_name, school_name) 
		(SELECT student_name, school_name FROM students);

CREATE TABLE students3 (SELECT * FROM students);
CREATE TABLE students4 AS SELECT * FROM students;

SELECT * FROM students;
SELECT * FROM students3;

SHOW CREATE TABLE students3;
SHOW COLUMNS FROM students2;

DELETE FROM students2;
SELECT * FROM students2;

INSERT INTO students2 
 (student_name,school_name, school_level, school_grade, 
  student_gender,student_age, is_enrolled, enrolled_date) 
VALUES 
	('홍길동', '활빈','고등학교', 2,'남자', 16, 1, 20180201),
	('허균', '활빈','고등학교', 2,'남자', 32, 1, 20180201),
	('연산군', '조선','고등학교', 3,'남자', 36, 0, 20180201),
	('세종', '조선','고등학교', 3,'남자', 42, 1, 20170601),
	
	('강감찬', '고려','고등학교', 3,'남자', 42, 1, 20170601),
	('이순신', '조선','고등학교', 3,'남자', 22, 1, 20180601);
	
	
SELECT * FROM students;
SELECT * FROM students2;

SELECT COUNT(*) FROM students;
SELECT COUNT(*) FROM students2;

SELECT 
	student_name, school_name, school_level
FROM 
	students
UNION 
	SELECT 
		-- student_name, null, null
		student_name, school_name, school_level
	FROM students2;

SELECT 
	student_name, school_name, school_level
FROM 
	students
UNION ALL 
	SELECT 
		-- student_name, null, null
		student_name, school_name, school_level
	FROM students2;

SELECT 
	math,  COUNT(tid)
FROM 
	test
GROUP BY math
ORDER BY math DESC;

SELECT * FROM test;

-- GROUP BY : HAVING => 그룹핑 상태에 사용되는 조건식
SELECT school_name FROM students;

SELECT 
	school_name, COUNT(sid) 
FROM 
	students
GROUP BY 
	school_name;

SELECT 
	school_name, COUNT(sid) 
FROM 
	students
GROUP BY 
	school_name
HAVING COUNT(sid) > 4;


SELECT 
	school_level, COUNT(*) 
FROM students
GROUP BY school_level;

SELECT 
	school_level, COUNT(*) 
FROM students
GROUP BY school_level
HAVING school_level = '중학교';

SHOW COLUMNS FROM test;

CREATE TABLE test_backup LIKE test;
SHOW COLUMNS FROM test_backup;
ALTER TABLE test_backup CHANGE student_name NAME VARCHAR(20);

INSERT INTO test_backup (tid, student_name, kor, eng, math) FROM test;

SELECT*FROM test_backup;
SHOW COLUMNS FROM test;
SHOW COLUMNS FROM test_backup;

