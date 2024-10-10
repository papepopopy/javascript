-- index : 빠른 데이터 검색
-- update가 자주 발생하면 속도 저하및 용량 증가

SELECT * FROM students;
CREATE INDEX idx_name
	ON students(student_name, school_name);

-- index 삭제
ALTER TABLE students	
		DROP INDEX idx_name;
		
-- view , -- function , --procedure

CREATE PROCEDURE show_allschools()
SELECT DISTINCT school_name 
FROM students WHERE school_name IS NOT NULL;


CALL show_allschools();
CALL show_allschools();
CALL show_allschools();


-- 삭제
DROP PROCEDURE show_allschools;
SHOW PROCEDURE  STATUS;


