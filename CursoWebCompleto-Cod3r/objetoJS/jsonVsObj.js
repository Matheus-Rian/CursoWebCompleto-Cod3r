//JSON -  troca de dados simples e rápida entre sistemas, de forma textual
const obj = { a:1, b: 2, c:3, soma(){ return a + b + c} }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a:1, b: 2, c:3}"))
//console.log(JSON.parse("{'a':1, 'b': 2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b": 2, "c" : 3}'))
console.log(JSON.parse('{"a":1.8, "b": "string", "c" : true, "d": {}, "e": []}'))