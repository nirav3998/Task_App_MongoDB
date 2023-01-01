// handling MongoDB

const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

//Local server and database configuration

const clientUrl = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

//Connecting with the server

mongoClient.connect(clientUrl,{useNewUrlParser:true},(error,client)=>{

    if (error){
        return console.log('Unable to connect with the database!!!')
    }

    // console.log('Connected Successfully!!!')
    const db = client.db(dataBaseName)
    db.collection('users').insertOne({
        name : 'Nirav',
        age : 27
    })
})