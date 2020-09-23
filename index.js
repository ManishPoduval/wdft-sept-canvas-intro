console.log('Age is ', myAge)


let ball = new Circle(30, 100, 100, '#77ed7e')

ball.draw()


let ball1 = new Circle(30, 100, 300, '#edbe77')

ball1.draw()


let counter = 0;
let id = setInterval(() => {
    counter++
    console.log('Set timeout works')
    if (counter > 5) {
        clearInterval(id)
    }
}, 2000 ) 


// setInterval( callback, time )


