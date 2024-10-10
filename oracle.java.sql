SELECT*from tb_customer;
select customer_cd as ���ڵ�, customer_nm as ����, phone_number as "��ȭ��ȣ", email as �̸��� from tb_customer;

select*from tb_customer WHERE  mw_fig = "M";

select*from tb_customer WHERE customer_cd > '2019000' and mw_flg = 'W';

select*from tb_customer
where birth_day >= '19900101' or total_point >= 20000;

select*from tb_customer
where mw_flg = 'W' and total_point between 10000 and 20000;

-- not > and > or

select *from tb_customer
where customer_cd like '2018%' or customer_cd like '2019%'; -- 2018�� ���� �Ǵ� ����

select*from tb_customer where customer_nm like ' %��'; -- ���� ������ ����
select*from tb_customer where customer_nm like '%��%'; -- ���� ���Ե� ����

select*from tb_customer where customer_nm in ('�����', '������','�̾Ƹ�');
select*from tb_customer where customer_nm not in ('�����', '������','�̾Ƹ�'); -- �ݴ��� ��� not

select*from tb_customer order by mw_flg desc; -- ��������
select*from tb_customer order by mw_flg asc; -- ��������

select*from tb_customer order by mw_flg asc, customer_cd desc;
select*from tb_customer order by 1 desc; --ù��° col

--------------------------
select*from tb_grade;
select class_cd , sum(kor), avg(kor), min(kor), max(kor), count(*)
    from tb_grade
    group by class_cd;
    
select class_cd , 
    round(avg(kor),1)as �������, 
    round(avg(mat),1) as �������, 
    round(avg(eng),1) as �������
    
    from tb_grade
    group by class_cd
    having avg(kor) >= 80;
    
select sales_dt, product_nm from tb_sales;
select DISTINCT sales_dt, product_nm from tb_sales; --�ߺ� ����

select*from tb_grade;
select*from tb_class_info;

select tb_grade.class_cd from tb_grade, tb_class_info; --�ΰ� �̻� ���� ���̺� ���� �ʼ� �ۼ�

select b.class_nm, 
    a.student_no, 
    a.student_nm, 
    a.kor, a.eng, 
    a.mat, a.tot, a.avg  
    from tb_grade a, tb_class_info b
where a.class_cd = b.class_cd;

select b.class_nm, 
    a.student_no, 
    a.student_nm, 
    a.kor, a.eng, 
    a.mat, a.tot, a.avg  

from tb_grade a
join tb_class_info b
on a.class_cd = b.class_cd;

select*from tb_grade_07;
select*from tb_grade_08;

select 
        a.test_cd as "7������",
        a.kor, a.mat,eng,
        b.test_cd as "8�� ����",
        b.kor, b.mat, b.eng
        
    from tb_grade_07 a
    join tb_grade_08 b
    on a.test_cd = b.test_cd;

select 
        a.test_cd as "7������",
        a.kor, a.mat,eng,
        b.test_cd as "8�� ����",
        b.kor, b.mat, b.eng
        
    from tb_grade_07 a
    left join tb_grade_08 b
    on a.test_cd = b.test_cd;

select 
        a.test_cd as "7������",
        a.kor, a.mat,eng,
        b.test_cd as "8�� ����",
        b.kor, b.mat, b.eng
        
    from tb_grade_07 a
    right join tb_grade_08 b
    on a.test_cd = b.test_cd;

select 
        a.test_cd as "7������",
        a.kor, a.mat,eng,
        b.test_cd as "8�� ����",
        b.kor, b.mat, b.eng
        
    from tb_grade_08 a
    right join tb_grade_09 b
    on a.test_cd = b.test_cd;


select 
        a.test_cd as "8������",
        a.kor, a.mat,eng,
        b.test_cd as "9�� ����",
        b.kor, b.mat, b.eng
        
    from tb_grade_08 a, tb_grade_09 b
    where a.test_cd = b.test_cd; --left join�� �����ϰ� ����� ���´�

select 
        a.test_cd as "8������",
        a.kor, a.mat,eng,
        b.test_cd as "9�� ����",
        b.kor, b.mat, b.eng
        
    from tb_grade_08 a
    full outer join tb_grade_09 b
    on a.test_cd = b.test_cd; --��� �� ��������.
    
select*from tb_grade_09 order by eng desc;
select rownum, * from tb_grade_09; -- rownum ��ȣ�� ���������ش�.
select rownum, test_cd, kor, mat, eng from tb_grade_09;




create table t_member (
    id           VARCHAR2(10) primary key,
    pwd         VARCHAR2(10),
    name      VARCHAR2(50),
    email       VARCHAR(50),
    joinDate    date default sysdate
    
);
