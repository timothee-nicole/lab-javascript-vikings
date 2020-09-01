// Soldier
class Soldier {
    constructor(health, strength) {
       this.health = health;
       this.strength = strength;
    }

    attack() {
        return this.strength
    }
    receiveDamage(damages) {
        this.health -= damages
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damages){
        super.receiveDamage(damages);
        if (this.health ===  0){
        return`${this.name} has died in act of combat`
        } else {
        return `${this.name} has received ${damages} points of damage`
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damages){
        super.receiveDamage(damages);
        if (this.health ===  0){
        return`A Saxon has died in combat`
        } else {
        return `A Saxon has received ${damages} points of damage`
        }
    }
}

// War

    class War {
        vikingArmy = [];
        saxonArmy = [];

        addViking(viking){
            this.vikingArmy.push(viking);
        }

        addSaxon(saxon){
            this.saxonArmy.push(saxon);
        }
        getRandomFighter(){
            return {
                viking: this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)],
                saxon: this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
            }
        }
        vikingAttack(){
            const fighter = this.getRandomFighter();
            const phrase = "A Saxon has died in combat"
            fighter.saxon.receiveDamage(fighter.viking.strength);
            if (fighter.saxon.health <= 0) {
                console.log(fighter.saxon);
                this.saxonArmy.splice(this.saxonArmy.indexOf(fighter.saxon), 1);
                return phrase
            }




        //    if (this.saxonArmy[this.iSaxon].health === 0){
         //       return this.saxonArmy[this.iSaxon];
          //  }
           // return this.saxonArmy[this.iSaxon].receiveDamage(this.vikingArmy[this.iViking].strength);
        
        }
    }

