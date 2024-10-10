-- 제약 조건 : CONSTRAINTS
-- SQL제약조건으로 테이블에 저장 되는 데이터 규칙을 정하는 형식

-- 정해진 형태 데이터 입력만 허용 /무결성 , 신뢰성 보장

CREATE TABLE temp (
	id				INT				AUTO_INCREMENT,
	name			VARCHAR(100)	NOT NULL,
	age			INT UNSIGNED	NOT NULL,
	deposit		DOUBLE			UNSIGNED NULL,
	address		VARCHAR(255)	DEFAULT "서울",
	score			INT				CHECK (score <= 0 AND score <= 100),
	
	
	PRIMARY KEY (id),
	UNIQUE(NAME),
	CHECK(age >= 18)
	
);

SHOW TABLES;

INSERT INTO temp (NAME, age, deposit, score)
VALUES ("홍길동1", 25, 300, 0)

SELECT*FROM temp;



