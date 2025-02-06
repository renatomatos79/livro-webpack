import { isCPF, isCNPJ } from '@renato-matos/validation-libs'
const cpf = '172.777.960-64'
const cnpj = '01.473.431/0001-38'
console.log(cpf + ' = '+  isCPF(cpf))
console.log(cnpj + ' = '+  isCNPJ(cnpj))