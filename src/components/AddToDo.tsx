import { useEffect, useState } from "react";
import "../stylesheet/Styles.css";
import AddToDoItem from "./AddToDoItem";

type todoProps = {
  id: number;
  name: string;
  status: boolean;
};

const AddToDo = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState(0);

  const addButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toDo = { id, name, status };

    fetch("http://localhost:8000/add-todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toDo),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        setName("");
        setStatus("false");
        setId((prevId) => prevId + 1); // Increment ID
      })
      .catch((err) => console.error("Error:", err));

    setName("");
    setStatus("");
    setId(0);
  };

  return (
    <div>
      <h2>Enter the ToDo Item:</h2>
      <form onSubmit={addButton}>
        <input
          type="text"
          name="AddToDoInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ToDo Name"
          required
        />
        <br />
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="true">Complete</option>
          <option value="false">Incomplete</option>
        </select>
        <br />
        <button type="submit" className="button_todo">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
