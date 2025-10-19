

 --TP1  CODE SORUCE :

/*
Travail à faire :
Effectuer le TP1 de SQL sous la supervision de :
 ✨Ayoub Majid
✨ Rochdi Mohammed Amine

*/



--1 :  I) Création des tables  ------------------- 

create table doc(
numDoc integer,
nomDoc varchar(20),
villeDoc varchar(20),
constraint pk_doc primary key(numDoc)
)


create table  pat(
 numPat number(3),
 nomPat varchar(20),
 villePat varchar(20),
 agePat number(3),
 constraint pk_pat primary key(numPat)
)

create table rdv(
numRdv  number(4),
dateRdv date ,
numDoc number(4),
numPat number(4),
motif varchar(20),
constraint pk_rdv  primary key(numRdv),
constraint fk_rdv_doc foreign key(numDoc) references doc(numDoc), 
constraint fk_pat_numPat foreign key(numPat) references pat(numPat)
);

create table med(
 numMed number(4),
nomMed varchar(20), 
prix decimal(8,2), 
constraint pk_med primary key(numMed),
 constraint check_med_prix  check(prix>=0)
);

Create Table  ORD
(
 NumOrd Number(4),
 DateOrd Date,
 NumDoc Number(4), 
 NumPat Number(4),
 Constraint PK_ORD Primary Key (NumORD), 
 Constraint Ref_Ord_Doc Foreign Key(NumDoc) References DOC(NumDoc),
 Constraint Ref_Ord_PAT Foreign Key(NumPat) References PAT(NumPat) 
);

create table det(
 numOrd  number(4),
 numLig number(4),
 numMed number(4),
 qte number(4),
 constraint pk_det primary key(numOrd,numLig),
 constraint fk_det_ord  foreign key(numOrd) references ord(numOrd),
 constraint fk_det_med  foreign key(numMed) references med(numMed)
); 


-- 2)a
ALTER TABLE doc
ADD CONSTRAINT villeChoice CHECK (villeDoc IN ('Rabat', 'Casablanca', 'Marrakech'));

--2)b
alter table  med
add constraint med_prixMoreThan0 check(prix>0);


--3) 
Alter session set nls_date_format='dd/mm/yyyy';

Insert into PAT Values(1,'Touzani','Rabat',35);
Insert into PAT Values(2,'Farhati','Casablanca',50);
Insert into PAT Values(3,'Naciri','Rabat',19);
Insert into PAT Values(4,'Andaloussi','Marrakech',10);
Insert into PAT Values(5,'Tounsi','Casablanca',20);
Insert into PAT Values(6,'Mourabiti','Salé',70);
Insert into PAT Values(7,'Essaaidi','Marrakech',41);
Insert into PAT Values(8,'Ansari','Rabat',37);
Insert into PAT Values(9,'Houari','Rabat',36);
Insert into PAT Values(10,'Touzani','Casablanca',52);

Insert into DOC Values(1,'Alaoui','Rabat');
Insert into DOC Values(2,'Filali','Marrakech');
Insert into DOC Values(3,'Rachidi','Casablanca');
Insert into DOC Values(4,'Berrada','Rabat');
Insert into DOC Values(5,'Bennani','Casablanca');

Insert into MED Values(1,'ACCUPRIL 5 MG',37.5);
Insert into MED Values(2,'ACDigest, Gélule',59);
Insert into MED Values(3,'ACERUMEN',58);
Insert into MED Values(4,'ACFOL 5 MG',26.20);
Insert into MED Values(5,'ACIDAC 150 MG',90);
Insert into MED Values(6,'ACIDAC 300 MG',90);
Insert into MED Values(7,'ACIGAM 100 MG',28.90);
Insert into MED Values(8,'ACLAV 1 G',99);
Insert into MED Values(9,'ACOL 1000 MG',18.30);
Insert into MED Values(10,'ACTACEPT 10 MG',400);
Insert into MED Values(11,'ACTALEVURE, Gelule',39);
Insert into MED Values(12,'ACTICARBINE 70 MG',46.90);

