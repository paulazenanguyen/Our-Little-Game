const canvas = document.querySelector('canvas'); // This is selecting an element from the html and putting into the js (picking cherries and putting it in another basket)
const c = canvas.getContext('2d') // this is a giant object which is going to be responsible for everything that we need in the game. C stands for context

canvas.width = 1024 //changing it so that it fits the whole screen
canvas.height = 576 

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height) //takes four arguments first one is the x position, y position, width, height. By default its going to be black

const image = new Image() 
image.src = './img/Pokemon Style Game Map .png ' // this is how you create an html image inside js

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image 
    }

    draw() {
        c.drawImage(this.image, this.position.x , this.position.y) //how you draw something into the screen. argument is going to be an html object( 3 arguments image, x position, y position)
    }
}

const background = new Sprite({
    position: {
    x: -2225,
    y: -350
},
    image: image
})
    const keys = {
        w: {
            pressed: false
        },
        a: {
            pressed: false
        },
        s: {
            pressed: false
        },
        d: {
            pressed: false
        }
    }
    function animate () { //in order to use the event listener we're going to create a animation loop
        window.requestAnimationFrame(animate) //you're creating an infinite loop. calling animate in the fram function will call the animate function. It's going to go all around.
        background.draw()
        c.drawImage(
            playerImage,
            0, //so because when we load the player image in comes in a sprite sheet and we are going to need only one out of the four rendered. in order to do that we are going to have to add more arguments in order to do the cropping. Crop position and crop width
            0, 
            playerImage.width / 4, 
            playerImage.height, 
            canvas.width / 2 - playerImage.width / 4 / 2, //everything down here is to determine the actual height and width of the image that you are trying to render
            canvas.height / 2 - playerImage.height / 2,
            playerImage.width / 4,
            playerImage.height
        )

        if (keys.w.pressed && lastKey ==='w') background.position.y += 3
        else if (keys.a.pressed && lastKey ==='a') background.position.x += 3
        else if (keys.d.pressed && lastKey ==='d') background.position.x -= 3
        else if (keys.s.pressed && lastKey ==='s') background.position.y -= 3
    }
    animate()
    //This is going to be the section where you are actually going to press some keys and the game should respond
    //You would need an event listener

    let lastKey = ''

    //what event do you want to listen for? Keydown. whenever you keydown you're going to activate the arrow function. calls whatever code is in the function.
    window.addEventListener('keydown', (e) => { //this is going to take two arguments. one for the keydown and the second is going to be the arrow key. Works for any key 
        switch (e.key) { //so e inside the parameter is going to be an object and inside that object we're calling key just like on like 37. If you don't know what I am talking about you can log e inside
            case 'w': 
                keys.w.pressed = true
                lastKey = 'w'
                break
            case 'a':
                keys.a.pressed = true
                lastKey = 'a'
                break
            case 's':
                keys.s.pressed = true
                lastKey = 's' 
                break
            case 'd':
                keys.d.pressed = true
                lastKey = 'd' 
                break
        }
    })

    window.addEventListener('keyup', (e) => { //the difference between this code and the other one is that its going to fire when the key is lifted up
        switch (e.key) { 
            case 'w': 
                keys.w.pressed = false 
                break
            case 'a':
                keys.a.pressed = false 
                break
            case 's':
                keys.s.pressed = false 
                break
            case 'd':
                keys.d.pressed = false 
                break
        }
    })


