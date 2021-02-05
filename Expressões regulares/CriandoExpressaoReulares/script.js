// criando a REGEX
    const reg = new RegExp('bola');
console.log(reg.test('tem bola'));
console.log(reg.test('nao tem'));

console.log('-----------------------------------------------')

    const regexx = /monst/;
console.log(regexx.test('tem monst'));
console.log(regexx.test('nao tem'));

console.log('-----------------------------------------------')

    const regex = /algo/;
        let vet = ['coisa','teste','algo','mate']
        if(vet == regex);

    console.log(regex.test('tem no vetor algo'))
    console.log(regex.test('tem no vetor cafe'))

console.log('-----------------------------------------------')

    const regex1 = /bola/;

    let text = 'tem bola na cesta';
console.log(regex1.test('tem bola na cesta'))
console.log(regex1.test('nao tem'))
console.log(regex1.test(text))

console.log('-----------------------------------------------')

console.log(/quadrado/.test('onde esta o quadrado'));
console.log(/quadrado/.test('123456789quadrado123456789'));
console.log(/quadrado/.test('123456789123456789'));


