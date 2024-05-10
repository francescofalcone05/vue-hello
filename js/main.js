const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Benvenuto VueJS',
      colore: 'red',
      immagine: ''
    }
  },
  methods: {
    cambiaColore() {
      if (this.colore == "red") {
        this.colore = "blue"
      } else {
        this.colore = "red"
      }
    },
    printImg() {
      if (this.immagine == '') {
        this.immagine = './img/01.webp'
      } else {
        this.immagine = ''
      }

    }

  },
}).mount('#app')