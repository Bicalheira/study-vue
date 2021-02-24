new Vue({
  el: "#desafio",
  data: {
    alternado: false,
    array: ["Pedro", "Bia", "Ana", "Rebeca"],
    livro: {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkiens",
      volume: "3",
    },
    aluno: {
      id: 10,
      nome: "Maria",
      notas: [7.67, 8.33, 6.98, 9.21],
    },
    jogos: [
      { nome: "Skyrim", nota: "Topzera" },
      { nome: "Dota 2", nota: "Melhor que LoL" },
      { nome: "League of Legends", nota: "Pior que Dota" },
      { nome: "Assassino Cléber", nota: "Empolgante" },
    ],
  },
});
