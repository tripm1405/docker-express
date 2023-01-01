import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5500;

const app = express();

// mongoose.set('strictQuery', false);
mongoose.connect('mongodb://username:password@mongo:27017/?authSource=admin')
  .then(() => console.log("mongo connected!"))
  .catch(err => console.log(err));

const Schema = new mongoose.Schema({
  content: {
    type: String,
  }
});

const Model = mongoose.model('Schema', Schema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path);

  next();
});

app.route('/')
  .get(async (req, res, next) => {
    try {
      const models = await Model.find({});
  
      return res.json({ status: 200, data: models });
    }
    catch ( err ) {
      return next( err );
    }
  })
  .post(async (req, res, next) => {
    try {
      const content = req.body.content;
  
      if ( !content ) {
        throw new Error('Dữ liệu tệ');
      }

      const model = await (new Model({ content })).save();

      return res.json({ status: 200, data: model });
    }
    catch ( err ) {
      return next( err );
    }
  });

app.use((err, req, res, next) => {
  console.log(err);

  return res.json({ status: err.status || 500, message: err.message || 'Error' })
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
