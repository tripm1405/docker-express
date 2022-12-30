import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5500;

const app = express();

mongoose.connect('mongodb://username:password@172.31.0.2:27017/?authSource=admin')
  .then(() => console.log("mongo connected!"))
  .catch(err => console.log(err));

app.get('/', (req, res, next) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
