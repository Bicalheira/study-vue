new Vue({
  el: "#desafio",
  data: {
    classe1: "destaque",
    classe3: "",
    classe4: "",
    estilo5: {
      width: "100px",
      height: "100px",
    },
    cor5: "",
    largura: "0",
    perigo: true,
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque";
      }, 1000);
      // setInterval(() => {
      //   if (this.classe1 == "destaque") {
      //     this.classe1 = "encolher";
      //   } else {
      //     this.classe1 = "destaque";
      //   }
      // }, 1000);
    },

    iniciarProgresso() {
      let valor = 0;

      const temporizador = setInterval(() => {
        valor += 1;
        this.largura = valor + "%";

        if (valor == 100) {
          clearInterval(temporizador);
        }
      }, 100);
    },

    setClass(event) {
      if (event.target.value == "true") {
        this.perigo = true;
      } else if (event.target.value == "false") {
        this.perigo = false;
      }
    },
  },
  computed: {},
});
