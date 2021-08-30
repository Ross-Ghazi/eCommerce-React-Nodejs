import  Mongoose  from "mongoose"
const userSchema = mongoose.Schema({
name:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true,
    unique=True
},

password:{
    type:String,
    required:true
},

isAdmin:{
    type:Boolean,
    required:true,
    default:flase
}
},{timestaps:true})

const User=mangoose.model("User",userSchema )

export default User