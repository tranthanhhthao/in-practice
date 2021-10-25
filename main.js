const solowContainer = document.querySelector('.item');
const solowCopies = document.getElementsByClassName('solow-copy');

function solow() {
    var rect = solowContainer.getBoundingClientRect();
        x = rect.left;
        y = rect.top;
        w = rect.width;
        h = rect.height;

    var a = 240;

    var currentEvent, prevEvent;
    solowContainer.addEventListener('mousemove', e => {
        currentEvent = e
    })

    solowContainer.addEventListener('touchstart', () => {
        for (let i = 0; i < solowCopies.length; i++) {
            let randomX = Math.floor(15 + Math.random() * (w - a - 30));
            let randomY = Math.floor(15 + Math.random() * (h - a - 30));

            solowCopies[i].style.top = randomY + "px";
            solowCopies[i].style.left = randomX + "px";
        }
    })

    solowContainer.addEventListener('mouseleave', () => {
        setTimeout(() => {
            // solowCopies[1].style.top = '130px';
            // solowCopies[1].style.left = '160px';
            // solowCopies[1].style.transform = 'rotateZ(0)';
    
            solowCopies[2].style.top = '180px';
            solowCopies[2].style.left = '130px';
            solowCopies[2].style.transform = 'rotateZ(-8deg)';
        }, 650)

    })

    solowContainer.addEventListener('mouseenter', () => {
        solowCopies[0].style.top = '90px';
        solowCopies[0].style.left = '190px';
        solowCopies[0].style.transform = 'rotateZ(8deg)';

        solowCopies[1].style.top = '130px';
        solowCopies[1].style.left = '160px';
        solowCopies[1].style.transform = 'rotateZ(0)';

        solowCopies[2].style.top = '180px';
        solowCopies[2].style.left = '130px';
        solowCopies[2].style.transform = 'rotateZ(-8deg)';

        setTimeout(() => {
            solowRandom();
        }, 500)
    })

    solowContainer.addEventListener('mousedown', (e) => {
        currentEvent = e;
        solowCopies[2].style.top = (currentEvent.clientY - y) - a/2 + "px";
        solowCopies[2].style.left = (currentEvent.clientX - x) - a/2 + "px";

        if (currentEvent.clientX < x + a/2 + 14 && currentEvent.clientY < y + a/2 + 14) { //corner top left
            solowCopies[2].style.left = '14px';
            solowCopies[2].style.top = '14px';
        } else if (currentEvent.clientX > x + w - a/2 -14 && currentEvent.clientY < y + a/2 + 14) { //corner top right
            solowCopies[2].style.left = w - a - 14 + 'px';
            solowCopies[2].style.top = '14px';
        } else if (currentEvent.clientX < x + a/2 + 14 && currentEvent.clientY > y + h - a/2 - 14) { //corner bottom left
            solowCopies[2].style.left = '14px';
            solowCopies[2].style.top = h - a - 14 + 'px';
        } else if (currentEvent.clientX > x + w - a/2 -14 && currentEvent.clientY > y + h - a/2 - 14) { //corner bottom right
            solowCopies[2].style.left = w - a - 14 + 'px';
            solowCopies[2].style.top = h - a - 14 + 'px';
        } else if (currentEvent.clientX < x + a/2) { //edge left
            solowCopies[2].style.left = '14px';
            solowCopies[2].style.top = (currentEvent.clientY - y) - a/2 + "px";
        } else if (currentEvent.clientX > x + w - a/2 - 14) { //edge right
            solowCopies[2].style.left = w - a - 14 + 'px';
            solowCopies[2].style.top = (currentEvent.clientY - y) - a/2 + "px";
        } else if (currentEvent.clientY < y + a/2 + 14) { //edge top
            solowCopies[2].style.left = (currentEvent.clientX - x) - a/2 + "px";
            solowCopies[2].style.top = '14px';
        } else if (currentEvent.clientY > y + h - a/2 - 14) { //edge bottom
            solowCopies[2].style.left = (currentEvent.clientX - x) - a/2 + "px";
            solowCopies[2].style.top = h - a - 14 + 'px';
        } 

    })

    function solowRandom() {
        let delay = 0;

        setInterval(() => {
            if (currentEvent && prevEvent) {
                var movementX = currentEvent.clientX - prevEvent.clientX;
                var movementY = currentEvent.clientY - prevEvent.clientY;
                var movement = Math.sqrt(movementX * movementX + movementY * movementY);

                if (movement > 20 && currentEvent.clientX > x + w/2 && currentEvent.clientY > y + h/2) {
                    setTimeout(() => {
                        for (let i = 0; i < solowCopies.length; i++) {
                            let randomX;
                            let randomY = Math.floor(15 + Math.random() * (h - a - 30));

                            if (randomY < h/2 - a - 30) {
                                randomX = Math.floor(15 + Math.random() * (w - a - 30))
                            } else {
                                randomX = Math.floor(15 + Math.random() * (w/2 - a - 30))
                            }

                            solowCopies[i].style.top = randomY + "px";
                            solowCopies[i].style.left = randomX + "px";
                        }
                    }, delay)
                    
                } else if (movement > 20 && currentEvent.clientX > x + w/2 && currentEvent.clientY < y + h/2) {
                    setTimeout(() => {
                        for (let i = 0; i < solowCopies.length; i++) {
                            let randomX = Math.floor(15 + Math.random() * (w - a - 30));
                            let randomY;

                            if (randomX < w/2 - a - 30) {
                                randomY = Math.floor(15 + Math.random() * (h - a - 30))
                            } else {
                                randomY = Math.floor(h/2 + Math.random() * (h/2 - a - 30))
                                console.log('hm')
                            }
                            solowCopies[i].style.top = randomY + "px";
                            solowCopies[i].style.left = randomX + "px";
                        }
                    }, delay)
                } else if (movement > 20) {
                    setTimeout(() => {
                        for (let i = 0; i < solowCopies.length; i++) {
                            let randomX = Math.floor(15 + Math.random() * (w - a - 30));
                            let randomY = Math.floor(15 + Math.random() * (h - a - 30));

                            solowCopies[i].style.top = randomY + "px";
                            solowCopies[i].style.left = randomX + "px";
                        }
                    }, delay)
                }      
            }

            prevEvent = currentEvent;
        }, 600)
    }
}

solow();