Insert into RDV Values(1,'12/10/2019',1,1,'Consultation');
Insert into RDV Values(2,'13/10/2019',1,2,'Consultation');
Insert into RDV Values(3,'05/11/2020',1,1,'Controle');
Insert into RDV Values(4,'12/01/2021',1,10,'Consultation');
Insert into RDV Values(5,'15/02/2021',2,2,'Controle');
Insert into RDV Values(6,'18/03/2021',5,10,'Consultation');
Insert into RDV Values(7,'28/05/2021',1,1,NULL);
Insert into RDV Values(8,'29/07/2021',3,2,'Consultation');
Insert into RDV Values(9,'15/08/2021',1,1,'Consultation');
Insert into RDV Values(10,'15/08/2021',4,2,'Controle');
Insert into RDV Values(11,'18/08/2021',1,7,'Controle');
Insert into RDV Values(12,'12/09/2021',1,1,NULL);
Insert into RDV Values(13,'16/10/2021',5,7,'Consultation');
Insert into RDV Values(14,'18/10/2021',5,2,'Consultation');
Insert into RDV Values(15,'25/12/2021',3,2,'Controle');
Insert into RDV Values(16,'12/01/2022',5,3,'Consultation');
Insert into RDV Values(17,'30/03/2022',2,9,'Controle');
Insert into RDV Values(18,'12/10/2022',1,1,'Consultation');
Insert into RDV Values(19,'12/10/2022',1,3,'Controle');
Insert into RDV Values(20,'13/10/2022',1,4,'Controle');
Insert into RDV Values(21,'13/10/2022',1,5,'Controle');
Insert into RDV Values(22,'15/10/2022',1,6,'Controle');
Insert into RDV Values(23,'15/10/2022',1,8,'Controle');
Insert into RDV Values(24,'16/10/2022',1,9,'Controle');
Insert into RDV Values(25,'15/10/2022',1,10,'Controle');

Insert into ORD Values(1,'12/10/2019',1,1);
Insert into ORD Values(2,'13/10/2019',1,2);
Insert into ORD Values(3,'12/01/2021',1,10);
Insert into ORD Values(4,'18/03/2021',5,10);
Insert into ORD Values(5,'29/07/2021',3,2);
Insert into ORD Values(6,'15/08/2021',1,1);
Insert into ORD Values(7,'16/10/2021',5,7);
Insert into ORD Values(8,'18/10/2021',5,2);
Insert into ORD Values(9,'12/01/2022',5,3);
Insert into ORD Values(10,'12/10/2022',1,1);

Insert into DET Values(1,1,1,2);
Insert into DET Values(2,1,1,3);
Insert into DET Values(2,2,4,2);
Insert into DET Values(2,3,3,4);
Insert into DET Values(3,1,1,1);
Insert into DET Values(3,2,5,1);
Insert into DET Values(3,3,7,2);
Insert into DET Values(3,4,9,1);
Insert into DET Values(4,1,1,1);
Insert into DET Values(4,2,10,2);
Insert into DET Values(4,3,12,1);
Insert into DET Values(5,1,6,2);
Insert into DET Values(5,2,8,1);
Insert into DET Values(5,3,10,3);
Insert into DET Values(5,4,11,1);
Insert into DET Values(6,1,3,1);
Insert into DET Values(6,2,7,4);
Insert into DET Values(6,3,9,1);
Insert into DET Values(7,1,1,5);
Insert into DET Values(7,2,3,6);
Insert into DET Values(8,1,1,1);
Insert into DET Values(9,1,1,1);
Insert into DET Values(9,2,7,3);
Insert into DET Values(10,1,1,5);
Insert into DET Values(10,2,10,3);
Insert into DET Values(10,3,11,5);
Insert into DET Values(10,4,1,4);

Commit;


-- 4)
 create view V_PAT_RABAT 
 as select * from pat where villePat='Rabat';
 -- Peut-on insérer des tuples à partir de cette vue ? oui 
 insert into V_PAT_RABAT values (11,'ayoub','Rabat',19); 


-- 5 )
create  view  V_ORD_Total  as 
select numOrd ,sum(qte*prix) as "Total" from det d ,med  m
 where  d.numMed=m.numMed  
 group by numOrd ;
 

-- II) Mise à jour de la base de données :-------------------------  
-- 1) 
UPDATE pat
SET villePat = 'Casablanca'
WHERE nomPat = 'Naciri' AND villePat = 'Rabat';


-- 2)
UPDATE med
SET prix = prix * 1.20
WHERE prix < 60;

--3 )
COMMIT;



--4 ) 
DELETE FROM pat
WHERE numPat = 1;


DELETE FROM rdv WHERE numPat = 1;
DELETE FROM ord WHERE numPat = 1;
DELETE FROM pat WHERE numPat = 1;
COMMIT;


--5 ) 
DELETE FROM ord
WHERE dateOrd < TO_DATE('01/01/2020', 'DD/MM/YYYY');



-- II) Mise à jour de la base de données :

--1
select * from pat;


--2)
SELECT nomPat, agePat
FROM pat
WHERE villePat = 'Rabat';


--3)
SELECT *
FROM pat
WHERE villePat = 'Casablanca' AND nomPat = 'Touzani';

