import { setupApp } from "./helpers/app";

const server = setupApp()

const port = 4000

server.listen(port, () => {
  console.log(`Listening on ${port}`)
})