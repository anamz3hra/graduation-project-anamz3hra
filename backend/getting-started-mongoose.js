const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  console.log('setting up connection');
  await mongoose.connect('mongodb+srv://admin:<password>@testing.mw4kd2c.mongodb.net/?retryWrites=true&w=majority');
  console.log('connected');

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name ? `Meow name is ${this.name}` : "I don't have a name";
    console.log(greeting);
  };
  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'

  const fluffy = new Kitten({ name: 'fluffy' });

  await fluffy.save();
  fluffy.speak();

  const serifos = new Kitten({ name: 'serifos' });
  await serifos.save();
  const kittens = await Kitten.find();
  console.log(kittens);
  const serif = new Kitten({ name: 'serif' });
  await serif.save();

  const cats = await Kitten.find({ name: /^ser/ });
  console.log(cats);
}
