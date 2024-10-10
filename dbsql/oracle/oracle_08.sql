select*from t_member;

-- 조건 추가
select*from(
    select rownum as recnum, id, pwd, name, email, joindate from(
        select id, pwd, name, email, joindate from t_member order by joindate desc
    )
) 
where 
    ((name like '%t102%') or (id like 'm54%'))
     and 
    (joindate BETWEEN '2024/01/01' and '2024/07/20');
    
select *from t_member where id like 'm54%';
select *from t_member where id = 'm600';


select*from (
    -- 조건 추가
    select*from(
        select rownum as recnum, id, pwd, name, email, joindate from(
            select id, pwd, name, email, joindate from t_member order by joindate desc
        )
            where 
        ((name like '%t102%') or (id like 'm54%'))
         and 
        (joindate BETWEEN '2024/01/01' and '2024/07/20')
    ) 
) 
where recnum between 1 and 5;
