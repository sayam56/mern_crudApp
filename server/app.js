// imports
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()

//db connections
mongoose.connect(
     `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@flipcluster-shard-00-00.94mqt.mongodb.net:27017,flipcluster-shard-00-01.94mqt.mongodb.net:27017,flipcluster-shard-00-02.94mqt.mongodb.net:27017/${process.env.MONGO_DB_DBNAME}?ssl=true&replicaSet=atlas-stf3qs-shard-0&authSource=admin&retryWrites=true&w=majority`,
     {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
     }
).then((message) =>{
     console.log('db connected successfully');
}).catch((e) => {
     console.log(e);
});

// create middle wares

// create routes

// server