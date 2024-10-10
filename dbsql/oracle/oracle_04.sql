-- Ʈ������(Transaction) :�ϳ��� ���� ����

select*from tb_customer;
select*from tb_customer where customer_cd = '2017042';

insert into tb_point values ('2017042', 5, '����̱� ���� ����Ʈ ����', 3200,'20190801234530');
select*from tb_point;
select*from tb_customer;

update tb_customer cu
    set cu.total_point = (select sum(cp.point) from tb_point cp 
                                where cp.customer_cd = cu.customer_cd 
                                group by cp.customer_cd)
    where cu.customer_cd = '2017042';
    
rollback;

-- ���� ����(sub query) : select�����ȿ� spl�� ������ select����
select*from t_member;
select*from t_member where name like 'ȫ%';

-- ���͸� �� ǥ�� �ϳ��� ���̺�� ��Ī ���̱�
select rownum, t1.id, t1.name
from (
    select id, name from t_member where name like 'ȫ%'
) t1;

show autocommit;

