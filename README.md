# Adding Text to Paragraph using Button

This project demonstrates how to add text from a textbox to a `<p>` tag by clicking an "Add" button. The project includes a simple webpage where users can enter text in a textbox and then append that text to a `<p>` tag one below another using JavaScript.

## Features

- Textbox to enter text.
- "Add" button to append the entered text to a `<p>` tag.
- JavaScript function to handle the button click and append the text.

## How it Works

1. **index.html**: This HTML file contains the structure of the webpage. It includes an input textbox, an "Add" button, and a `<p>` tag where the entered text will be displayed.

2. **index.js**: This JavaScript file contains the logic for appending text to the `<p>` tag. It does the following:

   - Retrieves references to the input textbox, the "Add" button, and the `<p>` tag using DOM methods like `getElementById`.

   - Adds an event listener to the "Add" button to listen for clicks.

   - Defines a function that gets triggered when the "Add" button is clicked. This function reads the value from the input textbox, creates a new `<p>` element, sets its text content to the entered value, and appends it to the existing `<p>` tag.

3. **styles.css**: This CSS file contains basic styling for the elements on the webpage.

