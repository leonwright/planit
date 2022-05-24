import * as mongoose from 'mongoose';

export const SettingsSchema = new mongoose.Schema({
  uuid: String,
  auth0ManagementApiToken: String,
});
