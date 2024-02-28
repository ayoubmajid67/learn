create or replace view vEmp_all
as select * from employees;

create table dep_sal 
as 
select dep , sum(salary)  as sumEmp
from  employees
where dep is not null 
group by dep 
order by dep;
-- my version : it gave errors what is different between two versions
create or replace trigger update_dep_sal
instead of 
insert or delete 
on vEmp_all
begin

        if inserting then 

         insert into employees values (:new.employee_id,:new.first_name,:new.last_name,
         :new.hire_date,:new.dep);

        update dep_sal 
            set sumEmp = sumEmp + :new.salary 
            where dep=:new.dep;
            
        elsif deleting then 
         update  dep_sal 
             set sumEmp = sumEmp - :old.salary 
             where dep=:old.dep;
    end if;
end;
-- your version 
CREATE OR REPLACE TRIGGER update_dep_sal
INSTEAD OF INSERT OR DELETE
ON vEmp_all
BEGIN
    IF INSERTING THEN
        -- Insert into employees
        INSERT INTO employees (employee_id, first_name, last_name, hire_date, dep)
        VALUES (:NEW.employee_id, :NEW.first_name, :NEW.last_name, :NEW.hire_date, :NEW.dep);

        -- Update dep_sal
        UPDATE dep_sal
        SET sumEmp = sumEmp + :NEW.salary
        WHERE dep = :NEW.dep;
    ELSIF DELETING THEN
        -- Update dep_sal
        UPDATE dep_sal
        SET sumEmp = sumEmp - :OLD.salary
        WHERE dep = :OLD.dep;
    END IF;
END;
/

 insert into vEmp_all values (1,'km','tm',sysdate,500,1);

delete from vEmp_all;
select * from vEmp_all;
select * from dep_sal ;