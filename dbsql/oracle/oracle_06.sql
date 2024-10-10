select*from t_member order by name desc
select*from t_member order by id asc;
select*from t_member where id = 'hong' or id = 'hong2';
select*from t_member where id in ('hong','hong2');
select*from t_member;
delete from t_member where id like 'hong1%';
ALTER TABLE t_member
ADD (
    NEW_INTEGER_COLUMN INTEGER,
    NEW_TIMESTAMP_COLUMN TIMESTAMP
);
DROP (
    NEW_INTEGER_COLUMN INTEGER,
    NEW_TIMESTAMP_COLUMN TIMESTAMP
);
ALTER TABLE t_member
MODIFY (
    ID VARCHAR(10),
    PWD VARCHAR(10),
    NAME VARCHAR(50),
    EMAIL VARCHAR(50),
    JOINDATE DATE
);
commit;