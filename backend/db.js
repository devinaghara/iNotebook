const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/iNotebook?"

const connectToMongoose = () => {
    try
    {
        mongoose.connect(mongoURI)
        console.log("Database connected");
    }catch(e)
    {
        console.log(e)
    }
    mongoose.connect(mongoURI)
    console.log("Database connected");
}

module.exports = connectToMongoose;

// old one

// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }

// module.exports = connectToMongo;

