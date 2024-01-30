const mongoose = require("mongoose");
require("dotenv").config();

const dbPassword = process.env.dbPassword;

module.exports = async () => {
  const mongoUri = `mongodb+srv://hemantshar955:${dbPassword}@cluster0.gevlkej.mongodb.net/?retryWrites=true&w=majority`;
  // mongodb+srv://hemantshar955:<password>@cluster0.gevlkej.mongodb.net/
  try {
      const connect = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected:${connect.connection.host}`);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
    
  }
};
