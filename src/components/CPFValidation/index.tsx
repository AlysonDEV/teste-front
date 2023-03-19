

interface CPFValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export function CPFValidation(cpf: string): CPFValidationResult {
  cpf = cpf.replace(/[^\d]+/g, ''); // remover caracteres não numéricos
  if (cpf.length !== 11 || cpf.match(/^(.)\1+$/)) { // verificar se CPF tem 11 dígitos e não é uma sequência repetida
    return { isValid: false, errorMessage: 'CPF inválido' };
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) { // calcular primeiro dígito verificador
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
    return { isValid: false, errorMessage: 'CPF inválido' };
  }
  soma = 0;
  for (let i = 0; i < 10; i++) { // calcular segundo dígito verificador
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10))) {
    return { isValid: false, errorMessage: 'CPF inválido' };
  }
  return { isValid: true }; // CPF válido

}