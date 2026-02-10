const productos = [
  {
    id: '01',
    name: 'Acelga x Un',
    description: 'Acelga',
    stock: 100,
    price: 1700,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/zXMHTbwL/Acelga.jpg'
  },
  {
    id: '02',
    name: 'Albahaca x Un.',
    description: 'Albahaca',
    stock: 50,
    price: 1700,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/yxxWZskh/Albahaca.jpg'
  },
  {
    id: '03',
    name: 'Apio x Kg.',
    description: 'Apio',
    stock: 50,
    price: 2500,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/YqVLQGN0/Apio.jpg'
  },
  {
    id: '04',
    name: 'Brocoli x Kg.',
    description: 'Brocoli',
    stock: 20,
    price: 4500,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/4NMHp7vY/Brocoli.jpg'
  },
  {
    id: '05',
    name: 'Espinaca x Un',
    description: 'Espinaca',
    stock: 100,
    price: 3500,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/SN5Yc2LY/Espinaca.jpg'
  },
  {
    id: '06',
    name: 'Lechuga Criolla x Kg.',
    description: 'Lechuga Criolla',
    stock: 40,
    price: 3900,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/rwr0jVgw/lechuga_criolla.jpg'
  },
  {
    id: '07',
    name: 'Lechuga Francesa x Kg',
    description: 'Lechuga Francesa',
    stock: 30,
    price: 3000,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/t4xZkqDT/Lechuga.jpg'
  },
  {
    id: '08',
    name: 'Perejil x Un',
    description: 'Perejil',
    stock: 100,
    price: 1100,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/cLnghxTJ/Perejil.jpg'
  },
  {
    id: '09',
    name: 'Puerro x Un.',
    description: 'Puerro',
    stock: 100,
    price: 2000,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/YCWGRr8j/Puerro.jpg'
  },
  {
    id: '10',
    name: 'Repollo Colorado x Kg.',
    description: 'Repollo Colorado',
    stock: 50,
    price: 2300,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/FHLdprGY/Repollo.jpg'
  },
  {
    id: '11',
    name: 'Rucula x Un.',
    description: 'Rucula',
    stock: 100,
    price: 850,
    category: 'Verduras de Hoja',
    img: 'https://i.postimg.cc/Gmy8KLzB/Rucula.jpg'
  },
  {
    id: '12',
    name: 'Batata x Kg.',
    description: 'Batata',
    stock: 70,
    price: 4200,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/q7G7DzKg/Batata.jpg'
  },
  {
    id: '13',
    name: 'Cebolla de Verdeo x Un.',
    description: 'Cebolla de Verdeo',
    stock: 100,
    price: 1500,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/W474YhZJ/Cebolla_Verdeo.jpg'
  },
  {
    id: '14',
    name: 'Cebolla Morada x Kg.',
    description: 'Cebolla Morada',
    stock: 40,
    price: 1500,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/R0T0pNtK/Cebolla_Roja.jpg'
  },
  {
    id: '15',
    name: 'Cebolla x Kg.',
    description: 'Cebolla',
    stock: 80,
    price: 900,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/fbvbqJdX/Cebolla.jpg'
  },
  {
    id: '16',
    name: 'Choclo Amarillo x Kg.',
    description: 'Choclo Amarillo',
    stock: 50,
    price: 1200,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/TPcPNpbq/Choclo_amarillo.jpg'
  },
  {
    id: '17',
    name: 'Jengibre x Kg.',
    description: 'Jengibre',
    stock: 20,
    price: 9000,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/xCT1wnGH/Jengibre.jpg'
  },
  {
    id: '18',
    name: 'Morron Rojo x Kg.',
    description: 'Morron Rojo',
    stock: 10,
    price: 7600,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/R0T0pNtd/Morron_Rojo.jpg'
  },
  {
    id: '19',
    name: 'Morron Verde x Kg.',
    description: 'Morron Verde',
    stock: 40,
    price: 2000,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/tTC4KpdV/Morron_Verde.jpg'
  },
  {
    id: '20',
    name: 'Papa Blanca x Kg.',
    description: 'Papa Blanca',
    stock: 100,
    price: 1700,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/bJNw7p09/Papa_Blanca.jpg'
  },
  {
    id: '21',
    name: 'Papa Negra x Kg.',
    description: 'Papa Negra',
    stock: 100,
    price: 1400,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/RFVZk41T/Papa_Negra.jpg'
  },
  {
    id: '22',
    name: 'Pepino x Kg.',
    description: 'Pepino',
    stock: 20,
    price: 1500,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/sXDgksPm/Pepino.jpg'
  },
  {
    id: '23',
    name: 'Remolacha x Kg.',
    description: 'Remolacha',
    stock: 20,
    price: 2000,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/9MFQ6CP1/Remolacha.jpg'
  },
  {
    id: '24',
    name: 'Tomate Cherry x Kg.',
    description: 'Tomate Cherry',
    stock: 20,
    price: 5000,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/NMfj3B8d/Tomate_Cherry.jpg'
  },
  {
    id: '25',
    name: 'Tomate Perita x Kg.',
    description: 'Tomate Perita',
    stock: 40,
    price: 2500,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/Pxr5gTbV/tomate_perita.jpg'
  },
  {
    id: '26',
    name: 'Tomate Redondo x Kg',
    description: 'Tomate Redondo',
    stock: 50,
    price: 1500,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/bJNw7p05/Tomate_Redondo.jpg'
  },
  {
    id: '27',
    name: 'Zanahoria x Kg',
    description: 'Zanahoria',
    stock: 80,
    price: 1300,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/NMfj3B8S/Zanahoria.jpg'
  },
  {
    id: '28',
    name: 'Zapallo Anco x Kg',
    description: 'Zapallo Anco',
    stock: 50,
    price: 1300,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/TwY3zfq8/Zapallo_Anco.jpg'
  },
  {
    id: '29',
    name: 'Zapallo Japones x Kg',
    description: 'Zapallo Japones',
    stock: 20,
    price: 1200,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/Jn4zfMcV/Zapallo_Japones.jpg'
  },
  {
    id: '30',
    name: 'Zapallito Redondo x Kg.',
    description: 'Zapallito Redondo',
    stock: 30,
    price: 1200,
    category: 'Hortalizas',
    img: 'https://i.postimg.cc/V6Lkxm93/zapallito_redondo.jpg'
  },
  {
    id: '31',
    name: 'Banana x Kg.',
    description: 'Banana',
    stock: 20,
    price: 2300,
    category: 'Frutas',
    img: 'https://i.postimg.cc/R0vSt4YW/Banana.jpg'
  },
  {
    id: '32',
    name: 'Ciruela x Kg.',
    description: 'Ciruela',
    stock: 15,
    price: 3000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/YStrFMPG/Ciruela.jpg'
  },
  {
    id: '33',
    name: 'Durazno Amarillo x Kg.',
    description: 'Durazno Amarillo',
    stock: 25,
    price: 4000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/zfqzh8Qv/Durazno_Amarillo.jpg'
  },
  {
    id: '34',
    name: 'Durazno Rojo x Kg.',
    description: 'Durazno Rojo',
    stock: 30,
    price: 5500,
    category: 'Frutas',
    img: 'https://i.postimg.cc/rpqV4MHK/Durazno_Rojo.jpg'
  },
  {
    id: '35',
    name: 'Frutillas x Kg.',
    description: 'Frutillas',
    stock: 40,
    price: 9000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/xd9fmnZz/Frutillas.jpg'
  },
  {
    id: '36',
    name: 'Kiwi x Kg.',
    description: 'Kiwi',
    stock: 20,
    price: 9000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/R0GMQ2rC/Kiwi.jpg'
  },
  {
    id: '37',
    name: 'Mango x Kg.',
    description: 'Mango',
    stock: 25,
    price: 6500,
    category: 'Frutas',
    img: 'https://i.postimg.cc/nLTHYN8c/Mango.jpg'
  },
  {
    id: '38',
    name: 'Manzana Roja x Kg.',
    description: 'Manzana Roja',
    stock: 30,
    price: 5500,
    category: 'Frutas',
    img: 'https://i.postimg.cc/nLTHYN8s/Manzana.jpg'
  },
  {
    id: '39',
    name: 'Manzana Verde x Kg.',
    description: 'Manzana Verde',
    stock: 30,
    price: 5500,
    category: 'Frutas',
    img: 'https://i.postimg.cc/6Qz9LFsQ/Manzana_Verde.jpg'
  },
  {
    id: '40',
    name: 'Palta x Kg.',
    description: 'Palta',
    stock: 10,
    price: 8000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/YCGnxWJv/Palta.jpg'
  },
  {
    id: '41',
    name: 'Pera x Kg.',
    description: 'Pera',
    stock: 50,
    price: 5000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/TPQRqB8K/Pera.jpg'
  },
  {
    id: '42',
    name: 'Piña x Kg.',
    description: 'Piña',
    stock: 50,
    price: 3500,
    category: 'Frutas',
    img: 'https://i.postimg.cc/q7QkXWfC/Piña.jpg'
  },
  {
    id: '43',
    name: 'Platano x Kg.',
    description: 'Platano',
    stock: 15,
    price: 5000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/LsvHBGdg/Platano.jpg'
  },
  {
    id: '44',
    name: 'Sandia x Kg.',
    description: 'Sandia',
    stock: 100,
    price: 800,
    category: 'Frutas',
    img: 'https://i.postimg.cc/R0GMQ2rw/Sandia.jpg'
  },
  {
    id: '45',
    name: 'Uva Red Globe x Kg.',
    description: 'Uva Red Globe',
    stock: 100,
    price: 5000,
    category: 'Frutas',
    img: 'https://i.postimg.cc/5tpxqDcw/Uva_Red_Globe.jpg'
  },
  {
    id: '46',
    name: 'Lima x Kg.',
    description: 'Lima',
    stock: 30,
    price: 4000,
    category: 'Citricos',
    img: 'https://i.postimg.cc/2yLrY61W/Lima.jpg'
  },
  {
    id: '47',
    name: 'Limon x Kg.',
    description: 'Limon',
    stock: 40,
    price: 4000,
    category: 'Citricos',
    img: 'https://i.postimg.cc/Kj3xbz1L/Limon.jpg'
  },
  {
    id: '48',
    name: 'Naranja x Kg.',
    description: 'Naranja',
    stock: 100,
    price: 1500,
    category: 'Citricos',
    img: 'https://i.postimg.cc/Y0LM79vQ/Naranja.jpg'
  }
]

let error = false

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente más tarde")
      } else {
        resolve(productos)
      }
    }, 1000)
  })
}

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find(prod => prod.id === id)

      if (producto) {
        resolve(producto)
      } else {
        reject("Producto no encontrado")
      }
    }, 1000)
  })
}