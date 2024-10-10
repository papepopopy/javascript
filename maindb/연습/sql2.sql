ALTER TABLE students ADD student_genter VARCHAR(1);

ALTER TABLE students DROP COLUMN is_admin;

ALTER TABLE students MODIFY COLUMN student_genter VARCHAR(2);

ALTER TABLE students CHANGE COLUMN  student_genter student_gender VARCHAR(2);
ALTER TABLE students CHANGE COLUMN id sid INT AUTO_INCREMENT ;
SHOW COLUMNS from students;