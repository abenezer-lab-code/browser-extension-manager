# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions 
- Remove extensions from the list 
- Select their color theme [accessible button]([FireShot](https://getfireshot.com/)/)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.)


- Solution URL: [solution ](https://github.com/abenezer-lab-code/browser-extension-manager.git)
- Live Site URL: [ live site](https://abenezer-lab-code.github.io/browser-extension-manager/)

## My process

### Built with

- Semantic HTML5 markup for accessibility and readibility
- CSS custom properties
- Flexbox
- 

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

in this project i learn how to work with data dynamicly, and i also learn how to update theme color based on window backgroud color.
- my favorite code 
```html
<html data-theme="light"></html>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
- from js i like this code to detect user background
```js
window.addEventListener("DOMContentLoaded",()=>{

const localStorageTheme = localStorage.getItem("theme")
const currentTheme = calculateSettingAsThemeSting(localStorageTheme,systemSettingDark)

const newCta = currentTheme==="dark"?"change to light theme":"change to dark theme";
themeSwithcerBtn.setAttribute("aria-label",newCta)
document.querySelector("html").setAttribute("data-theme",currentTheme)
themeImage.src= currentTheme === "dark"?"assets/images/icon-sun.svg":"assets/images/icon-moon.svg"

})

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**
### AI Collaboration

-I used chatgpt to help debug an issue with my theme switcher.

**Note: Delete this note and the content above if you didn't use AI, or replace with your own experience.**

## Author

- Website - [Abenezer Adisu](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/@abenezerforcode)

