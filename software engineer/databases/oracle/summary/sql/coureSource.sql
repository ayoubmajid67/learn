--- page 13 :

-- Create EMP table
CREATE TABLE EMP (
    Deptno INT,
    Job VARCHAR(30),
    Sal INT
);

-- Insert data into EMP table
INSERT INTO EMP (Deptno, Job, Sal) VALUES (10, 'Dir technique', 5000);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (10, 'Chef projet', 1500);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (10, 'programmeur', 1300);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (20, 'Chef projet', 2975);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (20, 'Analyste', 3000);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (20, 'programmeur', 1100);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (30, 'Chef projet', 2850);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (30, 'commercial', 1250);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (30, 'commercial', 1600);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (30, 'commercial', 1500);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (30, 'programmeur', 950);
INSERT INTO EMP (Deptno, Job, Sal) VALUES (30, 'commercial', 1250);


-- page 21 
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


-- page 25 :

-- Create EMP table
CREATE TABLE EMP (
    Deptno INT,
    NOM VARCHAR(50),
    sal INT
);

-- Insert data into EMP table
INSERT INTO EMP (Deptno, NOM, sal) VALUES (10, 'Alaoui', 5000);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (10, 'Filali', 1500);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (10, 'Rachidi', 1250);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (20, 'Tahiri', 2975);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (20, 'Rochdi', 3000);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (20, 'Ouazzani', 1100);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (30, 'Zohri', 2850);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (30, 'Azhari', 1250);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (30, 'Taouil', 1600);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (30, 'Rbati', 1500);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (30, 'Andaloussi', 950);
INSERT INTO EMP (Deptno, NOM, sal) VALUES (30, 'Soussi', 1250);

commit;


