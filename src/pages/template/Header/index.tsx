import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export function Header() {
  return (
    <header>
      <ToastContainer />
      <h1>Multintegrada</h1>
      <Link to="/">Home</Link>
      <Link to="/pacient">Paciente</Link>
    </header>

  )
}