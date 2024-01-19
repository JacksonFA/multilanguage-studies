import Elysia from "elysia"
import cors from '@elysiajs/cors'

new Elysia()
  .use(cors())
  .get('/', () => ({
    message: 'Isso está sendo gerado automaticamente pela API do BunJS'
  }))
  .listen(3002)
console.log('Bun API listening on port 3002');
