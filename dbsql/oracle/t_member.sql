create table t_member (
    id           VARCHAR(10) primary key,
    pwd         VARCHAR(10),
    name      VARCHAR(50),
    email       VARCHAR(50),
    joinDate    date default sysdate
);

-- ȸ�� ���� �߰�
INSERT into t_member
VALUES('hong', '1234', 'ȫ�浿', 'hong@gmail.com', sysdate);
INSERT into t_member
VALUES('hong2', '1234', 'ȫ�浿', 'hong@gmail.com', sysdate);
INSERT into t_member
VALUES('hong3', '1234', 'ȫ�浿', 'hong@gmail.com', sysdate );

SELECT*from t_member;
DELETE from t_member;
DROP TABLE t_member;