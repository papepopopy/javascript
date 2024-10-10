
CREATE TABLE persistent_login (
	username VARCHARACTER(64) NOT NULL,
	series VARCHARACTER(64) PRIMARY KEY,
	token VARCHARACTER(64) NOT NULL,
	last_used TIMESTAMP NOT NULL
);

ALTER TABLE persistent_login RENAME persistent_logins;

shopdbmysqlmember
CREATE DATABASE visit_busan;
SELECT * FROM member WHERE user_id = 'test';
SELECT * FROM member WHERE user_id = 'hong';
SELECT * FROM member;
INSERT INTO member (member_id, user_id, password, name, email, address, profile_image_uuid) VALUES ('hong', 'encodedPassword', '홍길동', 'hong@example.com', '서울시 강남구', '');
DESCRIBE member;
DESCRIBE member_role_set;
COMMIT;
SELECT * FROM member WHERE email = 'test@gmail.com';
SELECT * FROM member WHERE user_id = '홍길동';
