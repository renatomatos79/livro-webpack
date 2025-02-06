import { isCNPJ } from '../../dist/index.bundle'

console.log('isCNPJ: ', isCNPJ('11.222.333/0001-81'))
console.log('isCNPJ: ', isCNPJ('11.222.333/0001-85'))
console.log('isCNPJ: ', isCNPJ(''))
console.log('isCNPJ: ', isCNPJ(null))
console.log('isCNPJ: ', isCNPJ(undefined))
