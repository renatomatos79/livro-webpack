import { describe, it, expect } from 'vitest'
import { isCPF } from './index.js'

describe('isCPF', () => {
    describe('When CPF is not defined', () => {
        it.each([null, undefined, ''])('CPF deverá ser inválido: %s', (cpf) => {
            expect(isCPF(cpf)).toBeFalsy()
        })
    })

    it('CPF deverá ser inválido', () => {
        expect(isCPF('467.619.310-14')).toBeFalsy()
    })

    it('CPF deverá conter 11 caracteres', () => {
        expect(isCPF('467.619.310-1')).toBeFalsy()
    })

    it('CPF deverá ser inválido', () => {
        expect(isCPF('014.600.940-18')).toBeTruthy()
    })
})
