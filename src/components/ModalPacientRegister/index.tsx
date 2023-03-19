
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { CPFValidation } from '../CPFValidation';
import './style.scss';

import { Patient } from '../../vite-env';


export function ModalPacientRegister() {

  const [patient, setPatient] = useState<Patient>(
    { name: '', birthdate: new Date(), cpf: '', phone: '', photo: null }
  );
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [cpfError, setCpfError] = useState('')

  function handleClose() { setIsVisibleModal(false) }
  function handleShow() { setIsVisibleModal(true) }

  function handleFormSubmit() {
    console.log(patient);
    handleClose()
  };


  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    // Validar o CPF usando a regra RFB
    const newCpf = value.replace(/[^\d]+/g, '').length
    if (name === 'cpf' && newCpf == 11) {
      if (CPFValidation(value)?.isValid) {
        setCpfError('');
      } else {
        console.log('entrou')
        setCpfError('CPF inválido');
      }
    }

    setPatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setPatient((prevState) => ({
        ...prevState,
        photo: e.target.files[0],
      }));
    }
  };




  return (
    <>
      <Button onClick={handleShow} >Cadastrar Paciente</Button>
      <Modal show={isVisibleModal}>
        <Modal.Header closeButton>
          Cadastro de Paciente
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome do paciente" name="name" value={patient.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicBirthdate">
              <Form.Label>Data de nascimento</Form.Label>
              <Form.Control type="date" placeholder="Digite a data de nascimento do paciente" name="birthdate" value={patient.birthdate.toISOString().substr(0, 10)} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicCPF">
              <Form.Label>CPF</Form.Label>
              <InputMask mask="999.999.999-99" value={patient.cpf} onChange={handleInputChange}>
                {(inputProps: any) => <Form.Control type="text" placeholder="Digite o CPF do paciente" name="cpf" {...inputProps} />}
              </InputMask>
              {cpfError && (
                <Form.Text className="text-danger">{cpfError}</Form.Text>
              )}

            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Telefone</Form.Label>
              <InputMask mask="(99) 99999-9999" value={patient.phone} onChange={handleInputChange}>
                {(inputProps: any) => <Form.Control type="text" placeholder="Digite o telefone do paciente" name="phone" {...inputProps} />}
              </InputMask>
            </Form.Group>

            <Form.Group controlId="formBasicPhoto">
              <Form.Label>Foto</Form.Label>
              <Form.Control type='file' accept=".jpg,.jpeg,.png" name="photo" onChange={handleFileInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}