-- 4)
SELECT * FROM PAT 
WHERE NomPat = 'Naciri' OR NomPat = 'Ansari';

--5)
SELECT NomPat FROM PAT 
WHERE NomPat LIKE '%d%' ;

-- 6)

select * from ord
where to_char(dateOrd,'yyyy')=2021
order by numOrd ;


-- 7)
select distinct nomPat 
from pat p,ord o ,det d,med m
where p.numPat=o.numPat  and
o.numOrd=d.numOrd and
d.numMed=m.numMed and
m.prix>80;

-- 8
 select distinct p1.numPat 
   from pat p1,ord o ,det d,med m
   where p1.numPat=o.numPat  and
   o.numOrd=d.numOrd and
   d.numMed=m.numMed and
   m.prix>80

-- 9)

select distinct nomPat from pat  p
where p.numPat not in(
   select distinct p1.numPat 
   from pat p1,ord o ,det d,med m
   where p1.numPat=o.numPat  and
   o.numOrd=d.numOrd and
   d.numMed=m.numMed and
   m.prix>80
);

--10)
select numDoc , count(numRdv) as "nombre des RDV"
from rdv 
where to_char(dateRdv,'yyyy')='2021'
group by numDoc;


-- 11)
select o.numOrd , sum(qte*m.prix) as "montant Tota"  
from ord o 
join det d on o.numOrd=d.numOrd 
join med m on d.numMed=m.numMed
group by o.numOrd 
order by o.numOrd desc; 

-- 12 )
select * from pat 
where numPat not in(select p.numPat from pat p,rdv r
where p.numPat=r.numPat and to_char(r.dateRdv,'yyyy')='2021');

-- 13)
SELECT r.NumPat, p.NomPat
FROM RDV r
JOIN PAT p ON r.NumPat = p.NumPat
GROUP BY r.NumPat, p.NomPat
HAVING COUNT(DISTINCT r.NumDoc) = (SELECT COUNT(*) FROM DOC);
--or
SELECT p.NumPat, p.NomPat
FROM PAT p
WHERE NOT EXISTS (
    SELECT DISTINCT d.NumDoc
    FROM DOC d
    WHERE NOT EXISTS (
        SELECT *
        FROM RDV r
        WHERE r.NumPat = p.NumPat AND r.NumDoc = d.NumDoc
    )
);


-- 14
select nomDoc from doc d

where not exists(

 select distinct p.numPat from pat p 

  where not exists(
   select * from rdv r
   where r.numDoc=d.numDoc and r.numPat=p.numPat  
  )

);


--15
select * from pat p 
where
not exists ( 
(select distinct r1.numdoc from rdv r1 where r1.numPat=p.numPat)
    minus
(select distinct r2.numDoc from rdv r2 where r2.numPat=10) 
     )
and not exists(
(select distinct r3.numDoc from rdv r3 where r3.numPat=10) 
    minus
(select distinct r4.numdoc from rdv r4 where r4.numPat=p.numPat)
) and p.numPat<>10;

-- or : but this include pat who has other rdv 
SELECT p.NumPat, p.NomPat
FROM PAT p
WHERE NOT EXISTS (
    SELECT d.NumDoc
    FROM DOC d
    where d.numDoc in (select distinct numDoc from rdv where numPat=10 )
    and NOT EXISTS (
        SELECT *
        FROM RDV r
        WHERE r.NumPat = p.NumPat and r.NumPat <> 10 AND r.NumDoc = d.NumDoc 
    )
);

-- or : 
SELECT p.NumPat, p.NomPat
FROM PAT p
WHERE NOT EXISTS (
    SELECT d.NumDoc
    FROM DOC d
    where d.numDoc in (select distinct numDoc from rdv where numPat=10 )
    and NOT EXISTS (
        SELECT *
        FROM RDV r
        WHERE r.NumPat = p.NumPat and r.NumPat <> 10 AND r.NumDoc = d.NumDoc 
    )
  
)  and (SELECT count(distinct numDoc) 
    FROM rdv r1
    WHERE r1.NumPat = 10 )
    = (SELECT count(distinct numDoc) 
    FROM rdv r1
    WHERE r1.NumPat = p.numPat)


-- 16
SELECT m.NomMed, COUNT(*) AS PrescriptionCount
FROM MED m
JOIN DET d ON m.NumMed = d.NumMed
JOIN ORD o ON d.NumOrd = o.NumOrd
JOIN RDV r ON o.NumPat = r.NumPat AND r.NumDoc = o.NumDoc
WHERE TO_CHAR(r.DateRDV, 'YYYY') = '2021'
GROUP BY m.NomMed
ORDER BY PrescriptionCount DESC;



