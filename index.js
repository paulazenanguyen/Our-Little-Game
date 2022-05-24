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

image.onload = () => { //putting inside this function because if we left draw image alone then it wouldn't have loaded because the photo needs to load. so this function basically says we will wait for the huge picture to load then display it
     c.drawImage(image, -2225, -350) //how you draw something into the screen. argument is going to be an html object( 3 arguments image, x position, y position)
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
    }

    //This is going to be the section where you are actually going to press some keys and the game should respond
    //You would need an event listener

    //what event do you want to listen for? Keydown. whenever you keydown you're going to activate the arrow function. calls whatever code is in the function.
    window.addEventListener('keydown', () => { //this is going to take two arguments. one for the keydown and the second is going to be the arrow key. 
        console.log('going down');
    })


