import { server } from "./src/server";

server.listen(4090).then(({url}) => {
			 console.log(`🚀  Server ready at ${url}`)
});
