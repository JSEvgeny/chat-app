import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { WebsocketModule } from './websocket/websocket.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client', 'dist'),
    }),
    WebsocketModule,
  ],
})
export class AppModule {}
