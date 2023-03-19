import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pacient } from "../pages/Pacient";
import { Header } from "../pages/template/Header";


// const NewRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

export function NewRoutes() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacient" element={<Pacient />} />
      </Routes>
    </>
  )
}