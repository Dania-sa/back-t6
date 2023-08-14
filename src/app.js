const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "task6"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return  console.log('error has occured')
    }
    console.log('All Perf')

    const db = res1.db(dbname)
//insertOne   2
        db.collection('users').insertOne({
            name : 'dania',
            age : 26
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })

        db.collection('users').insertOne({
            name : 'nour',
            age : 27
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })

//insertMany  10     5 of 10   =>   age    25
        db.collection('users').insertMany(
            [
                {name:'ahmad' , age: 25} ,
                {name:'samer' , age: 25} ,
                {name:'suzan' , age: 25} ,
                {name:'malak' , age: 25} ,
                {name:'rana' , age: 25} ,
                {name:'nada' , age: 24} ,
                {name:'walaa' , age: 26} ,
                {name:'hani' , age: 28} ,
                {name:'hala' , age: 28} ,
                {name:'mulham' , age: 30} 
            ] , (error , data) => {
                if (error){
                    console.log('Unable to insert data')
                }
                console.log(data.insertedCount)
            }
        )
//find   match  25
        db.collection('users').find({age : 25}).toArray((error, users)=> {
            if(error){
                console.log('Data not found')
            }
            console.log(users)
        })
// limit  3     25y
        db.collection('users').find({age : 25}).limit(3).toArray((error, users)=> {
            if(error){
                console.log('Data not found')
            }
            console.log(users)
        })
// $set  name    4
        db.collection('users').updateMany({name :'ahmad'}, {
        $set : {name:'ali'}
        })
        .then((data1)=> {console.log(data1.modifiedCount)})
        .catch((error)=>{console.log(error)})

        db.collection('users').updateMany({name :'samer'}, {
        $set : {name:'khalil'}
        })
        .then((data1)=> {console.log(data1.modifiedCount)})
        .catch((error)=>{console.log(error)})

        db.collection('users').updateMany({name :'malak'}, {
        $set : {name:'oula'}
        })
        .then((data1)=> {console.log(data1.modifiedCount)})
        .catch((error)=>{console.log(error)})

        db.collection('users').updateMany({name :'suzan'}, {
        $set : {name:'sarah'}
        })
        .then((data1)=> {console.log(data1.modifiedCount)})
        .catch((error)=>{console.log(error)})
// updateOne  for 1    inc  20
        db.collection('users').updateOne({_id:mongodb.ObjectId("64da4f0d8fb9c49f3a634ec7") }, {
        $inc : {age:20}
        })
        .then((data1)=> {console.log(data1.modifiedCount)})
        .catch((error)=>{console.log(error)})
//updateMany  inc  age  10
        db.collection('users').updateMany({age : 25}, {
        $inc : {age : 10}
        })
        .then((data1)=> {console.log(data1.modifiedCount)})
        .catch((error)=>{console.log(error)})
// deleteOne   1
        db.collection('users').deleteOne({_id:mongodb.ObjectId("64da4f32694b7ffe7fb21ed5") })
        .then((data1)=> {console.log(data1.deletedCount)})
        .catch((error)=>{console.log(error)})
// deleteMany   age  35
        db.collection('users').deleteMany({age: 35 })
        .then((data1)=> {console.log(data1.deletedCount)})
        .catch((error)=>{console.log(error)})
    
})