"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const after_1 = require("./after");
test('Deve validar um cpf', function () {
    const isValid = (0, after_1.validateCpf)('458.698.928-99');
    expect(isValid).toBeTruthy();
});
test('Deve tentar validar um cpf inválido', function () {
    const isValid = (0, after_1.validateCpf)('123.456.789-99');
    expect(isValid).toBeFalsy();
});
test('Deve tentar validar um cpf com todos os dígitos iguais', function () {
    const isValid = (0, after_1.validateCpf)('111.111.111-11');
    expect(isValid).toBeFalsy();
});
test('Deve tentar validar um cpf inválido muito grande', function () {
    const isValid = (0, after_1.validateCpf)('123.456.789-1000');
    expect(isValid).toBeFalsy();
});
test('Deve tentar validar um cpf inválido muito pequeno', function () {
    const isValid = (0, after_1.validateCpf)('123.456');
    expect(isValid).toBeFalsy();
});
