import Express from "express";
import Cors from "cors";

const app = Express();
app.use(
  Cors({
    origin: "*",
    credentials: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`server is active on port ${process.env.PORT}`);
});
