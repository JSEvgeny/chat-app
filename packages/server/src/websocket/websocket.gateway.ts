import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventTypes } from 'src/enums';

@WebSocketGateway({ cors: true })
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage(EventTypes.MESSAGE_TO_SERVER)
  handleMessage(@MessageBody() data: string): void {
    this.server.emit(EventTypes.MESSAGE_TO_CLIENT, data);
  }

  handleConnection(client: Socket): void {
    console.log(client.id);
    this.server.emit(EventTypes.CLIENT_CONNECTED, client.id);
  }

  handleDisconnect(client: Socket) {
    console.log(client.id);
    this.server.emit(EventTypes.CLIENT_DISCONNECTED, client.id);
  }
}
