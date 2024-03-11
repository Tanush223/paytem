import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Dashbord from "./components/pages/Dashbord";
import SendMoney from "./components/pages/SendMoney";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/send" element={<SendMoney />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
