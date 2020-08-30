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
               var max = 10 ;
               var min =3 ;
               var damage = Math.max(Math.floor(Math.random()*max)+1 ,min);
               this.monsterHealth = Math.max(this.monsterHealth-damage,0);
               if(this.monsterHealth == 0){
                    alert("You Won !!");
                    this.gameIsRunning = false
                    return ;
               }
               var playerDamage = Math.max(Math.floor(Math.random()*12)+1 ,5);
               this.playerHealth = Math.max(this.playerHealth-playerDamage,0);
               if (this.playerHealth == 0){
                    alert( "You Lose !!");
                    this.gameIsRunning=false
                    return ;
               }
          },
          specialAttack: function() {
               
          },
          heal: function () {
               
          },
          giveUp: function () {
               
          }
     }
})