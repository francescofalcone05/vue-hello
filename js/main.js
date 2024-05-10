const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Benvenuto VueJS',
      colore: 'red'
    }
  },
  methods:{
    cambiaColore(){
      
      if (colore == "red") {
        colore = "blue"
      } else {
        colore = "red"
      }
    },
    stampaMessaggio(){
      console.log('messaggio');
    }

  },
}).mount('#app')