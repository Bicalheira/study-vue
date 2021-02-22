new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    showAlert() {
      alert("The Alert!");
    },

    save(event) {
      this.valor = event.target.value;
    },
  },
});
