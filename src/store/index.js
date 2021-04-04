import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    writing:'/Writing'
    ,
    Porto: [{
      image: 'https://iili.io/qXbuGn.png',
      name: 'KISPRAY',
      link: '/kisspray'
    },
    {
      image: 'https://iili.io/qXbA4s.png',
      name: 'UMKM',
      link: '/UMKM'
    },
    {
      image: 'https://iili.io/qXpCXI.png',
      name: 'NEXTAR',
      link: '/Nextar'
    },
    {
      image: 'https://iili.io/qXyF4e.png',
      name: 'MOMOGI',
      link: '/momogi'
    },
    {
      image: 'https://iili.io/qXy4cu.png',
      name: 'MAGNUM',
      link: '/Magnum'
    },
    {
      image: 'https://iili.io/qXybP1.png',
      name: 'KEMENSOS',
      link: '/Kemensos'
    }
  ],
  PortoPage2: [{
    image: 'https://placekitten.com/200/300',
    name: 'PROJECT A',
    link: '/'
  },
  {
    image: 'https://placekitten.com/200/300',
    name: 'PROJECT B',
    link: '/'
  },
  {
    image: 'https://placekitten.com/200/300',
    name: 'PROJECT C',
    price: 70
  },
  {
    image: 'https://placekitten.com/200/300',
    name: 'PROJECT D',
    link: '/'
  },
  {
    image: 'https://placekitten.com/200/300',
    name: 'PROJECT E',
    link: '/'
  },
  {
    image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-6.jpg',
    name: 'PROJECT F',
    link: '/'
  }
],
SearchPost:[
  {
    id:1,
    title:'Writings',
    link:'/writing',
    image:'../assets/bnw 6 1.png',
    category:'I barely talk though i have many things on my mind'
  },
  {
    id:2,
    title:'Design',
    link:'www.instagtam.com/the.2000j',
    image:'../assets/BNW 7 1.png',
    category:'Sometimes, i got many creative ideas in my mind and i don’t know how to use it'
  },
  {
    id:3,
    title:'Profile',
    link:'/profile',
    image:'../assets/BNW 2 1.png',
    category:'Are you looking for creative advertising designer?  Well, you found it.'
  },
  {
    id:4,
    title:'Blog',
    link:'',
    image:'../assets/bnw 6 1.png',
    category:'I barely talk though i have many things on my mind'
  },
  {
    id:5,
    title:'Portofolio',
    link:'/porto',
    image:'../assets/logo.png',
    category:'Some Portofolio Stuff'
  },
  {
    id:6,
    title:'Kisspray',
    link:'/kisspray',
    image:'https://iili.io/qXbuGn.png',
    category:'Kispray merupakan produk cairan semprot yang dapat memudahkan penggunanya saat menyetrika'
  },
  {
    id:7,
    title:'UMKM',
    link:'/UMKM',
    image:'https://iili.io/qXbA4s.png',
    category:'Bakso Yahuud'
  },
  {
    id:8,
    title:'Nextar',
    link:'/nextar',
    image:'https://iili.io/qXpCXI.png',
    category:'Nextar Desc'
  },
  {
    id:9,
    title:'Momogi',
    link:'/momogi',
    image:'https://iili.io/qXyF4e.png',
    category:'Momogi merupakan snack yang pasti membuat kita bernostalgia dengan masa kecil'
  },
  {
    id:10,
    title:'Magnum',
    link:'/magnum',
    image:'https://iili.io/qXy4cu.png',
    category:'Magnum Campaign'
  },
  {
    id:11,
    title:'Kemensos',
    link:'/kemensos',
    image:'https://iili.io/qXybP1.png',
    category:'Kemensos Campaign'
  },

]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
