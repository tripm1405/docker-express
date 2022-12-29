import express from 'express';

const PORT = process.env.PORT || 5500;

const app = express();

app.get('/', (req, res, next) => {
  return res.json({ message: 'OK' });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
