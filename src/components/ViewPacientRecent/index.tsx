import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iPacientCareData } from "../../vite-env";

import { RiArrowRightLine } from "react-icons/ri";


import { api } from "../../service/api";
import { showNotification } from "../Notification";

interface AtendimentosPendentesProps {
  data: iPacientCareData;
}


export function ViewPacientRecent() {
  const [atendimentosPendentes, setAtendimentosPendentes] = useState<iPacientCareData>();

  useEffect(() => {
    api('atendimentos')
      .then((response) => {
        setAtendimentosPendentes(response.data);
      })
      .catch((error: any) => {
        showNotification({
          message: `Não foi possível carregar a lista de pacientes: ${error}`,
          type: 'error'
        })
      });
  }, []);


  const getAge = (birthDateString: string) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const formatCPF = (cpf: string) => {
    return cpf.substring(0, 3) + '.' +
         cpf.substring(3, 6) + '.' +
         cpf.substring(6, 9) + '-' +
         cpf.substring(9);
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
          {atendimentosPendentes?.atendimentos.map((atendimento) => (
            <tr key={atendimento.id}>
              <td>{atendimento.nome}</td>
              <td>{atendimento.status}</td>
              <td>{formatCPF(atendimento.cpf)}</td>
              <td>{getAge(atendimento.dt_nascimento)}</td>
              <td>
                <Link to={`/patientcare/${atendimento.id}`}>
                    <RiArrowRightLine />
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


