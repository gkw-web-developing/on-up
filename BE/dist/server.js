import express, {} from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Data has been fetched!");
});
export default app;
//# sourceMappingURL=server.js.map