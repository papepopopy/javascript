select*from t_member;
select count(*) from t_member;
select count(id) from t_member where id='hong1000';

select decode(count(*), 1, 'true', 'false') as isCheck from t_member where id ='hong100';

select sysdate from dual