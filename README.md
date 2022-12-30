#Long Practice: Intro to React Forms
For this project, you will be creating a user registration form in React. Your form should have the following fields:

Name
Email
Phone number
Phone type: Home, Work, or Mobile (dropdown menu)
Staff: Instructor or Student (radio buttons)
Bio (text area)
Sign up for email notifications (checkbox)
On submit, the form should validate the input in each field and either inform the user of any errors or, if the input has no errors, send the data off as JSON. (Since there is no backend, you can verify that the form has correctly captured the input by printing the form data with console.log() instead.)

By the end of this project, you should be able to:

Create a basic form in React
Receive and error-check user input on the form
Implementation
Create a new React app and add a Form component with the fields listed above. Start with the HTML (label, input, select, textarea, button, etc.). Make sure you're logging the form data when you hit the submit button.

Once that's working, get your validations set up.

Validations
Name must be present
Email must be present and should be properly formatted
Phone number should be properly formatted
Phone type should be selected if a phone number is present
Bio should have a character limit of 280 characters
The name and bio field can be validated in vanilla JS but validating email and phone numbers is a bit more complex. There are multiple methods to implement these: do a bit of Googling and find a method you like. (You also might want to check out regular expressions for pattern matching.)

Your form should block submission and display a descriptive error message whenever validations fail.

