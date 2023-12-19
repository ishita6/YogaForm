// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const port = 8000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/yogaClasses');
  console.log("DB connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// mongoose.connect('mongodb://localhost:27017/yogaClasses', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Define a simple schema for user data
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value >= 18 && value <= 65,
      message: 'Age must be between 18 and 65',
    },
  },
  selectedBatch: {
    type: String,
    required: true,
  },
});

// Create User model based on the schema
const User = mongoose.model('User', userSchema);

app.get('/' , (req , res) => {
  res.send("Welcome to Yoga Classes API");
})

app.post('/api/enroll', async (req, res) => {
  const userData = req.body;
  console.log(userData)

  try {
    // Save user data to the database
    const newUser = await User.create(userData);

    // Assume CompletePayment function is called here
    // CompletePayment(userData);

    // Return success response
    res.json({ message: 'Enrollment successful', user: newUser });
  } catch (error) {
    console.error('Error enrolling user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  // res.send(userData)
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
