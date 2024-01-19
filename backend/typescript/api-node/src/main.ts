import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Isso está sendo gerado automaticamente pela API do NodeJS",
  });
});
app.listen(3000, () => {
  console.log("NodeJS server is running on port 3000");
});
