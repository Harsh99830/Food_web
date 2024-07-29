const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/FoodWeb';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection error:', err);
});

db.once('open', async () => {
  console.log("DB connected");

  try {
    const data = db.db.collection("Food_items");
    const result = await data.find({}).toArray();
    const foodCategory = db.db.collection("Food_category");
    const result2 = await foodCategory.find({}).toArray();
    if (result,result2) {
      global.food_items = result;
      global.food_category = result2;
      console.log('Food items loaded:'); // Optional: for debugging
    } else {
      console.log('No food items found');
    }
  } catch (err) {
    console.error('Error fetching food items:', err);
  }
});

module.exports = db;