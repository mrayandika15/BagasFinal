import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextar:[
      "https://iili.io/q40ofp.md.png",
      "https://iili.io/q40CsR.md.png",
      "https://iili.io/q402J1.md.png",
      "https://iili.io/q40x0N.md.png",
      "https://iili.io/q40TJt.md.png",
      "https://iili.io/q40u5X.md.png"
    ],
    kisspray:[
      "https://iili.io/qOLlTl.md.png",
      "https://iili.io/qOZHf1.md.png",
      "https://iili.io/qOZF5J.md.png",
      "https://iili.io/qOZKOv.md.png",
      "https://iili.io/qOZCWN.md.png",
      "https://iili.io/qOZxft.md.png",
      "https://iili.io/qOZz0X.md.png",
      "https://iili.io/qOZuJs.md.png",
      "https://iili.io/qOZA5G.md.png",
      "https://iili.io/qOtoTx.md.png",
      "https://iili.io/qOtxhQ.md.png",
      "https://iili.io/qODKnp.md.png",
      "https://iili.io/qODrVp.md.png",
      "https://iili.io/qObfbj.md.png",
      "https://iili.io/qObKOb.md.png",
      "https://iili.io/qObF5u.md.png",
      "https://iili.io/qObD21.md.png"
    ],
    momogi:[
      "https://iili.io/qOpuDJ.md.png",
      "https://iili.io/qOpTNa.md.png",
      "https://iili.io/qOpOU7.md.png",
      "https://iili.io/qOpsUP.md.png",
      "https://iili.io/qOprWx.md.png",
      "https://iili.io/qOyF5X.md.png"
    ],
    UMKM:[
      "https://iili.io/qOyaXj.md.png",
      "https://iili.io/qOycLx.md.png",
      "https://iili.io/qOy0qQ.md.png",
      "https://iili.io/qOy11V.md.png",
      "https://iili.io/qOyMdP.md.png",
      "https://iili.io/qOyV71.md.png",
      "https://iili.io/qOyWkF.md.png",
      "https://iili.io/qOyXmg.md.png",
      "https://iili.io/qOyNLv.md.png",
      "https://iili.io/qOyeBR.md.png",
      "https://iili.io/qOyk1p.md.png",
      "https://iili.io/qOyPhG.md.png",
      "https://iili.io/qOyLB4.md.png",
      "https://iili.io/qOybY7.md.png"
    ],
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
    link:'/design',
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
