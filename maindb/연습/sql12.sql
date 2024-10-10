-- INDEX : 빠른 데이터 검색

SELECT*FROM students;
CREATE INDEX idx_name ON students(student_name, school_name);

ALTER TABLE students DROP INDEX idx_name;


-- SHOW_allschools 저장 프로시저를 생성
CREATE PROCEDURE SHOW_allschools() 

-- students 테이블에서 school_name 열이 중복되지 않은 값들을 선택
SELECT DISTINCT school_name FROM students

-- school_name이 NULL이 아닌 경우만
WHERE school_name IS NOT NULL;



CALL SHOW_allschools();
CALL SHOW_allschools();
CALL SHOW_allschools();

SHOW PROCEDURE STATUS;
DROP PROCEDURE SHOW_allschools;



