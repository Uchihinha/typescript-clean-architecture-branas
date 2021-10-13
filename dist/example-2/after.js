"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCpf = void 0;
const FIRST_VERIFIER_DIGIT_FACTOR = 10;
const SECOND_VERIFIER_DIGIT_FACTOR = 11;
function validateCpf(cpf) {
    if (!cpf)
        return false;
    if (cpf.length < 11 || cpf.length > 14)
        return false;
    let formatedCpf = formatCpf(cpf);
    if (isAllSameDigits(formatedCpf))
        return false;
    let verifyingDigit1 = 0;
    let verifyingDigit2 = 0;
    let formatedCpfWithoutDigits = formatedCpf.slice(0, -2);
    // formatedCpfWithoutDigits
    //   .split('')
    //   .forEach((digit: string, position: number) => {
    //     verifyingDigit1 += (FIRST_VERIFIER_DIGIT_FACTOR - position) * +digit;
    //     verifyingDigit2 += (SECOND_VERIFIER_DIGIT_FACTOR - position) * +digit;
    //   });
    verifyingDigit1 = calculateDigit(formatedCpf, FIRST_VERIFIER_DIGIT_FACTOR);
    // verifyingDigit2 += verifyingDigit1 * 2;
    verifyingDigit2 = calculateDigit(formatedCpf, SECOND_VERIFIER_DIGIT_FACTOR);
    let validCpf = formatedCpfWithoutDigits +
        verifyingDigit1.toString() +
        verifyingDigit2.toString();
    return formatedCpf === validCpf;
}
exports.validateCpf = validateCpf;
function formatCpf(cpf) {
    return cpf
        .replace('.', '')
        .replace('.', '')
        .replace('-', '')
        .replace(' ', '');
}
function isAllSameDigits(cpf) {
    return cpf.split('').every((c) => c === cpf[0]);
}
// function calculateDigit(resultOfSum: number): number {
//   let rest = resultOfSum % 11;
//   return rest < 2 ? 0 : 11 - rest;
// }
// function calculateDigit(cpf: string, factor: number): number {
//   let totalSum = 0;
//   cpf
//     .split('')
//     .forEach(
//       (digit: string, position: number) =>
//         (totalSum += (factor - (position + 1)) * +digit)
//     );
//   let rest = totalSum % 11;
//   return rest < 2 ? 0 : 11 - rest;
// }
function calculateDigit(cpf, factor) {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1)
            total += parseInt(digit) * factor--;
    }
    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
}
