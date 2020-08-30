new Vue({
     el: '#app',
     data: {
          playerHealth : 0,
          monsterHealth: 0,
          gameIsRunning: false
     },
     methods: {
          startGame: function() {
               this.gameIsRunning=true;
               this.playerHealth=100;
               this.monsterHealth=100;
          },
          attack : function(){
               this.monsterHealth = Math.max(this.monsterHealth-this.calculDamage(3,10),0);
               this.playerHealth = Math.max(this.playerHealth-this.calculDamage(5,12),0);
               this.checkResult()
          },
          specialAttack: function() {
               this.monsterHealth = Math.max(this.monsterHealth-this.calculDamage(10,20),0);
               this.playerHealth = Math.max(this.playerHealth-this.calculDamage(10,20),0);
               this.checkResult()
          },
          heal: function () {
               if(this.playerHealth <=90){
                    this.playerHealth += 10
                    this.playerHealth = Math.max(this.playerHealth-this.calculDamage(5,12),0);
                    this.checkResult()
               }
               else{
                    this.playerHealth = 100;
               }
          },
          giveUp: function () {
               this.gameIsRunning = false 
          },
          calculDamage : function(min,max) {
               return Math.max(Math.floor(Math.random()*max)+1 ,min);
          },
          checkResult : function(){
               if(this.monsterHealth == 0) {
                    if(confirm("You Won !! New Game ?")){
                         this.startGame();
                    }
                    else{
                         this.gameIsRunning =false
                    }
                    return;
               }
               else if (this.playerHealth == 0) {
                    if(confirm("You lost!! New Game?")){
                         this.startGame()
                    }
                    else{
                         this.gameIsRunning = false
                    }
               }
          }
     }
})