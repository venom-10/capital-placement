import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import ApplicationForm from "./components/ApplicationForm.tsx";
import "./App.css";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#F5F5F5]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index path="form" element={<ApplicationForm />} />
            <Route path="/program-details" element={<h1>Program Details</h1>} />
            <Route path="/work-flow" element={<h1>WorkFlow</h1>} />
            <Route path="/preview" element={<h1>preview</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
