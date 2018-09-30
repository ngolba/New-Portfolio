const projects = {
    mood: {
        name: '#Mood',
        description: "This was the project for week 9 of my journey with Case Western Reserve. It uses three APIs to sort hundreds of movies and dynamically generates matches for each user's mood. Clean, refined, polished; but what did it take to get here?",
        link: "https://fka-hufflepuff.github.io/api-project/",
        techs: {
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
        }

    },
    firstPortfolio: {
        name: "My First Portfolio",
        description: "This was week one. A simple exercise in HTML and CSS",
        link: "https://ngolba.github.io/Basic-Portfolio/index.html",
        techs: {
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
        }
    },
    hangman: {
        name: "Really Demeaning Hangman",
        description: "Week three was my first exposure to JavaScript: a simple hangman game with a sense of humor.",
        link: "https://ngolba.github.io/Word-Guess-Game/",
        techs: {
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
        }
    },
    pokemon: {
        name: "Really Simple Pokemon",
        description: 'This was my second week with JavaScript and my first week with JQuery. The code was messy, the functionality was questionable, but I had big idea and went with it.',
        link: "https://ngolba.github.io/Really-Simple-Pokemon/",
        techs: {
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
        }
    },
    trivia: {
        name: "Trivia or Whatever",
        description: 'Just a trivia game I got bored of making and made snake with JavaScript instead.',
        link: "https://ngolba.github.io/TriviaGame/",
        techs: {
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
        }
    },
    giphy: {
        name: "Getting Giphy With It",
        description: "Week six and we're on the topic of APIs. Overall, the requirement were simple, but one bonus requirement stumped the class. Instructions called for a one-click download button, but downloading images from external sources isn't supported with the download attribute in modern Chrome. Instead, I wrote a Chrome extension to turn external links ending in '.gif' into download links.",
        link: "https://ngolba.github.io/Giphy-Project/",
        techs: {
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
        }
    },
    rps: {
        name: "Online Rock-Paper-Scissors",
        description: "Using Firebase, I created a rock-paper-scissors game that can be played by two with a queue for others.",
        link: "https://ngolba.github.io/RPS-Multiplayer/",
        techs: {
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
        }
    },
    reset: {
        techs: {
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

const updateCarouselData = (project) => {
    $('#carouselHeader').text(project.name);
    $('#descriptionText').text(project.description);
    fadeIcons(project.techs);
}

$(document).ready(() => {
    updateCarouselData(projects.mood);
    $('#portfolioCarousel').carousel({
        interval: 0
    });
})

$('#portBtn').click(() => {
    $('#aboutMe').slideUp(500)
    $('#footer').delay(1000).slideDown(500)
    $('#portfolio').delay(1500).slideDown(500)
    $('.backgroundImg').delay(500).animate({
        backgroundPositionY: '0%'
    })
})

$('#homeBtn').click(() => {
    $('#aboutMe').delay(1500).slideDown(500)
    $('#portfolio').slideUp(500)
    $('#footer').delay(500).slideUp(500)
    $('.backgroundImg').animate({
        backgroundPositionY: '100%'
    })
    fadeIcons(projects.reset)
})


$('#portfolioCarousel').on('slid.bs.carousel', () => {
    activeProject = projects[$('.carousel-item.active').attr('project')]
    updateCarouselData(activeProject);

})

$('#contactBtn').click(() => {
    $('#contactBtn').slideUp(500)
    $('#contactGroup').delay(500).slideDown(500)
})