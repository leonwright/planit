import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  address: String,
});
