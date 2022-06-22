// Defino as variáveis

let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53
let total = sp + rj + mg + es + outros
let eSp, eRj, eMg, eEs, eOutros

// toFixed(2): Arredonde para 2 casas decimais
eSp = ((sp / total) * 100).toFixed(2);
eRj = ((rj / total) * 100).toFixed(2);
eMg = ((mg / total) * 100).toFixed(2);
eEs = ((es / total) * 100).toFixed(2);
eOutros = ((outros / total) * 100).toFixed(2);

console.log(`O faturamento total foi de R$ ${total}`);
console.log(`A participação de São Paulo no faturamento foi: ${eSp} % `);
console.log(`A participação do Rio de Janeiro foi: ${eRj} % `);
console.log(`A participação de Minas Gerais foi: ${eMg} % `);
console.log(`A participação de Espirito Santos foi: ${eEs} % `);
console.log(`A participação dos outros estados foi: ${eOutros} % `);