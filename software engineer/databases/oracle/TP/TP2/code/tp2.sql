
set verify off;
set serveroutput on;
accept i_noClient e_client.no%type prompt 'entere le numero de client a chercher';

declare 
v_nom e_client.nom%type;
v_ville e_client.ville%type;
v_no e_client.no%type;
v_isExist   e_client.no%type :=0;
v_client e_client%rowtype;
begin
-- 1 Qui affiche le nom et la ville du client numéro 3;
dbms_output.put_line(chr(10) || '1 Qui affiche le nom et la ville du client numéro 3');
select nom,ville into v_nom,v_ville from e_client
where no=3;

-- affiche les resultat :
dbms_output.put_line('le nom de client 3 : ' || v_nom);
dbms_output.put_line('le nom de client 3 : ' || v_ville);

-- 2. qui affiche le numéro, le nom et la ville de chaque client;

dbms_output.put_line(chr(10) || 'qui affiche le numéro, le nom et la ville de chaque client');
for client in (select no,nom,ville from e_client) loop

dbms_output.put_line('le numero ' || client.no);
dbms_output.put_line('le nom ' || client.nom);
dbms_output.put_line('la ville ' || client.ville);
dbms_output.put_line(' ');

end loop;



-- 3- qui affiche uniquement les client qui habitent rabat
dbms_output.put_line(chr(10) || 'qui affiche uniquement les client qui habitent rabat');
for client in (select no,nom,ville from e_client where ville='Rabat') loop

dbms_output.put_line('le numero ' || client.no);
dbms_output.put_line('le nom ' || client.nom);
dbms_output.put_line('la ville ' || client.ville);
dbms_output.put_line(' ');

end loop;

-- 4- . qui vérifie si un client, dont le numéro est saisi au clavier, existe dans la liste des clients.
  
      v_no:=&i_noClient;
   
  select count(no) into v_isExist from e_client where no=v_no;
 
 if v_isExist > 0 then 

           DBMS_OUTPUT.PUT_LINE('client avec  ' ||v_no  || ' existe.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Client avec ' || v_no || ' n''est pas existe.');

 end if;


 -- 5 qui récupère le numéro d’un client du clavier et affiche ses informations

 v_no:=&i_noClient;

select *  into v_client from e_client
where no=v_no;
dbms_output.put_line('le numero ' || v_client.no);
dbms_output.put_line('le nom ' || v_client.nom);
dbms_output.put_line('le prenom ' || v_client.prenom);
dbms_output.put_line('le telephone ' || v_client.telephone);
dbms_output.put_line('l''adresse ' || v_client.adresse);
dbms_output.put_line('la ville ' || v_client.ville);
dbms_output.put_line('la pays ' || v_client.pays);
dbms_output.put_line(' postal  ' || v_client.cp_postal);
dbms_output.put_line('  commentaire  ' || v_client.commentaire );
dbms_output.put_line(' ');



end;
/