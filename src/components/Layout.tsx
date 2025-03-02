import { Link } from "react-router";

export default function Layout() {
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
        <br />
        <Link to="/CompletedList">Completed List</Link>
        <br />
        <Link to="/AddToDo">Add ToDo</Link>
      </ul>
    </>
  );
}
