const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  console.log('setting up connection');
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('connected');
}
