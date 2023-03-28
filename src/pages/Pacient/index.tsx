import { ToastContainer } from "react-toastify";
import { ModalPacientRegister } from "../../components/ModalPacientRegister";
import { ViewPacientRecent } from "../../components/ViewPacientRecent";


export function Pacient() {
  return (
    <>
      <ToastContainer />
      <h2>Cadastro de pacientes</h2>
      <ModalPacientRegister />
      <ViewPacientRecent />

    </>
  )
}