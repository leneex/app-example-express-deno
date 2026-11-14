import express from "npm:express@4";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello world");
});

const port = Number(Deno.env.get("PORT")) || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
