-- Member
CREATE TABLE MEMBER (
	memberno INT,
	id VARCHAR(50),
	NAME VARCHAR(50)
);
SHOW COLUMNS FROM member;

INSERT INTO MEMBER (memberno, id, NAME) VALUES (1,'hong','홍길동');

DELETE FROM member;
SELECT * FROM MEMBER;

-- db autocommit 상태
SELECT @@autocommit; -- 상태확인member
SET @@autocommit = 0; -- 끄기
SET @@autocommit = 1; -- 켜기

