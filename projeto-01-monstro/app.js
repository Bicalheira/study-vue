new Vue({
  el: "#app",
  data: {
    warning: true,
    start: true,
    playAgain: true,
    attackButtons: true,
    specialAttackCount: 3,
    healCount: 5,
    log: true,
    playerLife: "85%",
    monsterLife: "75%",
    damage: [{ player: 0, monster: 0 }],
  },
  methods: {
    startGame() {
      this.attackButtons = true;
      this.start = false;
    },
    attackDamage(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    progressDamage() {},
  },
  computed: {},
});
