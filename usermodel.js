const mongoose = require('mongoose');
// mongoose.Connect('mongodb://localhost:27017/mongopractice');

main().then(()=>{
    console.log("done");
}).catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');
}

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model("user", userSchema);