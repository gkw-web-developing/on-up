import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import getBooks from "./data/books.js";

const globalCorsConfig = {
    origin: ["http://localhost:5173", "http://localhost:3001"],
    optionsSuccessStatus: 200,
}

// Initialization
const app = express();

// Middleware
app.use(cors(globalCorsConfig));
app.use(express.json());

// Routes
app.get("/api/books", async (req: Request, res: Response) => {
    try {
        const books = await getBooks();
        res.json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.get("/api/books/:slug", async (req: Request, res: Response) => {
    try {
        const books = await getBooks();
        const book = books.find((book: any) => book.slug === req.params.slug);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(book);
    } catch (error) {
        console.error("Error fetching book by slug:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default app;