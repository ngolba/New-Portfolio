const projects = {
    mood: {
        html5: true,
        css: true,
        js: true,
        node: false,
        react: false,
        git: true,
        sql: false,
        bootstrap: true,
        jquery: true,
        chrome: false,
        firebase: false,

    },
    firstPortfolio: {
        html5: true,
        css: true,
        js: false,
        node: false,
        react: false,
        git: true,
        sql: false,
        bootstrap: false,
        jquery: false,
        chrome: false,
        firebase: false,
    },
    hangman: {
        html5: true,
        css: true,
        js: true,
        node: false,
        react: false,
        git: true,
        sql: false,
        bootstrap: true,
        jquery: false,
        chrome: false,
        firebase: false
    },
    pokemon: {
        html5: true,
        css: true,
        js: true,
        node: false,
        react: false,
        git: true,
        sql: false,
        bootstrap: true,
        jquery: true,
        chrome: false,
        firebase: false
    },
    trivia: {
        html5: true,
        css: true,
        js: true,
        node: false,
        react: false,
        git: true,
        sql: false,
        bootstrap: true,
        jquery: true,
        chrome: false,
        firebase: false
    },
    giphy: {
        html5: true,
        css: true,
        js: true,
        node: false,
        react: false,
        git: true,
        sql: false,
        bootstrap: true,
        jquery: true,
        chrome: true,
        firebase: false
    },
    rps: {
        html5: true,
        css: true,
        js: true,
        node: false,
        react: false,
        git: true,
        sql: false,
        bootstrap: true,
        jquery: true,
        chrome: false,
        firebase: true
    },
    reset: {
        html5: false,
        css: false,
        js: false,
        node: false,
        react: false,
        git: false,
        sql: false,
        bootstrap: false,
        jquery: false,
        chrome: false,
        firebase: false
    }
}

$('#slider').mousedown(() => {
    $('#slideText').hide();
})

$('#slider').change(() => {
    if ($('#slider').val() === "100") {
        $('.welcomeText, #slideBox').fadeOut(200)
        $('#phoneHolder').delay(200).slideUp(1000)
        $('#initialDisplay').delay(1200).slideUp(0);
        $('.afterStart').delay(3300).slideDown(1000);
        $('.backgroundImg').delay(1300).animate({
            backgroundPosition: '0%',
            backgroundPositionY: '0%'
        }, 1000).delay(1000).animate({
            backgroundPositionY: '100%',
            height: '100%'
        }, 1000)
    }
})



const greetings = ["Hello, my name is Nathan.", "I write code.", "Take a look..."]
const greetingDoms = ['#greeting', '#secondText', '#takeLook']
const textScroll = (text, speed, domElement) => {
    let i = 0;
    let animation = setInterval(() => {
        $(`${domElement}`).append(text[i]);
        i++;
        if (i === text.length) {
            clearInterval(animation);
        }
    }, speed)
}

let totalTime = 0;
for (let i = 0; i < (greetings.length + 1); i++) {
    if (i === greetings.length) {
        setTimeout(() => {
            $('#slideBox').slideDown(500);
        }, totalTime)
    } else {
        setTimeout(() => {
            textScroll(greetings[i], 75, greetingDoms[i])
        }, totalTime)
        totalTime += (greetings[i].length * 75)
    }
}

const fadeIcons = (project) => {
    for (let key in project) {
        if (project[key] === true) {
            $(`#${key}Icon`).animate({
                opacity: "1"
            }, 100)
        } else {
            $(`#${key}Icon`).animate({
                opacity: "0.5"
            }, 100)
        }
    }
}


$(document).ready(() => {
    fadeIcons(projects.mood);
    $('#portfolioCarousel').carousel({
        interval: 0
    });
})

$('.portBtn').click(() => {
    $(".contactPage").slideUp(500)
    $('#aboutMe').slideUp(500)
    $('#footer').delay(1000).slideDown(500)
    $('#portfolio').delay(1500).slideDown(500)
    $('.backgroundImg').delay(500).animate({
        backgroundPositionY: '0%',
        backgroundPositionX: '0%'
    })

})

$('#contactBtn').click(() => {
    $('#aboutMe').slideUp(500)
    $('#portfolio').slideUp(500)
    $('#footer').delay(500).slideUp(500)
    $('.backgroundImg').delay(1000).animate({
        backgroundPositionX: '100%'
    }, 500).delay(200).animate({
        backgroundPositionY: '80%'
    }, 500)
    $('.contactPage').delay(1500).slideDown(500);
    $('#contactJumbo').delay(4500).fadeIn(500);
})

$('#homeBtn').click(() => {
    $('#aboutMe').delay(1500).slideDown(500)
    $('#portfolio').slideUp(500)
    $('#footer').delay(500).slideUp(500)
    $('.backgroundImg').delay(1000).animate({
        backgroundPositionY: '100%',
        backgroundPositionX: '0%'
    })
    fadeIcons(projects.reset)
    $(".contactPage").slideUp(500)
})


$('#portfolioCarousel').on('slid.bs.carousel', () => {
    activeProject = projects[$('.carousel-item.active').attr('project')]
    fadeIcons(activeProject);
})

$('.nav-link').click( () => $('.navbar-toggler').click() )