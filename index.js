const movieEl = document.getElementById("favorite-movie-genre")
const fruitEl = document.getElementById("favorite-fruit")
const screenEl = document.getElementById("screen-mode")
const edgeEl = document.getElementById("edge-style")
const nameEl = document.getElementById("name")
// const profileForm = document.getElementById("profile-form")
const setNameEl = document.getElementById("set-name")
const linkedIn = document.getElementById("linkedIn")
const setLinkedIn = document.getElementById("set-linkedIn")
const funFacts = document.getElementById("fun-facts")
const newFact = document.getElementById("new-fact")

function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");    
    }
}

function favouriteMode(mode) {
    if (mode === "light" || !mode) {
        setProp('--background', "var(--light)");
        setProp('--text', "var(--dark)");
    } else if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }
}

function favouriteFruit(theme) {
    if (theme === "pastel") {
        setProp('--light', "#f2f6c3")
        setProp('--dark', "#68c4af")
    } else if (theme === "muted") {
        setProp('--light', "#4c5b64")
        setProp('--dark', "#45241c")
    } else if (theme === "love") {
        setProp('--light', "#f06836")
        setProp('--dark', "#ba0001")
    } else if (theme === "sky") {
        setProp('--light', "#99ccff")
        setProp('--dark', "#3366ff")
    } else if (theme === "forrest") {
        setProp('--light', "#91B247")
        setProp('--dark', "#597C2B")
    }  else if (theme === "shiny") {
        setProp('--light', "#2e9afe")
        setProp('--dark', "#02197c")
    } else if (theme === "banana") {
        setProp('--light', "#fbec5d")
        setProp('--dark', "#6b3e26")
    } else if (theme === "watermelon") {
        setProp('--light', "#75b855")
        setProp('--dark', "#ad3838")
    } else if (theme === "tomato") {
        setProp('--light', "#d62e2e")
        setProp('--dark', "#600000")
    } else if (theme === "avocado") {
        setProp('--light', "#6b8c21")
        setProp('--dark', "#704012")
    } else if (theme === "orange") {
        setProp('--light', "#ffca16")
        setProp('--dark', "#f97300")
    } else if (theme === "blueberry") {
        setProp('--light', "#41a8f9")
        setProp('--dark', "#064490")
    } else  {
        setProp('--light', "#f5f5f5")
        setProp('--dark', "#222222")
    } 
}

function addFunFact() {
    let factToAdd = document.createElement("li")
    factToAdd.textContent = newFact.value
    funFacts.appendChild(factToAdd)
    newFact.value = ""
}

function submitForm() {
    nameEl.textContent = setNameEl.value
    linkedIn.href = `https://www.linkedin.com/in/${setLinkedIn.value}`
    if (newFact.value) {
        addFunFact()
    }
    // console.log(linkedIn.href)
}

// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("regular")
movieEl.addEventListener("change", function() {
    favouriteMovieGenre(movieEl.value)
})

// watermelon, tomato, banana, orange, avocado, blueberry
favouriteFruit("regular")
fruitEl.addEventListener("change", function() {
    favouriteFruit(fruitEl.value)
})

// light, dark
favouriteMode("light")
screenEl.addEventListener("change", function() {
    favouriteMode(screenEl.value)
})

// sharp, soft, round
favouriteEdgeStyle("sharp")
edgeEl.addEventListener("change", function() {
    favouriteEdgeStyle(edgeEl.value)
})

