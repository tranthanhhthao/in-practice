// 
function startup() {
    coverForStart();
    typewriter.type();
} 

// 01 cover for start
function coverForStart () {
    const infoMarquee = document.querySelector('.info-section .marquee .cover-for-start');
    infoMarquee.style.display = 'block';
    setTimeout(() => {
        infoMarquee.style.display = 'none';
    }, 4520)

    const infoContainer = document.querySelector('.info-section .info-container .cover-for-start');
    infoContainer.style.display = 'block';
    setTimeout(() => {
        infoContainer.style.display = 'none';
    }, 4040)

    const subNav = document.querySelector('.subnav .cover-for-start');
    subNav.style.display = 'block';
    setTimeout(() => {
        subNav.style.display = 'none';
    }, 4940)
}

// hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = "0"
    } else {
        document.getElementById('navbar').style.top = "-60px"
    }
    prevScrollpos = currentScrollPos;
})

// subnav tools
var backtotopTool = document.getElementById('backtotop');
var zoomInTool = document.getElementById('zoom-in');
var zoomOutTool = document.getElementById('zoom-out');

backtotopTool.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

var zoomingTarget = document.querySelector('.zooming-target')
var zoomAlert = document.querySelector('.zoom-alert')
let zoomIndex = 0;

function zooming () {
    if (zoomIndex > 2) {
        zoomIndex = 2
    } else if (zoomIndex < -2) {
        zoomIndex = -2
    }
    
    zoomingTarget.style.transform = "scale(" + (1 + zoomIndex*0.1) + "," + (1 + zoomIndex*0.1) + ")";
    if (zoomIndex == 0) {
        zoomAlert.style.display = "block";
        setTimeout(() => {
            zoomAlert.style.display = "none";
        }, 3000)
    }
}

zoomInTool.addEventListener('click', () => {
    zoomIndex++;
    zooming();
})

zoomOutTool.addEventListener('click', () => {
    zoomIndex--;
    zooming();
})

// 02 rotate logo
const logo = document.getElementById('logo');

function rotateLogo () {
    let angle;

    window.addEventListener('mousemove', e => {
        logo.style.transition = 'none';
        
        if (e.clientX < 600 && e.clientY < 500 && e.clientX > 0 && e.clientY > 0) {
            let angleRadians = Math.atan2(e.clientY - 46, e.clientX - 37.5);
            angle = Math.round(angleRadians * 180 / Math.PI);

        } else {
            if (angle > 36) {
                angle = angle - 0.2
            } else if (angle < 36) {
                angle = angle + 0.2
            } else {
                angle = 36
            }
            // angle = 36
        }
        logo.style.transform = 'rotateZ(' + angle + 'deg)';
    })

    document.addEventListener('mouseleave', () => {
        logo.style.transition = 'transform 0.3s';
        logo.style.transform = 'rotateZ(36deg)';
    })
}

rotateLogo();

// 03 clock

const clock = {
    logTime: function logTime () {
        const now = new Date();

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();

        if (h >= 12) {
            h = h - 12;
        } else {
            h = h;
        }

        function AMorPM () {
            if (now.getHours() >= 12) {
                return "pm"
            } else {
                return "am"
            }
        }

        function display (a) {
            if (a < 10) {
                return "0" + a;
            } else {
                return a
            }
        }

        const updateTime = document.getElementById("clock");
        updateTime.innerHTML = "it's " + display(h) + "." + display(m) + AMorPM() + " in hcmc,";

        setTimeout(logTime, 1000);
    }
}

clock.logTime();

// 04 typing and no drawing

const mynameTyping = 'tran trân trần thanh thao thảo';
const myname = 'trần thanh thảo';

let index = 0;
let counter = 0;

const acts = ['in-practice', 'learning', 'learns to code', 'learns design']

let activity = acts[counter];

const element = document.querySelector('#typed');

