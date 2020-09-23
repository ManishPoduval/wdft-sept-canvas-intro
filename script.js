let canvas = document.querySelector('canvas')
canvas.style.border = '2px solid black';
canvas.style.backgroundColor = '#323d40'
let ctx = canvas.getContext('2d')


//---------------------------------
//      Adding Rect/Squares 
//---------------------------------

// fillRect ( x, y, width, height )
// ctx.fillStyle = 'red'
// ctx.fillRect(50, 30, 100, 200)

// ctx.fillStyle = 'blue'
// ctx.fillRect(350, 30, 100, 200)

// ctx.strokeStyle = 'green'
// ctx.strokeRect(160, 30, 100, 200)

// ctx.clearRect(0,0, 200, 200)

//---------------------------------
//      Adding line - 
//---------------------------------

//moveTo() - lineTo()
// ctx.beginPath()
// ctx.strokeStyle = 'blue'
// ctx.moveTo(50, 50)
// ctx.lineTo(400, 50)
// ctx.lineTo(400, 300)
// ctx.lineTo(50, 50)
// ctx.stroke()
// ctx.closePath();

// ctx.beginPath()
// ctx.strokeStyle = 'red'
// ctx.moveTo(50, 300)
// ctx.lineTo(50, 500)
// ctx.stroke()
// ctx.closePath();


//---------------------------------
//      Adding circle - arc()
//---------------------------------


// arc( x, y, radius, startAngle, endAngle )
// ctx.beginPath()
// ctx.arc(200, 200, 150, 0 , 2* Math.PI )


// stroke ensures that the circle is visible
// ctx.stroke()
// ctx.closePath()


// ctx.beginPath()
// ctx.arc(200, 230, 90, 0 ,  Math.PI )
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.arc(140, 160, 30, 0 , 2* Math.PI )
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.arc(250, 160, 30, 0 , 2* Math.PI )
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.strokeStyle = 'red'
// ctx.moveTo(200, 200)
// ctx.lineTo(200, 270)
// ctx.stroke()
// ctx.closePath();


//---------------------------------
//      END Circle
//---------------------------------

//--------------------------------
//      Adding text - fillText()
//--------------------------------


//ctx.font = '32px Verdana'
// fillText (your text, x, y)
//ctx.fillText('Hello Ironhackers', 100, 70)
// ctx.fillText('Todays lab is hard', 100, 270)

//---------------------------------
//      END Text
//---------------------------------

//---------------------------------
//      Adding image - drawImage()
//---------------------------------

// drawImage (image element, x, y, width, height)
// let img = document.createElement('img')
// img.src = 'https://tinyurl.com/ironhack-pokemons/25.svg'

// Always make sure you wait for the image to survive
// img.addEventListener('load', () => {
//     ctx.drawImage(img, 100, 300)
// })

//---------------------------------
//      END Image
//---------------------------------

//---------------------------------
//     POKEBALL
//---------------------------------


// ctx.fillStyle = 'white';
// ctx.lineWidth = 10
// ctx.beginPath()
// ctx.arc(200, 200, 100, 0, Math.PI)
// ctx.lineTo(300, 200)
// ctx.fill()
// ctx.stroke()
// ctx.closePath()

// ctx.fillStyle = 'red';
// ctx.lineWidth = 10
// ctx.beginPath()
// ctx.arc(200, 200, 100, 0, Math.PI, true)
// ctx.fill()
// ctx.stroke()
// ctx.closePath()

// ctx.fillStyle = 'white';
// ctx.lineWidth = 20
// ctx.beginPath()
// ctx.arc(200, 200, 20, 0, Math.PI*2, true)
// ctx.stroke()
// ctx.fill()
// ctx.closePath()

//---------------------------------
//      END 
//---------------------------------

let myAge = 99;


class Circle {
    constructor(radius, x, y, color){
        this.radius = radius
        this.x = x;
        this.y = y;
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
    }
}
