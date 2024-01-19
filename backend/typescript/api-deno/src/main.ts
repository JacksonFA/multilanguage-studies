import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const router = new Router();
router.get("/", async (ctx) => {
  ctx.response.body = {
    message: "Isso está sendo gerado automaticamente pela API do DenoJS",
  };
});
const app = new Application();
app.use(oakCors());
app.use(router.routes());
await app.listen({ port: 3001 });
console.log("Deno server running on port 3001");
