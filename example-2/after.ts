const FIRST_VERIFYING_DIGIT_FACTOR = 10;
const SECOND_VERIFYING_DIGIT_FACTOR = 11;

export function validateCpf(cpf: string): boolean {
  if (!cpf) return false;

  let formatedCpf = formatCpf(cpf);

  if (formatedCpf.length !== 11) return false;

  if (isAllDigitsTheSame(formatedCpf)) return false;

  let firstVerifyingDigit = 0;
  let secondVerifyingDigit = 0;

  let formatedCpfWithoutDigits = formatedCpf.slice(0, -2);

  firstVerifyingDigit = calculateDigit(
    formatedCpf,
    FIRST_VERIFYING_DIGIT_FACTOR
  );
  secondVerifyingDigit = calculateDigit(
    formatedCpf,
    SECOND_VERIFYING_DIGIT_FACTOR
  );

  let validCpf =
    formatedCpfWithoutDigits +
    firstVerifyingDigit.toString() +
    secondVerifyingDigit.toString();

  return formatedCpf === validCpf;
}

function formatCpf(cpf: string): string {
  return cpf
    .replace('.', '')
    .replace('.', '')
    .replace('-', '')
    .replace(' ', '');
}

function isAllDigitsTheSame(cpf: string): boolean {
  return cpf.split('').every((c: any) => c === cpf[0]);
}

function calculateDigit(cpf: string, factor: number): number {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += parseInt(digit) * factor--;
  }
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}
