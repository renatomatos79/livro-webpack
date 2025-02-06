import { isCNPJ } from './libs/index.js'

console.log('isCNPJ: ', isCNPJ('11.222.333/0001-81'))
console.log('isCNPJ: ', isCNPJ('11.222.333/0001-85'))
console.log('isCNPJ: ', isCNPJ(''))
console.log('isCNPJ: ', isCNPJ(null))
console.log('isCNPJ: ', isCNPJ(undefined))
