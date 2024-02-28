create or replace procedure sup_emp (numEmp in Number)
is 
begin 
delete from e_employe where no=numEmp; 
commit;
end; 
/

--  2)

set serveroutput on;
begin 
sup_emp(1); 
end;
/ 
