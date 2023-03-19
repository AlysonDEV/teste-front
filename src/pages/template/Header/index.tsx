import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>Multintegrada</h1>
      <Link to="/">Home</Link>
      <Link to="/pacient">Paciente</Link>
    </header>

  )
}