// 

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

// coverForStart();
window.onload = coverForStart;

// 02 clock

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

// 03 typing and no drawing

const mynameTyping = 'tran trân trần thanh thao thảo';
const myname = 'trần thanh thảo';

let index = 0;
let counter = 0;

const acts = ['in-practice', 'learning', 'learns to code', 'learns design']

let activity = acts[counter];

const element = document.querySelector('#typewriter p');

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

typewriter.type();

// 04 darkenButton only info-button
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
