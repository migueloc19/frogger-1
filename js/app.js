// Enemies our player must avoid

var Avance_X = 101
var Avance_Y = 101


var Enemy = function (y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //var x = 1, y = 1
    
    this.sprite = 'images/enemy-bug.png';
    this.x = 1;
    this.y = y;
    
    //Velocidad movimiento de enemigos
    this.velocidad = Math.random() * 8
    this.ancho = 80;
    this.alto = 40;
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.velocidad
        
    if (this.x > 505){this.x = 1}
    
    if (this.colisiones(player)){
        player.reinicio()
    }
        
};


Enemy.prototype.colisiones = function(object) {
    return (this.x < object.x + object.ancho  && 
            this.x + this.ancho  > object.x &&
            this.y < object.y + object.alto && 
            this.y + this.alto > object.y)    
}


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function () {
    Enemy.call(this)
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.spritePlayer = 'images/char-boy.png';
    
    this.x = 202
    this.y = 404
    
    
    
};

Player.prototype.reinicio = function(){
    this.x = 202
    this.y = 404
}

Player.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};


Player.prototype.handleInput = function(tecla){
    
    if (tecla == 37){
        
        this.x -= Avance_X
        //alert(this.x)
        if (this.x < 0) {this.x = 0}
    }
    else if (tecla == 38){
        this.y -= Avance_Y
        if (this.y < 0  ) {this.y = 404}
    }
    else if (tecla == 39){
        this.x += Avance_X
        if (this.x >= 404) {this.x = 404}
    }
    else if (tecla == 40){
        this.y += Avance_Y
        if (this.y >=  404  ) {this.y = 404}
    }

    
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.spritePlayer), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

player = new Player();
allEnemies = new Array(new Enemy(80), new Enemy(160), new Enemy(240));


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(e.keyCode);
});
