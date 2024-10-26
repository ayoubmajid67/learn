-- Establish a  connection with  the server : 
mongosh string

-- show all databases:
show dbs

-- create a new database : 
use databaseName 

-- create a new collection : 
db.createCollection(collectionName)

-- drop a database : 
db.dropDatabase()  -- Drop the current used database : 

--  insert a document into a collection : 
db.collectionName.insertOne(object)

-- show collection documents : 
db.collectionName.find() 

-- insert many document in a collection : 
db.collectionName.insertMany([object1,object2,...,objectN])

-- display documents of a collection sorted in a order : 
db.collectionName.find().sort({filedNameToSortWith:[-1 : (desc) , 1 : (asc) ]})

-- limit the number of documents return  :
db.collectionName.find().limit(nbrDocumentToReturn)

-- using the find function  :
db.collection.find({query},{projection})
db.collection.find({filed1Name:valueToEqual},{filedNName:valueToEqual},{filedName:apprearnesStat(false | true)} )

/*
-query : specfiy a condition at the document filed 
-projection : select the filed thaat should be apprear [ the _id by default apprear you should make it false ]
*/

-- example :  -- []
    -- sql query : 
    select name from students 
    where name = 'Ayoub'

    -- transformation to mongosh : 
    db.students.find({name:'ayoub'},{name:true})

--  update a document : 
db.collectionName.updateOne(filtre,update)
/*
$set : set or define a  new filed  value 
$unset : remmove a filed 

*/
-- example : 
    -- update the document with the name ='ayoub' to be updatedName 
    db.students.updateOne({name:'ayoub'},{$set:{name:'updatedName'}})

    db.students.updateOne(
        
        {name:'ayoub',courses:[]},
        {$set:{name:'updatedName'}}
        
        )
    -- remove the username filed of the document with the username = 'kk'
    db.students.updateOne({username:'kk'},{$unset:{username:'d'}})

-- update multiple documents :
db.collectionName.updateMany(filtre,update)
-- examples : 

-- example 1  : update all documents that do not have a name 
db.students.updateMany({name:{$exists:false} },{$set:{name:'defaultName'}})

-- delete a document  :
db.collectionName.deleteOne({filtre})

--  example : 
db.students.deleteOne({username:"kk"})

-- delete multiple documents :
 db.collectionName.deleteMany({filtre})
 
-- example : 
db.students.deleteMany({username:"kk"})

-- comparaison operators : 
/*
    $ne : not equal 
    $lt : less than 
    $gt : grater than
    $lte : less than or equal 
    $gte : grater than or equal  
    $in : in range of values []
    $nin : not in range of values []
*/
-- examples : 

-- find every lastname except Kamal : $ne
db.students.find({lastname:{$ne:'Kamal'}})

-- find every document where age grater than pr equal 20 
db.students.find({age:{$gte:20}})

-- Retrieve all documents with names 'Ayoub' or 'Amina'
db.students.find({name:{$in:['Ayoub','Amina']}})

-- Retrieve all documents not in names 'Ayoub' or 'Amina'
db.students.find({name:{$nin:['Ayoub','Amina']}})

-- logical operators : 
/*
    $and 
    $not 
    $nor : returns all documens that fail to match both clauses 
    $or 

*/
--   Retrieve all documents in names 'Ayoub' or 'kamal' and have an age grater than 20 
db.students.find({ $and :[ {name: { $in:['Ayoub','kamal'] } },{age:{$gt:20}} ]})

--   Retrieve all documents in names 'Ayoub' or 'kamal' or have an age grater than 20 
db.students.find({ $or :[ {name: { $in:['Ayoub','kamal'] } },{age:{$gt:20}} ]})

-- Retrieve all documents   names 'Ayoub' or 'kamal' and    have an age grater than 20 
-- :(not include null ages)  
 db.students.find({$and :[ {name:{$in :['Ayoub','kamal']}} ,{age :{$gt:20}} ]})

-- Retrieve all documents not in  names 'Ayoub' or 'kamal' and not  have an age grater than 20 
-- :(include null ages)  
db.students.find({$and :[ {name:{$in :['Ayoub','kamal']}} ,{age :{$not:{$lte:20}}} ]})


-- indexes : 
/*
    Indexes support the efficient execution of queries in MongoDB. Without indexes,
    MongoDB mustperform a collection scan, i.e. scan every document in a collection,
    to select those documents that
    match the query statement. If an appropriate index exists for a query,
    MongoDB can use the index to limit the number of documents it must 
    inspect.
*/

-- get the executionStat of a query :
db.collectionName.query().explain('executionStats')

-- add an index at a specific filed : 
db.collectionName.createIndex({filedName:[1 | -1]})
/*
     1 : range filed values in ascending order 
    -1 : range filed values in descending order 
*/


-- examples :
    --  Add index to the 'name' field
    db.students.createIndex({ name: 1 })

    --  Add index to the 'age' field
    db.students.createIndex({ age: 1 })

    --  Add compound index to multiple fields
    db.students.createIndex({ name: 1, age: -1 })


-- get all indexes in your collection :
db.collectionName.getIndexes()

-- drop Indexes :

    -- Drop all indexes except the default '_id' index
    db.collection.dropIndexes()

    -- Drop index by specifying the fields
    db.collection.dropIndex({ field1: 1, field2: -1 })

    -- Drop index by name
    db.collection.dropIndex("index_name")

-- get all collection in your system 
show collectios 

-- create a collection : 
db.createCollection('collectionName',{capped:true,size:valueInKb,max:maxNbrOfDocuments,autoIndexId: 1 | 0 })

/*
capped : 	
    To create a capped collection, specify true. If you specify true, 
    you must also set a maximum size in the size option.
max :
    The maximum number of documents allowed in the capped collection.
    The size option takes precedence over this limit. If a capped collection
    reaches the size limit before it reaches the maximum number of documents, 
    MongoDB removes old documents. If you prefer to use the max limit, 
    ensure that the size limit, which is required for a capped collection, 
    is sufficient to contain the maximum number of documents.

size :
    Specify a maximum size in bytes for a capped collection. Once a capped
    collection reaches its maximum size, MongoDB removes the older documents 
    to make space for the new documents. The size option is required for capped 
    collections and ignored for other collections.

autoIndexId:
Specify false to disable the automatic creation of an index on the _id field.
*/

-- drop collection :
db.collectionName.drop()
