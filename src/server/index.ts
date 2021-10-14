import fastify from "fastify";
import { getId } from "/src/common/utils";

const app = fastify();

app.get("/", async () => "hi");
app.get("/parcel", async () => "TODO Talking Stick: support websockets");

app.listen(8470, () => {
  console.log("listen success", getId());
});
