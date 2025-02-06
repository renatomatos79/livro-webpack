export function isCNPJ(cnpj: string): boolean {
    if (!cnpj) return false

    // Remove any non-numeric characters
    cnpj = cnpj.replace(/\D/g, '')

    // Check if the CNPJ has exactly 14 digits or is a known invalid sequence
    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
        return false
    }

    // Helper function to calculate verification digit
    function calculateDigit(cnpjArray: number[], multipliers: number[]) {
        let sum = 0
        for (let i = 0; i < multipliers.length; i++) {
            sum += cnpjArray[i] * multipliers[i]
        }
        const remainder = sum % 11
        return remainder < 2 ? 0 : 11 - remainder
    }

    // Convert CNPJ string to an array of numbers
    const cnpjArray = cnpj.split('').map(Number)

    // Multipliers for the first and second verification digits
    const firstMultipliers = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const secondMultipliers = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    // Validate the first verification digit
    const firstDigit = calculateDigit(cnpjArray.slice(0, 12), firstMultipliers)
    if (firstDigit !== cnpjArray[12]) {
        return false
    }

    // Validate the second verification digit
    const secondDigit = calculateDigit(
        cnpjArray.slice(0, 13),
        secondMultipliers
    )

    if (secondDigit !== cnpjArray[13]) {
        return false
    }

    // If all checks pass, the CNPJ is valid
    return true
}
