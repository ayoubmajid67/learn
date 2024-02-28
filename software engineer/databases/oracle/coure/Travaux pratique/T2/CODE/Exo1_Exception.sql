
 


-- create table E_Resultat (No Number(2), LB_Resultat Varchar2(60), VL_Resultat Number(11,2));



Create sequence S1 ORDER;
declare

V_No E_client.No%Type:=&NumClient;
V_Nom E_client.nom%Type;
v_an  number(4):=&annee; 
Mt_commandes Number(11,2);
Mt_Client Number(11,2);
Rapport Number(11,2);
invalidYear exception; 
Begin
if  v_an >2023 or v_an<1990 then
raise invalidYear; 
end if;
Select Nom Into V_Nom From E_client where No=V_No;
Select SUm(Total) Into Mt_commandes from e_commande where to_char(date_commande,'YYYY')=v_an;
Select SUm(Total) Into Mt_Client from e_commande where Client_No=V_No and  to_char(date_commande,'YYYY')=v_an;
Mt_client:=NVL(Mt_client,0);
Rapport := Mt_commandes/Mt_Client;
Insert into E_resultat Values(S1.NEXTVAL, 'Rapport des commandes du client '||V_Nom, Rapport);
COMMIT;
EXCEPTION
WHEN NO_DATA_FOUND Then
 Insert into E_resultat Values(S1.NEXTVAL, 'Client inconnu : '||V_Nom, 0);
 COMMIT;
WHEN ZERO_DIVIDE Then 
  Insert into E_resultat Values(S1.NEXTVAL, 'Client sans commandes : '||V_Nom, 0);
  COMMIT;

when invalidYear then 
dbms_output.put('invalid Date you should enter a date between 1990-2023 ');

End;
/
