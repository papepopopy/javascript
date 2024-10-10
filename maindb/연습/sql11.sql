-- 외래키(참조키) : FOREIGN KEY

/* 부모테이블 */
CREATE TABLE parent (
	region_id	INT			NOT NULL,
	region		VARCHAR(10) NOT NULL,
	
	PRIMARY KEY(region_id)
)
engine = INNODB DEFAULT CHARACTER SET = UTF8;

SHOW COLUMNS FROM parent;

VALUES(1, "서울"), (2, "경기도"), (3, "부산");
INSERT INTO parent (region_id, region)

SELECT*FROM parent;

/*자식 테이블 생성*/
CREATE TABLE child (
	cid			INT			NOT NULL AUTO_INCREMENT,
	region_id	INT			NOT NULL,
	NAME			VARCHAR(10)	NOT NULL,
	
	PRIMARY KEY(cid),
	CONSTRAINT fk_region FOREIGN KEY (region_id) REFERENCES parent(region_id)
	
)
engine = INNODB DEFAULT CHARACTER SET = UTF8;

SHOW COLUMNS FROM child;

-- DROP TABLE parent; 삭제 오류

INSERT INTO child(region_id, NAME)
VALUES (1, "홍길동"), (2, "홍길동2"), (3, "홍길동3");

SELECT*FROM parent;
SELECT*FROM child;

DELETE FROM parent WHERE region_id = 4;

ALTER TABLE child DROP CONSTRAINT fk_region;

ALTER TABLE child ADD CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES parent(region_id);