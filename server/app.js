// imports
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import env from 'dotenv'
import bodyParser from 'body-parser'
import studentRoutes from './routes/students_routes.js'

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
app.use('/', studentRoutes);

// server
app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`);
});