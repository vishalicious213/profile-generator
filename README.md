# Profile Generator

This was a static page Scrimba project. The student could manually change the value of the variable being sent into favouriteMovieGenre(), favouriteFruit(), favouriteMode() or favouriteEdgeStyle() to load different CSS presets and change the appearance of the page.

I made the project interactive and added inputs and event listeners for all of those functions, along with additional functions, so that visitors could select from drop-down lists and change the page's appearance. I also added functions and event listeners so that visitors could change elements on the page to reflect their own name, LinkedIn page profile, picture and add their own "Fun facts about me".

The submit button is connected to a function that checks to see which text fields have data in them and only updates the parts of the page associated with that data, so it doesn't wipe out parts of the page that are connected to empty fields.

## JavaScript concepts

- variables
- arrays
    - .forEach()
    - .remove()
    - .push()
- if statements
- if...else statements
- for loops
- functions
- document.getElementById()
- document.querySelectorAll()
- document.element.style
    - .style.setProperty()
- document.createElement()
- element.textContent
- element.appendChild()
- element.value
- element.href (for anchor tag)
- element.src (for image element)
- element.addEventListener()

## CSS concepts

- CSS variables
- border-radius: calc()

## HTML concepts

- import fonts from Google in head section
- \<label>
- \<select>
- \<option>
    - selected
- \<form>
    - \<input>
    - \<button>

Live deploy: https://vish213-profile-generator.netlify.app/