// handling MongoDB

const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

//Local server and database configuration

const clientUrl = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

//Connecting with the server and also we will be used for Inserting the data into Database

mongoClient.connect(clientUrl,{useNewUrlParser:true},(error,client)=>{

    if (error){
        return console.log('Unable to connect with the database, Please try again!!!')
    }

    const db = client.db(dataBaseName)
    
    db.collection('tasks').findOne({_id:new ObjectId("63b183a03699df72bcde708d")},(error,user)=>{

        if(error){
            return console.log('Unable to retrive user!!')
        }

        console.log(user)
    })

    db.collection('tasks').find({status:false}).toArray((error,tasks)=>{
            console.log(tasks)
    })
})