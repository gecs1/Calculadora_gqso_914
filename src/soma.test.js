const Soma = require('./soma');

test('a soma é autêntica quando 300 + 300', () => {
    expect(Soma(300, 300)).toBe(600);
})