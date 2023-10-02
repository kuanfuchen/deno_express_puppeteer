// import { Application,/* Router */} from "https://deno.land/x/oak/mod.ts";
import express from "npm:express@4.18.2";
import indexRouter from "./router/index.js";
// import { oakCors } from "https://deno.land/x/cors/mod.ts";
const app = express();
// app.use(oakCors());
app.use('/', indexRouter);
// app.get("/", (req, res) => {
//   res.send("Welcome to the Dinosaur API!");
// });
app.listen(8080);