import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import { FaBook, FaChartBar } from 'react-icons/fa';
import MissingGradeForm from "./pages/MissingGradeForm";
import ContactPage from "./pages/ContactPage";
import GradeReportPage from "./pages/GradeReportPage";
import DashboardPage from "./pages/DashboardPage";
import Trials from "./pages/Trials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Dashboard" element={<DashboardPage />} />
        <Route path="landingpage" element={<LandingPage />} />
        <Route index element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="MissingGradeForm" element={< MissingGradeForm />}/>
        <Route path="ContactPage" element={< ContactPage/>}/>
        <Route path="GradeReportPage" element={<GradeReportPage/>}/>
        <Route path="DashboardPage" element={< DashboardPage/>}/>
        <Route path="Trials" element={< Trials/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
