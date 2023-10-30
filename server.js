import { createServer } from "node:http";

//
/* 
- New server assigned to the server constant.
- Callback function: '(request, response) => {}' execute every time a client 
  (like a web browser) makes a request to this server.
*/
export const server = createServer((request, response) => {
  /*
- If the request URL is /hello, the server responds with a 200 status code (OK)
  and sends the text "Hello World and Surfers too".
- If the request URL is /bye, the server responds with a 200 status code (OK) 
  and sends the text "Bye, bye World and Surfers too".
- For any other request URL, the server responds with a 400 status code (Bad Request)
  and sends the text "Not Found".
*/

  if (request.url === "/hello") {
    response.statusCode = 200;
    response.end("Hello World and Surfers too");
  } else if (request.url === "/bye") {
    response.statusCode = 200;
    response.end("Bye, bye World and Surfers too");
  } else {
    response.statusCode = 400;
    response.end("Not Found");
  }
});
