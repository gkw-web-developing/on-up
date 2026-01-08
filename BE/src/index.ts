import app from "./server.js";
import getBooks from "./data/books.js";

app.listen(3001, () => {
  console.log("Server running on PORT 3001!");
  getBooks();
});