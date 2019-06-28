import socketIO, { Socket } from 'socket.io';
/**
 * This method detects a client disconnection event.
 * @param client 
 */
export const detectClientDisconnection = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Socket.detectClientDisconnection> Client disconnected.');
    });
}

export const listenForMessages = ( client: Socket,  io: socketIO.Server) => {

    client.on('messages', (payload: any) => {

        console.log(`Socket.listenForMessages> Message received on 'messages'`);
        console.log('Socket.listenForMessages> Payload: ' + JSON.stringify(payload));

        // Take the message received a broadcast it to clients.
        client.broadcast.emit('messages', payload);

    })

}