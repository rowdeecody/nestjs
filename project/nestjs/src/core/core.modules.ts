import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

export const CoreModules = [
  ConfigModule.forRoot({ isGlobal: true }),
  DatabaseModule,
];
