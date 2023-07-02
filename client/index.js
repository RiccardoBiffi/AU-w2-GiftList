const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const markleTree = new MerkleTree(niceList);
  const root = markleTree.getRoot();
  const name = "Riccardo Biffi";
  const proof = markleTree.getProof(niceList.findIndex(n => n === name));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    root: root,
    name: name,
    proof: proof,
  });

  console.log({ gift });
}

main();