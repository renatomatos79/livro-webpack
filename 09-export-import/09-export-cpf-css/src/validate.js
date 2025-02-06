import "@renato-matos/input-cpf-styled-css/dist/app.css"
import {mount} from "@renato-matos/input-cpf-styled-css";

const root = document.querySelector('#root')

mount(root, {
    id: 'txtInput',
    name: 'txtInput',
    label: 'Validate - CPF Styled',
    value: '',
    onChange: (cpf) => {
        console.log('validação do CPF: ', cpf)
    }
})