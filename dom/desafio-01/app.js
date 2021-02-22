new Vue({
  el: "#desafio",
  data: {
    name: "Lucas",
    years: "23",
    link: "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
  },
  methods: {
    multiply() {
      return this.years * 3;
    },
    random() {
      return Math.random();
    },
  },
});
