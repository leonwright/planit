import * as mongoose from 'mongoose';

export const TableSchema = new mongoose.Schema({
  name: String,
  restaurnantId: String,
});
