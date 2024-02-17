import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";

import "./App.css";
import Navblock from "./components/navbar/Navblock";
import SignIn from "./components/signup/singnin";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <>
      <Navblock />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
