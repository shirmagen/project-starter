import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: String,
  location: {
    longitude: Number,
    latitude: Number,
  },
  amount: Number,
});

export default mongoose.model('Product', ProductSchema);
