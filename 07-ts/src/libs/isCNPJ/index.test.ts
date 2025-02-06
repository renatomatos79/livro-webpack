import { describe, it, expect } from 'vitest'
import { isCNPJ } from './index'

describe('isCNPJ', () => {
    it.each([null, undefined, '', ' '])(
        "CNPJ precisa ser informado: '%s'",
        (cnpj) => {
            expect(isCNPJ(cnpj)).toBe(false)
        }
    )
    it('CNPJ precisa ser válido', () => {
        expect(isCNPJ('11.222.333/0001-81')).toBe(true)
    })
    it.each(['11.222.333/0001', '11.222.333'])(
        'CNPJ precisa ter 14 chars: %s',
        (cnpj) => {
            expect(isCNPJ(cnpj)).toBe(false)
        }
    )
    it.each(['11.222.333/0001-91', '11.222.333/0001-82'])(
        'CNPJ precisa ter o calc do digito correto: %s',
        (cnpj) => {
            expect(isCNPJ(cnpj)).toBe(false)
        }
    )
})
