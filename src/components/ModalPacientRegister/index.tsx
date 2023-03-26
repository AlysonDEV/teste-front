
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { CPFValidation } from '../CPFValidation';
import './style.scss';



import { api } from '../../api';
import { Notification } from '../Notification';



export function ModalPacientRegister(): JSX.Element {

  const [patient, setPatient] = useState<Patient>(
    { nome: '', dt_nascimento: new Date(), cpf: '', telefone: '', foto: null }
  );
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [previewImagem, setPreviewImagem] = useState(null);

  const [cpfError, setCpfError] = useState('')

  function handleClose() { setIsVisibleModal(false) }
  function handleShow() { setIsVisibleModal(true) }

  interface AxiosConfig {
    headers: {
      "Content-Type": string;
    };
  }



  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
    e.preventDefault()

    const fData: FormData = new FormData();
    fData.append('nome', patient.nome);
    fData.append('dt_nascimento', patient.dt_nascimento.toISOString().substring(0, 10));
    fData.append('cpf', patient.cpf);
    fData.append('telefone', patient.telefone);
    fData.append('foto', patient.foto);

    const configAxios = {
      headers: {
        "Content-Type": `multipart/form-data`,
      }
    }


    const data = await api.post('paciente', fData, configAxios)
      .then(res => console.log(res))
      .catch(error => console.log(error))


  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    // Validar o CPF usando a regra RFB
    const newCpf = value.replace(/[^\d]+/g, '').length
    if (name === 'cpf' && newCpf == 11) {
      if (CPFValidation(value)?.isValid) {
        setCpfError('');
      } else {
        setCpfError('CPF inválido');
      }
    }

    if (name === 'dt_nascimento') {

      const inputDate = new Date(value);
      if (inputDate instanceof Date && !isNaN(inputDate.valueOf())) {
        const minDate = new Date('1900-01-01');
        const maxDate = new Date();
        if (inputDate >= minDate && inputDate <= maxDate) {
          setPatient((prevState) => ({
            ...prevState,
            birthdate: inputDate,
          }));
        }
      }

    } else {

      setPatient((prevState) => ({
        ...prevState,
        [name]: value,

      }));
    }
  };

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setPatient((prevState) => ({
        ...prevState,
        foto: e.target.files?.[0],
      }));

    } else {
      setPatient((prevState) => ({
        ...prevState,
        foto: null,
      }));
    }
  };

  return (
    <>
      <Notification />
      <Button onClick={handleShow} >Cadastrar Paciente</Button>
      <Modal show={isVisibleModal}>
        <Modal.Header >
          Cadastro de Paciente
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} name="CadPaciente">
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="nome"
                type="text"
                placeholder="Digite o nome do paciente"
                value={patient.nome}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicBirthdate">
              <Form.Label>Data de nascimento</Form.Label>
              <Form.Control
                name="dt_nascimento"
                type="date"
                placeholder="Digite a data de nascimento do paciente"
                value={patient.dt_nascimento.toISOString().substr(0, 10)}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicCPF">
              <Form.Label>CPF</Form.Label>
              <InputMask
                name='cpf'
                mask="999.999.999-99"
                value={patient.cpf}
                onChange={handleInputChange}
                placeholder="Digite o CPF do paciente"
                type='text'
                className="form-control"
                required
              />
              {cpfError && (
                <Form.Text className="text-danger">{cpfError}</Form.Text>
              )}

            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Telefone</Form.Label>
              <InputMask
                name="telefone"
                mask="(99) 99999-9999"
                value={patient.telefone}
                onChange={handleInputChange}
                placeholder="Digite o telefone do paciente"
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhoto">
              <Form.Label>Foto</Form.Label>
              {previewImagem && <img src={previewImagem} alt="Preview da imagem" />}
              <Form.Control
                name="photo"
                type='file'
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleFileInputChange}
                required
              />
            </Form.Group>

            <Modal.Footer className='mt-4 mr-0 pb-0'>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleFormSubmit} type="submit" >
                Salvar
              </Button>

            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}