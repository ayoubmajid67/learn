-- cree par michael widenius 
-- oracle  
-- sql structure query language : 

-- phpmyadmin  est une application web pour le gestion des base des donnees


#"prepare the environment  :--------------------------------------------------------------------------"
-- we need to install XAMPP :
-- then we host local host and go php myadmin 
-- now you are ready to code with SQL  : 

#" SQL in CMD  :--------------------------------------------------------------------------------------"
 --mysql -u root -p 
  -- ten entre entre 


#  "affiche hello world" 
  select "hello world "
  

  # "role of sql : ------------------------------------------------------------------------------------"
  -- comment in sql (--) or we can use (#) 

-- do a comment to multiple line  /* query */
-- in the end of each instructions you need to add ; 

#"write a string :" 
-- "string" if  you want to ignore the specified character in a string you can use the  \ before it : 

#"math"  
-- we  mathematical  operations  : 
-- * 
-- - 
-- / 
-- ^ 
-- % 

#" data type ---------------------------------------------------------------------------"

"-- integer :" 
/*
TINYINT 1BYTE 
SMALLINT 2BYTE 
MEDIUMINT 3BYTE 
INT 4BYTE 
BIGINT 8BYTE 

-- IF YOU ADD UNSIGNED YOU BECOME CAN JUST STORE  THE POSITIVE NUMBER : 
*/

"-- numeric et decimal"  
/*
decimal(integerNBR,floatNBr) 
decimal(5,3) 99.999
*/

-- float 4byte 
-- real double  8byte 

"--notes  :" 
decimal and numeric  exact value 
float and double and real  save in the round value : 

"#string :" 

-- char and varchar  255byte

--char add a space in the end  of the string :   "omar " 
-- varchar don't add any space in the end  "omar"

"#text" 

--TINYTEXT 2^8 BYTE 
--TEXT 2^16 BYTE
--MEDIUMTEXT 2^24 BYTE 
--LONGTEXT 2^32 BYTE 

"#DATE TIME DATETIME" 

-- DATE SAVE A DATE "YEAR-MONTH-DAY"
--TIME "HOUR:MINUTE:SECOND"
--DATETIME "YEAR-MONTH-DAY HOUR:MINUTE:SECOND"
--YEAR 
--TIMESTAMP 
--DEFAULT DATE AND DATETIME 0



"--SUB LANGUAGE ---------------------------------------------------------------"
#LDD :  CREATE ,DROP ,RENAME ,TRUNCATE ("definition des donnees ") 
#LMD INSERT, UPDATE, DELETE, LOCK, TABLE ("manipulation des donnees ")
#LID select ("interrogation des donnees ")
#LCD GRAND REVOKE ,COMMIT ,ROLLBACK ,SAVEPOINT , SET TRANSACTION ("controle des donneees  ")


# " database operation :---------------------------------------------"

# "create database :"
create database name_of_database; 

# "drop database :"
--drop database : 
drop database name_of_database; 

--drop if the database if exist : 
drop database  if exists name_of_database; 

# "use database :"
use name_of_database; 

# " table  operation :---------------------------------------------"

#"creation d'une table :"
create table table_name (
column1 type 
column2 type 
....
....
..
column n type 
); 

#"show all table in a database :"
SHOW TABLES; 

#"insert into a table :"
insert into table_name (column1,...,column_n)  values (value1,...,value_n),(...),(..),..; 
--or 
insert into table_name 
set column1=value,column2=value2...; 

#"display table"
select * or (column1 ..,column_n ) from table 

#"where" 
select * or (column1 ..,column_n ) from table  where condition 

#"condition "

-- > ,< ,>=,<=,=,<>,!=
-- like "str"                      => ="str"   

-- % replace a string  might be ignore  example  => name like  "%youb%"  the  the name contain youb
-- _ replace a character  should not be ignore  example  => name like  "_a%"  the second character in the name is a 

-- between  value1 and value 2    interval  [value1,value2]
--  int (value1,value2,value3..)    => =value1 or value2 or value3 or ..  
-- any 
-- all 
-- exist 
-- not condition => switch condition  
-- condition1  or condition2     
-- condition1 and condition2 
-- xor  eleminer la cas tous les conditions vrai  (either condition1 true or either condition2 true )

#"update "
update table_name
set column1=value ,column2=value ...
where condition; 

#"delete"
delete from table_name where condition ;  

#"drop table : "
drop table table_name; 

#"order by "
select * from table_name order by column1 asc or desc 

#"group by and having  "
select column_group , function(column) from table_name
group by column 
having  condition; 

#"distinct" 
select distinct column1.. from table_name; 

#"limit"

select * from table_name 
 limit value offset value

#"alias"
select column as alias_name from table_name; 

#"function "
--signal row function :____________________ 
--upper
select upper(column) from table_name; 
--lower
select lower(column) from table_name; 
--sysdate() : return the current date : 

--datediff(date1,data2) return (date1 -date2)day

--example  :  evaluate the age of a employee ; 
select datediff(sysdate(),date_naissance)/365 from  employee;

--round function :  edit the froma of a number : 
select round(salary,2) from employee;  => display two number after semicolon  

-- ifnull(value,default) if null replace by default :

--multiple row function()

--count(column)
--max(column)
--min(column)
--max(column)
--avg(column)


#"limit"

#"column operation---------------------------------------------"

#"change the name and the type of a column "
alter table table_name
change column_name new_name type;
-- or 
alter table table_name
rename column column_name to new_name  ; 

#"add column  "
alter table table_name
add column column_name type  --choose (after another column)

#"change the position of a column  "
alter table table_name
modify column column_name type  after another column;

#"change the type of a column "
alter table table_name
modify column column_name new_type;  


#"drop column "
alter table table_name
drop column name 

#"constraint---------------------------------------------"

#"--null and not null :" 
create table table_name (
column1 type  not null 
);
-- or 
alter table table_name 
modify column type not null; 


#" unique :" 
create table table_name (
column1 type unique 
);
--or 
alter table table_name 
add constraint constraint_name unique(column);


#"CHECK"
create table table_name (
column1 type CHECK condition
-- or 
constraint constraint_name CHECK condition 
);
--or 
alter table table_name 
add constraint constraint_name CHECK condition;


#"DEFAULT"
create table table_name (
column1 type DEFAULT value  
);
--or 
alter table table_name 
add constraint constraint_name  column Set DEFAULT value;


#"primary key : "
create table table_name (
column1 type primary key ,
--or 
primary key (column,...)   
--or 
constraint constraint_name primary key (column..)
);
--or 
alter table table_name 
add constraint constraint_name  primary key (column);


#"foreign key "

create table table_name (
column1 type,
constraint constraint_name foreign key (column..) references table_name(column)  
);
--or 
alter table table_name 
add constraint foreign key (column..) references table_name(column);


#"join-----------------------------------------"

#"inner join"
select * from table1 inner join table2 on table1.column=table2.column 

#"left join"
select * from table1 left join table2 on table1.column=table2.column 

#"right join"
select * from table1 right join table2 on table1.column=table2.column 






















