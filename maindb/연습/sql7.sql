SELECT AVG(math) FROM test;

SELECT 
	student_name, kor, eng, math 
FROM test;

SELECT 
	student_name, kor, eng, math 
FROM test
WHERE math >= 80;

SELECT 
	student_name, kor, eng, math 
FROM test
WHERE math >=  (SELECT AVG(math) FROM test) 
-- where math >= 수학평균점수
ORDER BY kor DESC;

SELECT mydb.students.student_name FROM students;
SELECT mydb.test.student_name FROM test;

SELECT * FROM students, test;

SELECT test.student_name FROM students, test;
SELECT students.student_name FROM students, test;

SELECT 
	s.student_name, t.student_name 
FROM 
	students AS s, test AS t;
	
CREATE TABLE tutions(
	sid 				INT AUTO_INCREMENT ,
	student_name 	VARCHAR(20)  NOT NULL, -- 제약조건
	is_paid 			TINYINT(1),
	due_year 		INT NOT NULL,
	due_month 		INT NOT NULL,
	due_day 			INT NOT NULL,
	due_amount 		INT NOT NULL,
	memo 				VARCHAR(100),
	
	PRIMARY KEY(sid)

);

SHOW COLUMNS FROM  tuitions;

INSERT INTO tuitions 
	(student_name, is_paid, due_year, due_month, due_day, due_amount, memo)
VALUES 
	('홍길동', 1, 2019, 11, 1, 300000, ''),
	('허균', 1, 2019, 11, 2, 300000, ''),
	('연산군', 1, 2019, 11, 3, 300000, '교직원할인'),
	('세종', 1, 2019, 11, 3, 150000, '교직원할인'),
	('홍상직', 1, 2019, 11, 5, 300000, ''),
	('성춘향', 1, 2019, 11, 11, 300000, ''),
	('이몽룡', 1, 2019, 11, 15, 300000, ''),	
	('변사또', 1, 2019, 11, 158, 300000, '상습체납자'),	
	('심청', 1, 2019, 11, 211, 150000, '사회보호대상자'),	
	('심학규', 1, 2019, 11, 30, 150000, '사회보호대상자'),
	('졸부', 1, 2019, 11, 30, 300000, ''),	
	('신채호', 1, 2019, 11,30, 150000, '국가유공자')	
	;

SELECT * FROM tuitions;

ALTER TABLE tutions RENAME tuitions;

SELECT * FROM students, test;
SELECT 
	s.student_name, s.school_name, t.math
FROM 
	students AS s, test AS t
WHERE s.student_name = t.student_name 
	AND t.is_taken = 1;
	
SELECT 
	s.student_name, s.school_name, t.math
FROM 
	students AS s INNER JOIN test AS t
ON s.student_name = t.student_name 	AND t.is_taken = 1;

SELECT students.student_name, test.math, tuitions.memo
FROM (
		-- 시험에 참여한 학생(test.is_taken =1)
		(students INNER JOIN test
			ON students.student_name = test.student_name 
			AND test.is_taken = 1
		 )
		INNER JOIN tuitions 
		ON tuitions.student_name = test.student_name
	);

SELECT 
	s.student_name, s.school_name, t.math, tu.memo
FROM 
	students AS s, test AS t, tuitions AS tu
WHERE s.student_name = t.student_name 
	AND t.student_name = tu.student_name
	AND t.is_taken = 1;

UPDATE 
	tuitions
SET 
	student_name = '놀부'
WHERE  
	sid = 11; 

SELECT * FROM 	tuitions
WHERE 
	CHAR_LENGTH(student_name) = 2;
	
SELECT * FROM test;

SELECT tuitions.*, test.*
FROM 
	tuitions LEFT JOIN test
	ON CHAR_LENGTH(tuitions.student_name) = 2
	AND tuitions.student_name = test.student_name;
	
SELECT tuitions.*, test.*
FROM 
	tuitions RIGHT JOIN test
	ON CHAR_LENGTH(test.student_name) = 2
	AND tuitions.student_name = test.student_name;

