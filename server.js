const express = require('express');
const app = express();

const mongodb = "mongodb://0.0.0.0:27017/eventreminder";
const mongoose = require('mongoose');
const UserModel = require('./models/user.model')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongodb);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
connectDB();


const usersave = async () =>{
  try {
    let newuser = new UserModel({
      name:"sonal kumari",
      email:"shubham1605dj@gmail.com",
      mobile:7464049679
    })
    const db = await newuser.save();
    console.log(`user data saved successfully ${db}`);
  } catch (error) {
    console.log(error.message);
  }
}
usersave();

const userFind = async () => {
  try {
      const db = await UserModel.find({ name: "sonal kumari" });
      console.log(`user data found successfully ${db}`);
  } catch (error) {
      console.log(error);
  }
};
userFind();


module.exports = connectDB;
app.get('/', (req, res) => {
  res.send('hello shubham.');
});

app.listen(1000, () => console.log('Example app is listening on port 1000.'));