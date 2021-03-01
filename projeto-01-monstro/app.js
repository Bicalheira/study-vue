new Vue({
    el: "#app",
    data: {
        running: false,
        start: true,
        playerLife: 100,
        monsterLife: 100,
        logs: [],

        surrendered: false,
        playAgain: false,
        specialAttackCount: 3,
        healCount: 5,
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];

            this.surrendered = false;
            this.start = false;
            this.playAgain = false;
            this.specialAttackCount = 3;
            this.healCount = 5;
        },

        getRandom(min, max) {
            const value = Math.floor(Math.random() * (max - min + 1)) + min;
            return Math.round(value);
        },

        attack(special) {
            this.hurt("monsterLife", 5, 10, special, "Player", "Monster", "l-log__item--player");

            if (this.monsterLife > 0) {
                this.hurt("playerLife", 7, 15, false, "Monster", "Player", "l-log__item--monster");
            }
        },

        hurt(prop, min, max, special, source, target, cls) {
            let plus = 0;

            if (special == true && this.specialAttackCount > 0) {
                this.specialAttackCount--;
                plus = 5;
            }

            console.log(plus);
            // const plus = special ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0);
            this.registerLog(`The ${source} hit the ${target} with ${hurt} of damage`, cls);
        },

        healAndHurt() {
            if (this.healCount > 0) {
                this.healCount--;
                this.heal(10, 15);
                this.hurt("playerLife", 7, 12, false, "Monster", "Player", "l-log__item--monster");
            } else {
                alert("You can not use more heal!");
            }
        },

        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
            this.registerLog(`Player has healed ${heal}%`, "l-log__item--healed");
        },

        registerLog(text, cls) {
            this.logs.unshift({ text, cls });
        },

        surrenderGame() {
            this.surrendered = true;
            this.playAgain = true;
            this.running = false;
        },
    },
    computed: {
        hasResult() {
            if (this.surrendered == true) {
                return true;
            }
            return this.playerLife == 0 || this.monsterLife == 0;
        },
    },
    watch: {
        hasResult(value) {
            if (value == true) {
                this.running = false;
                this.playAgain = true;
            }
        },
    },
});
