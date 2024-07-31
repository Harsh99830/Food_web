const mongoose = require('mongoose');

const url = "mongodb+srv://harshagrawal7878:harsh123@cluster0.azvcecl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "FoodWeb"
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection error:', err);
});

db.once('open', async () => {
  console.log("DB connected");

  try {
    const data = db.db.collection("Food_items");
    // console.log("Collection Food_items accessed:");

    const result = await data.find({}).toArray();
    // console.log("Food_items fetched:");

    const foodCategory = db.collection("Food_category");
    // console.log("Collection Food_category accessed:");

    const result2 = await foodCategory.find({}).toArray();
    // console.log("Food_category fetched:");

    if (result && result2) {
      global.food_items = result;
      global.food_category = result2;
      console.log('Food items and categories loaded successfully');
    } else {
      console.log('No food items or categories found');
    }
  } catch (err) {
    console.error('Error fetching food items or categories:', err);
  }
});

module.exports = db;
