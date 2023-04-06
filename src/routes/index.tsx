import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pacient } from "../pages/Pacient";
import { PacientCare } from "../pages/PacientCare";
import { Header } from "../pages/template/Header";

export function NewRoutes() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacient" element={<Pacient />} />
        <Route path="/patientcare/:id" element={<PacientCare />} />
      </Routes>
    </>
  )
}