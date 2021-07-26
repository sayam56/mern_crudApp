// imports
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import env from 'dotenv'
import bodyParser from 'body-parser'
import Students from './models/students.js'

const app = express()


// environment variables configurator
env.config();

//db connections
// mongodb://admin:<password>@crud-cluster-shard-00-00.pd9rz.mongodb.net:27017,crud-cluster-shard-00-01.pd9rz.mongodb.net:27017,crud-cluster-shard-00-02.pd9rz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-zx7mhw-shard-0&authSource=admin&retryWrites=true&w=majority
// mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@flipcluster-shard-00-00.94mqt.mongodb.net:27017,flipcluster-shard-00-01.94mqt.mongodb.net:27017,flipcluster-shard-00-02.94mqt.mongodb.net:27017/${process.env.MONGO_DB_DBNAME}?ssl=true&replicaSet=atlas-stf3qs-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect(
     `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@crud-cluster-shard-00-00.pd9rz.mongodb.net:27017,crud-cluster-shard-00-01.pd9rz.mongodb.net:27017,crud-cluster-shard-00-02.pd9rz.mongodb.net:27017/${process.env.MONGO_DB_DBNAME}?ssl=true&replicaSet=atlas-zx7mhw-shard-0&authSource=admin&retryWrites=true&w=majority`,
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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
     extended: true
}));

// create routes
app.get("/", (req, res) => {
     console.log('get request');
     res.send('get req sent');
});
app.post("/students", (req, res) => {
     console.log(req.body.firstName);
     console.log(req.body.lastName);
     console.log(req.body.place);
     const student = new Students ({
          _id : new mongoose.Types.ObjectId,
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          place : req.body.place
     });
     student.save((err, stud) => {
          if (err) return res.status(400).json({err});
          if (stud) return res.status(200).json({stud});
     });
     res.send('ok');
});

// server
app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`);
});