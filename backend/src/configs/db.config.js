const dns = require('dns/promises');
dns.setServers(['8.8.8.8', '8.8.4.4']);
console.log(dns.getServers());
// [ '127.0.0.53' ]
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log("URI being used:", process.env.MONGO_URI);

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI).then(()=> {
        console.log('Connected to DB...');
    }).catch((error)=> {
        console.log('DB ERROR: ', error.message);
    })
}

module.exports = connectDB;