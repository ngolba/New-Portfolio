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
        chrome: false
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
        chrome: false
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
        chrome: false
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
        chrome: true
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
        chrome: false
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
        $('body').delay(1300).animate({
            backgroundPosition: '0%',
            backgroundPositionY: '50%'
        }, 1000).delay(1000).animate({
            backgroundPositionY: '20%'
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
for (let i = 0; i < (greetings.length  + 1) ; i++) {
    if (i === greetings.length){
        setTimeout( () => {
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
            $(`#${key}Icon`).animate({opacity: "1"}, 100)
        } else {
            $(`#${key}Icon`).animate({opacity: "0.5"}, 100)
        } 
    }
}
$(document).ready( () => {
    fadeIcons(projects.reset);
})
$('#portBtn').click(() => {
    $('#aboutMe').slideUp(500)
    $('#portfolio').delay(500).slideDown(500)
    $('body').delay(500).animate({backgroundPositionY: '0%'})
    fadeIcons(projects['mood']);
})

$('#homeBtn').click(() => {
    $('#aboutMe').delay(500).slideDown(500)
    $('#portfolio').slideUp(500)
    $('body').animate({backgroundPositionY: '20%'})
})


$('#portfolioCarousel').on('slid.bs.carousel', () => {
    let activeProject = projects[$('.carousel-item.active').attr('project')]
    fadeIcons(activeProject);
    
})

$('#contactBtn').click(() => {
    $('#contactBtn').slideUp(500)
    $('#contactGroup').delay(500).slideDown(500)
})
