import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import getBooks from "./data/books.js";

type communication = {
  req: Request;
  res: Response;
  next: NextFunction;
}

const globalCorsConfig = {
  origin: ["http://localhost:5173", "http://localhost:3001"],
  optionsSuccessStatus: 200,
}

const app = express();

app.use(cors(globalCorsConfig));

app.use(express.json());

app.get("/api/books", async (req, res) => {
    try {
        const books = await getBooks();
        res.json(books);
    } catch {
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.get("/api/books/:slug", async (req, res) => {
    try {
        const books = await getBooks();
        const book = books.find((book: any) => book.slug === req.params.slug);
        res.json(book);
    } catch {
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default app;