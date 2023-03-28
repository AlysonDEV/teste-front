import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { RiArrowRightLine } from "react-icons/ri";
import { Patient } from "../../vite-env";

import { api } from "../../service/api";

import { Link } from "react-router-dom";
import { showNotification } from "../Notification";

export function ViewPacientRecent() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    api('pacientes')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        showNotification({
          message: `Não foi possível carregar a lista de pacientes: ${error}`,
          type: 'error'
        })
      });
  }, []);

  function calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    const age = formatDistanceStrict(dateOfBirth, today, { unit: 'year' });
    return Number(age);
  }



  return (
    <>
      <h3>Pacientes</h3>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Condição</th>
            <th>CPF</th>
            <th>Idade</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.nome}</td>
              <td></td>
              <td>{patient.cpf}</td>
              <td>{patient.dt_nascimento}</td>
              <td>
                <Link to={`/atendimento/${patient.id}`}>
                  <Button>
                    <RiArrowRightLine />
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </Table>

    </>
  )

}

function formatDistanceStrict(dateOfBirth: Date, today: Date, arg2: { unit: string; }) {
  throw new Error("Function not implemented.");
}
