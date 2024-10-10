/* 
	회원 테이블(t_memer) : 아이디(PK), 비밀번호, 이름, 주소, 전화번호
	렌터카 테이블(t_car) : 차번호(PK), 차 이름 , 차 색상, 배기량, 재조사
	예약 테이블(t_res) : 예약번호(PK), 예약 날짜, 이용시작 일자, 반납일자, 예약자번호(FK), 예약자 아이디(FK)
*/

CREATE DATABASE mydb2;
SHOW DATABASES;

USE mydb2;

CREATE TABLE t_member (
	memId	VARCHAR(20) PRIMARY KEY, 
	memUsername VARCHAR(20) NOT NULL,
	memPassword VARCHAR(50) NOT NULL,
	memAddress VARCHAR(50),
	memNumber VARCHAR(20)
)
SHOW TABLES;
SELECT*FROM t_member;
SHOW COLUMNS FROM t_member;

CREATE TABLE t_car (
	carNumber	VARCHAR(20) PRIMARY KEY,
	carName		VARCHAR(30) NOT NULL,
	carColor		VARCHAR(30),
	carSize		INT,
	carMaker		VARCHAR(50)
)

SHOW TABLES;
SHOW COLUMNS FROM t_car;
SELECT*FROM t_res;
SELECT*FROM t_member;
SELECT*FROM t_car;
CREATE TABLE t_res(
	resNumber		VARCHAR(30) PRIMARY KEY,
	resDate			DATE NOT NULL,
	resBeginDate	DATE NOT NULL,
	resturnDate		DATE NOT NULL,
	resCarNumber	VARCHAR(30),
	resUserId		VARCHAR(30),
	CONSTRAINT FK_RES_USER_ID FOREIGN KEY(resUserId) REFERENCES t_member(memId),
	CONSTRAINT FK_RES_CAR_NUMBER FOREIGN KEY(resCarNumber) REFERENCES t_car(carNumber)
)

INSERT INTO t_res (
	resNumber,
	resDate,
	resBeginDate, 
	resturnDate,
	resCarNumber,
	resUserId
) VALUES 
	 ('1', '2024-01-04', '2024-01-05', '2024-01-07', '1000', 'hong001'),
    ('2', '2024-01-04', '2024-01-05', '2024-01-07', '2000', 'hong100'),
    ('3', '2024-01-04', '2024-01-05', '2024-01-07', '3000', 'hong200');

SHOW COLUMNS FROM t_res;
SELECT*FROM t_res;

-- 차량 정보
INSERT INTO t_car (
	carNumber,
	carName,
	carColor, 
	carSize,
	carMaker
) VALUES 
    ('1000', '벤츠', '블랙', 3000, '밴츠'),
    ('2000', 'BMW', '그레이', 2500, 'BMW'),
    ('3000', 'G90', '다크레드', 5000, '현대');



INSERT INTO t_member (
	memId, 
	memPassword,
	memUsername, 
	memAddress,
	memNumber
) VALUES 
	('hong100','1234','홍길동','서울','010-1234-1234'),
	('hong001','1234','홍길동','대구','010-1234-7777'),
	('hong200','1234','동순이','부산','010-1234-9999');



SELECT * FROM t_member;
SELECT * FROM t_member WHERE memUsername = '홍길동' ORDER BY memId;

UPDATE t_member SET 
memPassword = "1111",
memUsername = "홍길동100",
memAddress = "부산",
memNumber = "010-1111-1000"

WHERE memId = "hong100"

DELETE FROM t_member -- 전체 삭제
DELETE FROM t_member WHERE memId = "hong200";item_seqshopdb

