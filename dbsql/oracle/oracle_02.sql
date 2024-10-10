
select * from tb_grade;

select 
    case  
        class_cd  when   'A' then  '�����Խù�'
                    when   'B' then  '�ܰ���'
                    when   'C' then  '�������Թ�'
                    when   'D' then  '�Ϲ��ι�'
    end as class_nm,
    student_no, student_nm,
    case 
        when kor >=90 and kor<=100 then '��'
        when kor >=80 and kor<90 then '��'
        when kor >=70 and kor<80 then '��'
        when kor >=60 and kor<70 then '��'
        when kor < 60 then '��'
    end as kor,
    case 
        when eng >=90 and eng<=100 then '��'
        when eng >=80 and eng<90 then '��'
        when eng >=70 and eng<80 then '��'
        when eng >=60 and eng<70 then '��'
        when eng < 60 then '��'
    end as eng ,  
    case 
        when mat in (90,91,92,93,94,95,96,97,98,99,100) then '��'
        when mat in (80,81,82,83,84,85,86,87,88,89,89) then '��'
        when mat in (70,71,72,73,74,75,76,77,78,79,79) then '��'
        when mat in (60,61,62,63,64,65,66,67,68,69,69) then '��'
        else '��'
    end as mat
   
from tb_grade;

-- ROWNUM : ���ڵ� �˻��� �����Ǵ� �� ��ȣ
select rownum, 
    customer_cd, customer_nm, mw_flg
    
from tb_customer;

select rownum, a.*from tb_customer a;


select rownum, customer_cd, customer_nm
from tb_customer
where mw_flg = "M";

-- �˻� �� �� ���ȣ ���� ���� ���� �۾� ó��
select rownum, customer_cd, customer_nm
from tb_customer
where mw_flg = "M"
order by customer_nm;

select*from tb_customer;
select*from tb_customer
    where phone_number is null or email is null;
    
select*from tb_customer
    where (mw_flg = "M and email is null)
        or (mw_flg = "W" and email is not null)
    order by mw_flg desc;
    
select*from tb_customer;
select*from tb_customer
    where customer_nm in ("������","�ڽ´�")
        and phoe_number is not null;
        
-- dual ���̺�
select * from dual;
select 3*2 from dual;

select 100*3, sysdate, sysdate+30, "1day SQL" || "�ǽ�" substr("abcdefg", 1.4) from daul;


