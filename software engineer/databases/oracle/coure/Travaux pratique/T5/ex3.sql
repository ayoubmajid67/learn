CREATE OR REPLACE FUNCTION Recette_annuelle(p_year IN NUMBER)
RETURN NUMBER
AS
  v_total_annuel NUMBER(11,2) := 0;

BEGIN
  SELECT NVL(SUM(TOTAL), 0)
  INTO v_total_annuel
  FROM e_commande
  WHERE EXTRACT(YEAR FROM DATE_COMMANDE) = p_year;

  RETURN v_total_annuel;
END Recette_annuelle;
/

DECLARE
  v_year NUMBER := 2004; 
  v_total_annuel NUMBER(11,2);

BEGIN
  -- Call the Recette_annuelle function
  v_total_annuel := Recette_annuelle(v_year);

  -- Output the result
  DBMS_OUTPUT.PUT_LINE('Total revenue for year ' || v_year || ': ' || v_total_annuel);

EXCEPTION
  WHEN OTHERS THEN
    -- Handle any exceptions
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);

END;
/


