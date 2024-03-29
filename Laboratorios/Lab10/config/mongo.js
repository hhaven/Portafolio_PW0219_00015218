const Mongoose = require("mongoose");

let database = "LaboJueves";
let host = "localhost";
let port = "27017";

let uri = `mongodb://${host}:${port}/${database}`;

const connect = ()=>{
    Mongoose.connect(uri,
        { useNewUrlParser: true,
        useUnifiedTopology: true})
        .then( ()=>{
            console.log(`Connection to ${database} succesfull`);
        })
        .catch( ()=>{
            console.log("error")
        });

        Mongoose.Promise = global.Promise;

}

module.exports = {connect}


