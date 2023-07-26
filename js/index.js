function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    return a / b
}

function potencia(a, b){
    return a ** b
}

function add_visor(digit){
    let input_visor = document.getElementsByClassName("input_visor")
    input_visor[0].value += digit
}

function del_visor(){
    let input_visor = document.getElementsByClassName("input_visor")
    input_visor[0].value = input_visor[0].value.slice(0, -1)
}

function limpar_visor(){
    let input_visor = document.getElementsByClassName("input_visor")
    input_visor[0].value = ""
}

function realizar_calculo(){
    let input_visor = document.getElementsByClassName("input_visor")
    conta_bruta = input_visor[0].value 
    conta_array = []
    while(i < conta_bruta.length){
        console.log(i)
        
        switch(conta[i]){
            case "+":
                conta_array.append("+")
                break;
            case "-":
                conta_array.append("-")
                break;
            case "x":
                conta_array.append("x")
                break;
            case "÷":
                conta_array.append("÷")
                break;
            case "^":
                conta_array.append("^")
                break;
        }
        i++;
    }
    resultado = 0
    while(i < conta.length){
        console.log(conta[i])
        
        switch(conta[i]){
            case "+":
                somar(resultado, numero)
                break;
        }
        i++;
    }
    
}

let btn = document.querySelectorAll("button")
let input_visor = document.getElementsByClassName("input_visor")
input_visor[0].value = ""
console.log(btn)

let map = Array.prototype.map;

map.call(btn, (digit) => {
    digit.onclick = () => {
        console.log(digit.name)
        console.log(input_visor)
        switch(digit.name){
            case "del":
                del_visor()
                break;
            case "limpar":
                limpar_visor()
                break;
            case "=":
                realizar_calculo()
                break;
            case "+":
                add_virgula()
                break;
            case "-":
                add_virgula()
                break;
            case "x":
                add_virgula()
                break;
            case "÷":
                add_virgula()
                break;
            case "^":
                add_virgula()
                break;
            default:
                add_visor(digit.name)
        }
        
    }
}) 

// Algo parece errado, leia dps
// https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/
// https://mathjs.org/
