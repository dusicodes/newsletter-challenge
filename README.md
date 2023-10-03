# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Alt text](image.png)
![Alt text](image-1.png)

### Links

- Solution URL:
- Live Site URL:

## My process

My process was very straight forward.
1st Create a box that contains 2 divs essentially the text and the image
2nd styling with flex and tailwind and css to match the design
3nd handle states such as the email and the submit
4th handle validation on the email
5th handle the dismiss message button to go back to the main screen

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I already had a little bit of experience with react, however what i have learnt how the onSubmit atribute works on react forms as well as some styling features using tailwindcss

This is one of the functions that i had to research about: Email Address validation

```js
const handleEmailAddress = (e: string) => {
  setEmail(e);
  const validation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (e.match(validation)) {
    setMessage("");
  } else {
    setMessage("Invalid Email Address");
  }
};
```

### Continued development

I want to focus more on react and it can be used in on a larger scale and eventually do full stack development

### Useful resources

stackoverflow

## Author

- Website: none
- Frontend Mentor - [@edusiCode](https://www.frontendmentor.io/profile/edusiCode)
- Twitter: none
