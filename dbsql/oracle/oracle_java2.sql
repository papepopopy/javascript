create table t_member (
    id           VARCHAR2(10) primary key,
    pwd         VARCHAR2(10),
    name      VARCHAR2(50),
    email       VARCHAR(50),
    joinDate    date default sysdate
    
)
