new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  watch: {
    resultado(novo, velho) {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
  computed: {
    resultado() {
      // if (this.valor != 37) {
      //   return "Valor diferente";
      // } else {
      //   return "Valor igual";
      // }
      return this.valor != 37 ? "Valor diferente" : "Valor igual";
    },
  },
});
