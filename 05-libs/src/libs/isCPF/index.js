export function isCPF(cpf) {
    if (!cpf) return false

    // Remove any non-numeric characters
    cpf = cpf.replace(/\D/g, '')

    // Check if the CPF has exactly 11 digits or is a known invalid sequence
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false
    }

    // Helper function to calculate verification digit
    function calculateDigit(cpfArray, factor) {
        let sum = 0
        for (let i = 0; i < cpfArray.length; i++) {
            sum += cpfArray[i] * factor--
        }
        const remainder = sum % 11
        return remainder < 2 ? 0 : 11 - remainder
    }

    // Convert CPF string to an array of numbers
    const cpfArray = cpf.split('').map(Number)

    // Validate the first verification digit
    const firstDigit = calculateDigit(cpfArray.slice(0, 9), 10)
    if (firstDigit !== cpfArray[9]) {
        return false
    }

    // Validate the second verification digit
    const secondDigit = calculateDigit(cpfArray.slice(0, 10), 11)
    if (secondDigit !== cpfArray[10]) {
        return false
    }

    // If all checks pass, the CPF is valid
    return true
}
