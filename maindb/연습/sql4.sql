SELECT * FROM students;
SELECT * FROM students WHERE school_name LIKE  '도%';
SELECT * FROM students WHERE school_name LIKE '%빈';
SELECT * FROM students WHERE school_level LIKE '%등%';
SELECT * FROM students WHERE school_name NOT LIKE '도%';

SELECT * FROM students WHERE school_level LIKE  '고_학교';

SELECT * FROM students;
SELECT * FROM students 
	WHERE school_name != '도화' 
	AND 	school_name <> '남원';
	
SELECT * FROM students WHERE student_age <= 30;
SELECT * FROM students WHERE student_age IN (17,18,19);
SELECT * FROM students WHERE school_name IN ('활빈', '도화');

SELECT * FROM students WHERE student_age BETWEEN 30 AND 39;
SELECT * FROM students
	WHERE (school_name = '조선' or school_name='남원') 
	AND (student_age NOT BETWEEN 10 AND 19);
	
