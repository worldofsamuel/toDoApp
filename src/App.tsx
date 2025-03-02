import "./App.css";
import AddToDo from "./components/AddToDo";
import CompletedList from "./components/CompletedList";
import Home from "./components/Home";
import Layout from "./components/Layout";
import "./stylesheet/Styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="App">TO-DO App</h1>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CompletedList" element={<CompletedList />}></Route>
          <Route path="/AddToDo" element={<AddToDo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
