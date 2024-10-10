-- 트랜직션(Transaction) :하나로 묶는 단위

select*from tb_customer;
select*from tb_customer where customer_cd = '2017042';

insert into tb_point values ('2017042', 5, '드라이기 구매 포인트 적립', 3200,'20190801234530');
select*from tb_point;
select*from tb_customer;

update tb_customer cu
    set cu.total_point = (select sum(cp.point) from tb_point cp 
                                where cp.customer_cd = cu.customer_cd 
                                group by cp.customer_cd)
    where cu.customer_cd = '2017042';
    
rollback;

-- 서브 쿼리(sub query) : select구문안에 spl을 구성한 select구문
select*from t_member;
select*from t_member where name like '홍%';

-- 필터링 된 표를 하나의 테이블로 명칭 붙이기
select rownum, t1.id, t1.name
from (
    select id, name from t_member where name like '홍%'
) t1;

show autocommit;