const typewriter = {
    typingName: function typingName (delay) {

            setTimeout (() => {
                index++;
                if (index <= 4) { //'tran'
                    element.innerHTML = mynameTyping.substring(0, index);
                    typingName(100);
                } else if (index == 5) { //'trân'
                    element.innerHTML = mynameTyping.substring(5, 9);
                    typingName(70);
                } else if (index == 6) { //'trần'
                    element.innerHTML = mynameTyping.substring(10, 14);
                    typingName(500);
                } else if (index == 7) {
                    index = 15;
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, index);
                    typingName(100);
                } else if (index == 16) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, index);
                    typingName(100);
                } else if (index <= 20) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, index);
                    typingName(80);
                } else if (index == 21) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, 20) + mynameTyping.substring(21, index);
                    typingName(100);
                } else if (index <= 25) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, 20) + '&nbsp' + mynameTyping.substring(21, index);
                    typingName(100);
                } else if (index == 26) {
                    element.innerHTML = myname;
                    index = 0;
                    setTimeout(() => {
                        element.innerHTML = myname + '<br>'
                    }, 1000);
                }
            }, delay)
        },

    backspacing: function backspacing (letters, delay) {
            index--;
            setTimeout(() => {
                if (index >= activity.length - letters + 1) {

                    element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                    backspacing(letters, delay);

                } else if (index == 0) {
                    element.innerHTML = myname + '<br>';
                    counter++;
                    activity = acts[counter];

                    if (counter >= acts.length) { //creating loop here
                        counter = 0;
                    }
                    typewriter.typingActs(100);
                }

            }, delay)
        },

    typingActs: function typingActs (delay) {
            activity = acts[counter];
            index++;

            setTimeout(() => {
                if (counter == 0) {
                    if (index < 3) { //'in'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(70);
                    } else if (index == 3) { //'-'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(300);
                    } else if (index < 7) { //'prac'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(100);
                    } else if (index == 7) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(150);
                    } else if (index <= activity.length) { //'tice'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(70);
                    } else if (index == 12) {
                        element.innerHTML = myname + '<br>' + acts[0].fontcolor('#e2e2e2') + '&nbsp;';
                        setTimeout(() => {
                            typewriter.backspacing(activity.length, 50);
                        }, 4000);
                    }
                } else if (counter == 1) {
                    if (index < 9) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(100);
                    } else if (index == 9) {
                        typewriter.backspacing(4, 40);
                        counter = 2;
                        setTimeout(() => {
                            typingActs(70)
                        }, 400)
                    }
                } else if (counter == 2) {
                    activity = acts[counter]; //length of 14
                    if (index <= 6) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(400);
                    } else if (index == 7) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(400);
                    } else if (index < activity.length) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(40);
                    } else if (index == activity.length) {
                        element.innerHTML = myname + '<br>' + activity.fontcolor('#e2e2e2') + '&nbsp;';

                        setTimeout(() => {
                            typewriter.backspacing(8, 90);
                        }, 10000);

                        setTimeout(() => {
                            counter++;
                            typingActs(100)
                        }, 12000)

                    }

                } else if (counter == 3) {
                    element.innerHTML = myname + '<br>' + activity.substring(0, 6).fontcolor('#e2e2e2');
                    if (index == 7) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, 6).fontcolor('#e2e2e2');
                        typingActs(50);
                    } else if (index < activity.length) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#e2e2e2');
                        typingActs(70);
                    } else if (index == activity.length) {
                        element.innerHTML = myname + '<br>' + activity.fontcolor('#e2e2e2') + '&nbsp;';
                        setTimeout(() => {
                            typewriter.backspacing(activity.length, 70);
                        }, 5000);
                    }
                }
            }, delay)

        },
    type: function () {
        typewriter.typingName();
        setTimeout(() => {
            typewriter.typingActs(0)
        }, (3100 + 2000));
    }
}

// 05 display avatar

// 06 darkenButton only info-button
function darkenButton () {
    const infoButton = document.querySelector('.button-info.dark-button-info');

    infoButton.classList.remove('dark-button-info');
    let darken = false;

    infoButton.addEventListener('click', () => {
        if (!darken) {
            infoButton.classList.add('dark-button-info');
            darken = true;
        } else if (darken) {
            infoButton.classList.remove('dark-button-info');
            darken = false;
        }
    })
}

darkenButton();

// item2 solow
const solowContainer = document.querySelector('.item2');
const solowCopies = document.getElementsByClassName('solow-copy');

function solow() {
    var rect = solowContainer.getBoundingClientRect();
        x = rect.left;
        y = rect.top;
        w = rect.width;
        h = rect.height;

    var a = 240;

    document.addEventListener('scroll', () => {
        rect = solowContainer.getBoundingClientRect();
        x = rect.left;
        y = rect.top;
        w = rect.width;
        h = rect.height;
    })

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
            solowCopies[2].style.top = '180px';
            solowCopies[2].style.left = '130px';
            solowCopies[2].style.transform = 'rotateZ(-8deg)';
        }, 650)
    })

    solowContainer.addEventListener('mouseenter', () => {
        solowCopies[0].style.top = '100px';
        solowCopies[0].style.left = '190px';
        solowCopies[0].style.transform = 'rotateZ(8deg)';

        solowCopies[1].style.top = '140px';
        solowCopies[1].style.left = '160px';
        solowCopies[1].style.transform = 'rotateZ(0)';

        solowCopies[2].style.top = '190px';
        solowCopies[2].style.left = '130px';
        solowCopies[2].style.transform = 'rotateZ(-8deg)';

        setTimeout(() => {
            solowRandom();
        }, 500)
    })

    solowContainer.addEventListener('mousedown', (e) => {

        solowCopies[2].style.top = (e.clientY - y) - a/2 + "px";
        solowCopies[2].style.left = (e.clientX - x) - a/2 + "px";

        if (e.clientX < x + a/2 + 14 && e.clientY < y + a/2 + 14) { //corner top left
            solowCopies[2].style.left = '14px';
            solowCopies[2].style.top = '14px';
        } else if (e.clientX > x + w - a/2 -14 && e.clientY < y + a/2 + 14) { //corner top right
            solowCopies[2].style.left = w - a - 14 + 'px';
            solowCopies[2].style.top = '14px';
        } else if (e.clientX < x + a/2 + 14 && e.clientY > y + h - a/2 - 14) { //corner bottom left
            solowCopies[2].style.left = '14px';
            solowCopies[2].style.top = h - a - 14 + 'px';
        } else if (e.clientX > x + w - a/2 -14 && e.clientY > y + h - a/2 - 14) { //corner bottom right
            solowCopies[2].style.left = w - a - 14 + 'px';
            solowCopies[2].style.top = h - a - 14 + 'px';
        } else if (e.clientX < x + a/2 + 14) { //edge left
            solowCopies[2].style.left = '14px';
            solowCopies[2].style.top = (e.clientY - y) - a/2 + "px";
        } else if (e.clientX > x + w - a/2 - 14) { //edge right
            solowCopies[2].style.left = w - a - 14 + 'px';
            solowCopies[2].style.top = (e.clientY - y) - a/2 + "px";
        } else if (e.clientY < y + a/2 + 14) { //edge top
            solowCopies[2].style.left = (e.clientX - x) - a/2 + "px";
            solowCopies[2].style.top = '14px';
        } else if (e.clientY > y + h - a/2 - 14) { //edge bottom
            solowCopies[2].style.left = (e.clientX - x) - a/2 + "px";
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
        }, 100)
    }
}

solow();






// last
document.addEventListener('DOMContentLoaded', startup);
