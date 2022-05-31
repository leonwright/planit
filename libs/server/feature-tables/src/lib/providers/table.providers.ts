import { Connection } from 'mongoose';
import { TableSchema } from './../schemas/table.schema';

export const tableProviders = [
  {
    provide: 'TABLE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Table', TableSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
