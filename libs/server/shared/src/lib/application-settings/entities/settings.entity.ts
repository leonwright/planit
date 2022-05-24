import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Settings extends Document {
  uuid: string;
  auth0ManagementApiToken: string;
}
