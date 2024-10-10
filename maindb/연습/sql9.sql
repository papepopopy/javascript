-- Member
CREATE TABLE MEMBER (
	memberno INT, 
	id			VARCHAR(50),
	NAME		VARCHAR(50)
);
SHOW COLUMNS FROM MEMBER;

INSERT INTO MEMBER (memberno, id, NAME) VALUES (1, "hong", "홍길동");
SELECT*FROM member;

SELECT @@autocommit; -- 상태확인
SET @@autocommit = 0; -- 끄기
SET @@autocommit = 1; -- 켜member

SELECT*FROM member where memberno=2;
UPDATE member SET NAME = "HongGilsun200" WHERE memberno = 2;
DELETE FROM member WHERE memberno = 2;