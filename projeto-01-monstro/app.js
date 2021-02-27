new Vue({
  el: "#app",
  data: {
    warning: false,
    warningText: "",
    start: true,
    playAgain: false,
    attackButtons: false,
    specialAttackCount: 3,
    healCount: 5,
    log: false,
    playerLife: 100,
    monsterLife: 100,
    playerProgressColor: "#75dd7a",
    monsterProgressColor: "#75dd7a",
    playerWidth: "100%",
    monsterWidth: "100%",
    logList: [],
  },
  methods: {
    startGame() {
      this.start = false;
      this.attackButtons = true;
      this.log = true;
    },
    randomValues(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    attack(multiply) {
      let damageMonster = this.randomValues(10, 15);
      let damagePlayer = 0;

      if (multiply > 1) {
        if (this.specialAttackCount > 0) {
          this.specialAttackCount--;
          damagePlayer = this.randomValues(5 * multiply, 10 * multiply);
        } else {
          alert("You do not have more Special Attacks");
          damageMonster = 0;
        }
      } else {
        damagePlayer = this.randomValues(5, 10);
      }

      this.playerLife -= damageMonster;
      this.monsterLife -= damagePlayer;

      this.logList.push({
        player: "The player received " + damageMonster + " of damage",
        monster: "The monster received " + damagePlayer + " of damage",
      });
    },

    heal() {
      let damageMonster = this.randomValues(10, 15);
      let damageHeal = this.randomValues(15, 20);

      if (this.healCount > 0) {
        if (this.playerLife >= 100) {
          alert("Your life is full");
          damageMonster = 0;
          damageHeal = 0;
        } else {
          this.healCount--;

          if (this.playerLife + damageHeal - damageMonster > 100) {
            this.playerLife = 100;
          } else {
            this.playerLife += damageHeal;
            this.playerLife -= damageMonster;
          }
        }
        this.logList.push({
          player: "The player received " + damageMonster + " of damage",
          monster: "The player healed " + damageHeal + " of damage",
        });
      }
    },

    restartGame() {
      this.warning = false;
      this.warningText = "";
      this.start = false;
      this.playAgain = false;
      this.attackButtons = true;
      this.specialAttackCount = 3;
      this.healCount = 5;
      this.log = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logList = [];
    },

    surrenderGame() {
      this.warning = true;
      this.warningText = "You ran crying like a little baby!";
      this.playAgain = true;
      this.attackButtons = false;
      this.log = false;
    },

    verifyValue(value) {
      if (value <= 0) {
        this.attackButtons = false;
        this.log = false;
        this.warning = true;
        this.playAgain = true;
        this.winner();
        return 0;
      }
      return value;
    },

    winner() {
      if (this.playerLife <= 0 && this.monsterLife > 0) {
        this.warningText = "You lose!";
      } else if (this.playerLife <= 0 && this.monsterLife <= 0) {
        this.warningText = "Tied";
      } else {
        this.warningText = "You win!";
      }
    },

    progressDamage(value) {
      return value + "%";
    },

    progressColor(value) {
      if (value <= 50) {
        if (value <= 25) {
          return "red";
        }
        return "yellow";
      }
      return "#75dd7a";
    },
  },
  computed: {},
  watch: {
    playerLife(newValue, oldValue) {
      newValue = this.verifyValue(newValue);
      this.playerWidth = this.progressDamage(newValue);
      this.playerProgressColor = this.progressColor(newValue);
      this.playerLife = newValue;
    },
    monsterLife(newValue, oldValue) {
      newValue = this.verifyValue(newValue);
      this.monsterWidth = this.progressDamage(newValue);
      this.monsterProgressColor = this.progressColor(newValue);
      this.monsterLife = newValue;
    },
  },
});
