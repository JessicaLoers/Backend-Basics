import { server } from "./server.js";

// Defines a port number 800 for the server to listen on.
const port = 800;

/* 
- Starts the server and listens on the defined port (800). 
- When the server starts successfully, a message is displayed in the console, indicating the URL at which the server is running
 */
server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}/`);
});
