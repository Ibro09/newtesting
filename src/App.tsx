import React, { } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Friend from "./Routes/Friends";
import Tasks from "./Routes/Tasks";
import Spin from "./Routes/Spin";
import Wallet from "./Routes/Wallet";
import ModalPage from "./components/Modal";
import Level from "./Routes/Level";
import Premium from "./Routes/Premium";
import Welcome from "./Routes/Welcome";




const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/welcome'
          element={<Welcome />}
        />
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/friend'
          element={<Friend />}
        />
        <Route
          path='/tasks'
          element={<Tasks />}
        />
        <Route
          path='/spin'
          element={<Spin />}
        />
        <Route
          path='/wallet'
          element={<Wallet />}
        />
        <Route
          path='/modal'
          element={<ModalPage />}
        />
        <Route
          path='/level'
          element={<Level />}
        />
        <Route
          path='/premium'
          element={<Premium />}
        />
      </Routes>
    </Router>
  );
};

export default App;
