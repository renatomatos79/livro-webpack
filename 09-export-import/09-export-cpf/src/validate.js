import {mount} from "../dist/index.bundle.js";

const root = document.querySelector('#root')

mount(root, {
    id: 'txtInput',
    name: 'txtInput',
    label: 'Validate - CPF',
    value: '',
    onChange: (cpf) => {
        console.log('validação do CPF: ', cpf)
    }
})