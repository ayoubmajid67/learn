CREATE OR REPLACE PROCEDURE augmente_salaire(tauAg IN NUMBER)
AS
  -- Declare cursor for the employee table
  CURSOR employee_cursor IS
    SELECT NO, NOM, PRENOM, SALAIRE
    FROM e_employe for update of salaire;

  -- Variables to store data from the cursor
  v_employee_no    e_employe.NO%TYPE;
  v_employee_nom   e_employe.NOM%TYPE;
  v_employee_prenom e_employe.PRENOM%TYPE;
  v_salary         e_employe.SALAIRE%TYPE;
  v_new_salary     e_employe.SALAIRE%TYPE;

BEGIN
  -- Check if the percentage increase is greater than 0
  IF tauAg <= 0 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Le taux d''augmentation doit être supérieur strictement à 0.');
  END IF;

  -- Open the cursor
  OPEN employee_cursor;

  -- Fetch the first row
  FETCH employee_cursor INTO v_employee_no, v_employee_nom, v_employee_prenom, v_salary;

  -- Loop through the cursor
  WHILE employee_cursor%FOUND LOOP
    -- Calculate the new salary
    v_new_salary := v_salary * (1 + tauAg / 100);

    -- Update the salary in the e_employe table
    UPDATE e_employe
    SET SALAIRE = v_new_salary
    WHERE no=v_employee_no; 
 

    -- Output information
    DBMS_OUTPUT.PUT_LINE('Employee No: ' || v_employee_no ||
                         ', Name: ' || v_employee_nom ||
                         ' ' || v_employee_prenom ||
                         ', Old Salary: ' || v_salary ||
                         ', New Salary: ' || v_new_salary);

    -- Fetch the next row
    FETCH employee_cursor INTO v_employee_no, v_employee_nom, v_employee_prenom, v_salary;
  END LOOP;

  -- Close the cursor
  CLOSE employee_cursor;

  -- Commit the changes
  COMMIT;

EXCEPTION
  WHEN OTHERS THEN
    -- Handle any other exceptions
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END augmente_salaire;
/

select * from  e_employe;

DECLARE
  v_tauAg NUMBER := 10; -- You can adjust this value as needed

BEGIN
  -- Call the augmente_salaire procedure
  augmente_salaire(v_tauAg);

  -- Output a message indicating successful execution
  DBMS_OUTPUT.PUT_LINE('Procedure executed successfully.');

  -- Commit the changes (optional, depending on your requirements)
  COMMIT;

EXCEPTION
  WHEN OTHERS THEN
    -- Handle any exceptions
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    ROLLBACK; -- Rollback changes in case of error

END;
/
select * from  e_employe;
