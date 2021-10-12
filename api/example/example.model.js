import mongoose, { Schema } from 'mongoose';

const ExampleSchema = new Schema({
  date: Date,
});

export default mongoose.model('Example', ExampleSchema);
