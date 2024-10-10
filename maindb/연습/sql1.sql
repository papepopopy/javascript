SHOW DATABASES;

-- db생성 하기
CREATE DATABASE mydb;

USE mydb;

SHOW TABLES;

CREATE TABLE students (
	id		INT	AUTO_INCREMENT,
	student_name 	VARCHAR(20),
	school_name 	VARCHAR(20),
	school_level	VARCHAR(10),
	school_grade   TINYINT(1),
	is_admin			TINYINT(1),
	
	PRIMARY KEY(id)
);

SHOW COLUMNS from students;
SELECT * FROM students;

INSERT INTO students 
	(student_name, school_name, school_level, school_grade, is_admin) 
VALUES ('홍길동', '조선','고등학교', 2,0);

INSERT INTO students 
	(student_name, school_name, school_level, school_grade, is_admin) 
VALUES 
	('허균', '활빈','고등학교', 2,0),
	('연산군', '조선','고등학교', 3,0),
	('세종', '조선','고등학교', 3,1),
	('홍상직', '조선','고등학교', 2,0)
	;
	
INSERT INTO students 
	(student_name, school_name, school_level, school_grade, is_admin) 
VALUES 
	('성춘향', '남원','중학교', 3,0),
	('이몽룡', '남원','고등학교', 1,0),
	('방자', '남원','중학교', 2,0),
	('향단', '남원','중학교', 2,0),
	('변사또', '남원','고등학교',3,0),
	('심청', '도화','고등학교', 2,0),
	('심학규', '도화','고등학교', 3,0),
	('용왕', '도화','고등학교', 3,0),
	('곽씨', '도화','고등학교', 2,0),
	('뺑덕', '도화','고등학교', 1,0),
	('흥부', '남원','고등학교', 2,0),
	('놀부', '남원','고등학교', 3,0);		
	
SELECT student_name, school_name FROM students;	

SELECT DISTINCT school_name FROM students;

SELECT id, school_name FROM students LIMIT 5;
SELECT id, school_name FROM students LIMIT 3,7;

SELECT * FROM students ORDER BY school_grade ASC;
SELECT * FROM students ORDER BY school_grade DESC ;
SELECT * FROM students ORDER BY school_level, school_grade DESC ;

SELECT * FROM students WHERE school_name = '남원';
SELECT student_name, school_name FROM students 
	WHERE school_name = '활빈' OR school_name = '도화';

SELECT student_name, school_name FROM students 
	WHERE school_name = '도화' AND school_grade = 3;
