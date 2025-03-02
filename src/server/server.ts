import express, { Request, Response } from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint to add a new ToDo
app.post("/add-todo", (req: Request, res: Response) => {
  const newTodo = req.body;

  // Read the existing toDoData.json
  fs.readFile("./data/toDoData.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
      return;
    }

    const toDoList = JSON.parse(data);
    toDoList.push(newTodo);

    // Write the updated data back to the file
    fs.writeFile("../data/toDoData.json", JSON.stringify(toDoList, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        res.status(500).send("Error writing to file");
        return;
      }
      res.status(200).send("ToDo added successfully");
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});