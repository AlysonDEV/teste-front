import { ModalPacientRegister } from "../../components/ModalPacientRegister";
import { ViewPacientRecent } from "../../components/ViewPacientRecent";


export function Pacient() {
  return (
    <>
      <h2>Cadastro de pacientes</h2>
      <ModalPacientRegister />
      <ViewPacientRecent />

    </>
  )
}