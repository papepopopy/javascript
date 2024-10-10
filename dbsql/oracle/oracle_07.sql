select*from t_member;
select*from t_member where joindate between '2024/06/16' and '2024/06/27';

select rownum, id, pwd, name, email from t_member;
select rownum as recNum, id, pwd, name, email from t_member;

select*from (
    select rownum as recNum, id, pwd, name, email from t_member 
) where recNum between 3 and 4;

-- 행 번호 적용
select*from(
    select rownum as recnum, id, pwd, name, email, joindate from(
        select id, pwd, name, email, joindate from t_member order by joindate desc
    )
) where recnum between 3 and 4;