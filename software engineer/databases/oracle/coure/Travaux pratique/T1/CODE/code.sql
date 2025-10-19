


select salaire,no  from E_EMPLOYE;

-- Question 1: Create table E_Augmentation
CREATE TABLE E_Augmentation (
  No NUMBER(7),
  Augmentation NUMBER(11, 2),
  Date_Augmentation DATE,
  Emp_No NUMBER(7)
);

-- Question 2: PL/SQL program
DECLARE
  CURSOR emp_cursor IS
    SELECT Emp_No, DT_ENTREE, SALAIRE
    FROM E_EMPLOYE for update;
  
  v_AugmentationAmt NUMBER(11, 2);
  v_Date_Augmentation DATE;
  v_No NUMBER(7) := 1; 

BEGIN
  FOR emp_rec IN emp_cursor LOOP
    -- Calculate augmentation amount based on hire year
    IF EXTRACT(YEAR FROM emp_rec.DT_ENTREE) = 1995 THEN
      v_AugmentationAmt := emp_rec.SALAIRE * 0.5;
    ELSIF EXTRACT(YEAR FROM emp_rec.DT_ENTREE) = 1996 THEN
      v_AugmentationAmt := emp_rec.SALAIRE * 0.25;
    ELSIF EXTRACT(YEAR FROM emp_rec.DT_ENTREE) = 1997 THEN
      v_AugmentationAmt := emp_rec.SALAIRE * 0.1;
    ELSE
      v_AugmentationAmt := 0;  -- No augmentation for other years
    END IF;
    
    -- Update employee salary
    UPDATE E_EMPLOYE
    SET SALAIRE = SALAIRE + v_AugmentationAmt
    WHERE Emp_No = emp_rec.Emp_No;
    
    -- Insert into E_Augmentation
    v_Date_Augmentation := SYSDATE;  -- Current date
    INSERT INTO E_Augmentation (No, Augmentation, Date_Augmentation, Emp_No)
    VALUES (v_No, v_AugmentationAmt, v_Date_Augmentation, emp_rec.Emp_No);
    
    v_No := v_No + 1;
  END loop;
  
  COMMIT; 
END;
/
