import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { isCPF } from '@renato-matos/validation-libs'

// Componente CPF
const CpfInput = (props) => {
    const { id, name, value, label, error, onChange } = props
    const [cpf, setCpf] = useState(value ?? '');
    const [errorMsg, setErrorMsg] = useState(null);
    const handleChange = (e) => {
        setCpf(e.target.value);
        onChange(cpf);
    }

    const handleBlur = () => {
        if (!cpf) return
        const numbers = cpf.replace(/\D/g, "");
        const fmt = numbers.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-")
        setCpf(fmt);
        const isValid = isCPF(fmt)
        onChange({
            cpf: fmt,
            isValid,
        });
        setErrorMsg(isValid ? null : error ?? 'CPF inválido');
    }

    return (
        <>
            <fieldset>
                <legend>{label}</legend>
                <input id={id} name={name} value={cpf} maxLength={11} onChange={handleChange} onBlur={handleBlur} />
                <div style={{ color: 'red', fontSize: '1rem' }}>
                    {errorMsg}
                </div>
            </fieldset>
        </>
    )
}

// Função para montagem do componente
const mount = (element, { id, name, label, value, onChange }) => {
    ReactDOM.createRoot(element).render(<CpfInput id={id} name={name} label={label} value={value} onChange={onChange}   />)
}

// so exec. este codigo para o ambiente de desenvolvimento
if (process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#root')

    mount(root, {
        id: 'txtInput',
        name: 'txtInput',
        label: 'CPF',
        value: '',
        onChange: (cpf) => {
            console.log('CPF: ', cpf)
        }
    })
}

export { mount }