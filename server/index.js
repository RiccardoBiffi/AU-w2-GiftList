const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT = 'bfe09ab106064a0a6b0f5e3741d03610c757156bc6fb6ee726beb8e93851e5fa';

app.post('/gift', (req, res) => {
  const { root, name, proof } = req.body;

  const isInTheList = verifyProof(proof, name, root);
  if (isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
