-- UPDATE 
select*from TB_CRADE;
UPDATE tb_grade 
    set  tot = kor + eng + mat,
        avg = round((kor+eng + mat)/3, 1)
    where class_cd in ("A", "B");
    
-- commit : db반영
-- rollback : 마지막 commit 상태로 복원
-- 도구 > 환경설정 > 객체 설정 > 자동 커밋에서 설정가능
commit;

-- insert
select*from tb_grade;
insert into tb_grade(class_cd,  student_no, student_nm, kor, eng, mat) values ("A", 3, "동순이", 97, 88, 95);

delete from tb_grade where student_nm = "동순이";

-- 모든 필드에 값이 있을 경우
insert into tb_grade values ("B", 4, "이도희", 86, 92, 90, 0, 0);

-- insert into
-- insert select : 테이블에 데이터 삽입
-- insert all into : 여러 테이블에 여러 행을 입력

insert all 
    when substr(reg_dttm, 1, 4) = "2017" then into tb_point_2017
    when substr(reg_dttm, 1, 4) = "2018" then into tb_point_2018
    when substr(reg_dttm, 1, 4) = "2019" then into tb_point_2019
    else  into tb_point_2019

select
    customer_cd, seq_no, point_memo, point, reg_dttm
    from tb_point
where reg_dttm >= "20170101000000"; -- 2017년 이후부터

select*from tb_point_2017;
select*from tb_point_2018;
select*from tb_point_2019;

commit;

-- MERGE : 조건에 따라 저장한 테이블의 데이터 입력 or 수정
select*from tb_customer;
select*from tb_add_customer;

MERGE into tb_customer cu
    using tb_add_customer nc
    on (cu.customer_cd = nc.customer_cd)
    
    when matched then
        update set 
            cu.customer_nm = nc.customer_nm,
            cu.mw_flg = nc.mw_flg,
            cu.birth_day = nc.birth_day,
            cu.phone_number = nc.phone_number
    when not matched then
        insert (cu.customer_cd, cu.customer_nm, cu.mw_flg, cu.birth_day, cu.phone_number,
                cu.email, cu.total_point, cu.reg_dttm
            )
        values (nc.customer_cd, nc.customer_nm, nc.mw_flg, nc.birth_day, nc.phone_number,
                " ",0, "20191015082030"
            );
            
-- delete
select*from tb_grade
order by class_cd, student_no;

delete form tb_grade where student_nm in("나경숙", "박승대", "이아름");
-- delete form tb_grade where student_nm = "이아름"

commit;

-- rollback : 바뀐 내용 취소 및 최종 커밋 상태로 복원
select* from tb_grade
order by class_cd, student_no;

delete from tb_grade where class_cd in ('B','C');

rollback;
show autocommit;

