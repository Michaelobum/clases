let precio = 4
const articulo = {
    descripcion: 'Coca',
    precio,
    stock:1000
}
const art = {...articulo}
art.id=1
/* console.log('articulo',articulo)
console.log('art',art) */
const articulo2 = {
    ...articulo,
    precio:5,
    ['stock']:500
}
const arcticulo2 = {
    descripcion: 'Coca',
    precio:precio,
    stock:500,

    precio:500,
    ['stock']:100,
}

const masDatos = ({descripcion, ...props})