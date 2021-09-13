// variables primitivas 
let nombre = "Michael"
let apellido = "Morán"
let edad = 21
let estado = true
// constante
// arreglos
const numeros = [2,45,60,85,10]
// objetos
const articulo ={
    descripcion:'Coca cola',
    precio:2,
    stock:1000
}
const notas = [
    {nombre:"josue",
    promedio:100,
       parciales:[
       {primer:[25,35]},
       {segundo:[15,25]}
    ] 
    },

    { nombre:"dani",
       promedio:60,
       parciales:[
       {primer:[35,25]},
       {segundo:[15,5]}
    ]
    },
       
    {nombre:"peter",promedio:100,
       parciales:[
       {primer:[25,25]},
       {segundo:[25,25]}]
    },   

]
articulo.precio=30
articulo.estado=true
// console.log(notas)
// console.log(notas[1])
// console.log(notas[1].nombre)
// console.log(notas[1].parciales)
// console.log(notas[1].parciales[1])
// console.log(notas[1].parciales[1].segundo)
// console.log(notas[1].parciales[1].segundo[1])
// console.log("articulo",articulo, articulo.descripcion,articulo.precio,articulo.estado)
// // if (condiciones)
// if (nombre)
//     console.log("nombre: ",nombre,"edad",edad)
// else
//     console.log("no ha ingresado nombre",nombre)

//     let resp = (nombre==undefined) ? "no se ha creado la variable" : nombre
//     console.log(resp)

// dia = 2
// switch (dia){
//     case 1:
//         console.log("lunes")
//         break

//      case 2:
//         console.log("martes")
//         break
        
//      default:
//         console.log("Dia no valido")
//         break

// }
// let x=20
// let y=0
// try {
//     if (y == 0)
//         throw ("division no permitida para cero")
//     let resp =x/y
//     console.log(resp)
// } catch (error){
//     console.log("error con y=0",error)        
// }
const numeross = [2,45,60,85,10,20,7]
// let pos=0
// while (pos < numeross.length && numeross[pos]!=85){
//     console.log(pos,"[",numeross[pos],"]")
//     pos += 1
// }
// console.log("termino el while")
// for(let ind=0;ind<numeross.length;ind+=2){
//    console.log(ind,"[",numeross[ind],"]")
// }
// for(let ind=numeross.length-1;ind>=0;ind-=1){
//     console.log(ind,"[",numeross[ind],"]")
// }

function suma(){
    let n1 = 5
    let n2 = 20
    console.log(n1,"+",n2,"=",n1+n2)
}
const sumaa = () => {
    let n1 = 5
    let n2 = 20
    console.log(`Suma: ${n1}+${n2}=${n1+n2}`  )
}
//sumaa()
function multiplicar(n1=1,n2=2){
    n1 = (n1) ? n1 : 0
    n2 = (n2) ? n2 : 0
    return n1*n2

}
const multiplicara= (n1=1,n2=2) => {
    n1 = (n1) ? n1 : 0
    n2 = (n2) ? n2 : 0
    return n1*n2

}

//console.log(multiplicar(4,5))
function resta (n1,n2){
    return n1 - n2
}
const restaa = (n1,n2) => n1 - n2

//console.log(resta(5,2))

function division (n1,n2){
    resp = n2 ? n1/n2 : 0
    return resp
}
const divisiona = (n1,n2) =>  n2 ? n1/n2 : 0  
//console.log(division(6,4))

const arreglos = [2,45,60,85,10,20,7]
for (let ind=0;ind<arreglos.length;ind++){
    console.log(`${ind}[${arreglos[ind]}]`)
}