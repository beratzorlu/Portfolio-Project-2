# Senatus – Portfolio Project 2

![Website mockup covering a range of devices]()

## [Link to live web application]()

---

## Project Documentation
### Welcome to [Senatus: The Interactive Quiz Game]()

Senatus is a web development project created as the second portfolio project as a part of Code Institute’s full-stack web development course curriculum. It utilises HTML5, CSS3 and JavaScript ES6 to provide an interactive and responsive front-end quiz game application to the user.

The present documentation will provide information critical to understanding the core design principles that enabled the development of the project. More specifically, details regarding the UX/UI development, application testing and deployment, code structure and maintainability, bug fixes and the planned future features for the project.

To provide conceptual context, Senatus is a history quiz game where the user is presented with questions about ancient Rome. The language used in the UI/UX design carries a narrative where players are referred to as senators, and the Roman Senate is testing their knowledge about the society they represent to gauge their intellectual capacity as roman statesmen.

While there will be more deliberation on the project design and development processes below, the principles of CARE had a significant impact on the creation of this project. Cohesion, accessibility, responsivity and essentiality were key areas that directly impacted the end product.

---

## Table of Contents

-   [User Experience (UX)](#user-experience-ux)
    -   [User Stories](#user-stories)

-   [Design Process](#design-process)
    -   [User Experience Design (UXD)](#user-experience-design-uxd)
    -   [Wireframes](#wireframes)
    -   [Colour Palette](#colour-palette)
    -   [Typography](#typography)
    -   [Images](#images)

-   [Website Features](#website-features)
    -   [Shared Elements](#shared-elements)
    -   [Home](#home)
    -   [404 Page](#404-page)

-   [Future Features](#future-features) 

-   [Testing](#testing)
    -   [User Stories Testing](#user-stories-testing) 
    -   [Browser Testing](#browser-testing)
    -   [Device Testing](#device-testing)

-   [Validation](#validation)
    -   [HTML](#html)
    -   [CSS](#css)
    -   [Lighthouse](#lighthouse)
    -   [Accessibility](#accessibility)
    -   [Mobile Compatibility](#mobile-compatibility)

-   [Bug Fixes](#bug-fixes)

-   [Deployment](#deployment)

-   [Technologies Used](#technologies-used)
    -   [Hardware](#hardware)
    -   [Software](#software)
    -   [Platforms](#platforms)

-   [Credits and References](#credits-and-references)

-   [Closing Remarks](#closing-remarks)

---

## User Experience (UX)

This project aims to achieve the fundamental purpose providing a robust quiz game experience to players.


### User Stories

- User Stories
    As a user, I want to be able to see the name of the quiz application in the centre of the screen
    As a user, I want to be able to have agency over toggling the music on or off.
    As a user, I want to be able to see game instructions before starting the game.
    As a user, I want to be able to track my score performance while playing the game.
    As a user, I want to be able to track which question out of the total number of questions I am on.
    As a user, I want to be able to track how much time I have left to complete all questions.
    As a user, I want to be able to navigate the game with clearly labelled button.
    As a user, I want to be able to save my final score under my username.
    As a user, I want to be able to display my saved final score on a leaderboard on demand..
   
---

## Design Process

### User Experience Design (UXD)

The five pillars of user experience discussed in Code Institute's curriculum influenced the overall user experience design process. These are namely strategy, scope, structure, skeleton and surface.

- ### Strategy 

    Previous experience in playing history quiz games helped find the appropriate sources for inspiration. Regardless, research in identifying appropriate quiz game examples was essential in understanding the best approach towards developing the project. This process enabled the discovery of three interactive quiz game applications that fit the scope of this project. These were [Brittanica's The Roman Empire Quiz](https://www.britannica.com/quiz/the-roman-empire), [History Extra's Ancient Rome Quiz](https://www.historyextra.com/period/roman/ancient-rome-quiz/) and [Khan Academy's Ancient Rome Quiz](https://www.khanacademy.org/humanities/ancient-art-civilizations/roman/rome-quiz/e/ancient-rome). While these three examples did not have a direct influence on the specific choice of elements and logic, they informed the project of the overall functionality that an interactive quiz game web application would need to demonstrate.

- ### Scope

    There was a direct relationship between user stories and feature design across the length of the development process of this project. The core objective was to provide a source of entertainment to potential users. It was important to research the industry to find relevant web development projects to understand how to achieve this. Ultimately, the research process helped identify typical features of web quiz games.

- ### Structure

    The structural design of this web development project mainly followed the design conventions identified during the research process. Nonetheless, the key structural aspect of this project overall was to provide an interactive experience to a user that responds to their input and provides feedback. Features such as hover effects on buttons, red and green light-up to indicate correctness, and unique button styling to highlight different sections of the web application are some examples that illustrate appropriate user interactivity in the context of this project.

- ### Skeleton

    An emphasis on minimalistic and straightforward design choices that emphasize a fair implementation of form and function constitutes the design approach in this area. The web application will be presents users with concise information supported by button prompts that direct them to the relevant aspects of the quiz game. Users will also find interactive and visual elements that help establish the light story narrative present in the application. This approach to design enables users to acquire and process consequential information key to successfully playing the game. It was important to avoid taking it for granted that users were aware of how to navigate an online quiz game for accessibility. The project also aims to provide education to users where quotes of historical information displayed on certain pages of this project represent this motivation.

- ### Surface

    On the surface level, accompanying the design approaches detailed in the skeleton section, users will find the elements of the application centred in the middle of the viewport. This emphasises the application itself and enables users to engage with the content immediately without having to navigate much. Further, there are design elements present in the application that complement the overall thematic structure of the project. For instance, users will find Latin-inspired font styles and a background picture of a Roman museum that provides a sense of space to the user during gameplay.

---

## Wireframes

Wireframes were designed using software named Balsamiq.

### Home Page

- Desktop 
    - ![wireframe-home-desktop]()
- Tablet
    - ![wireframe-home-tablet]()
- Phone
    - ![wireframe-home-phone]()

### Gallery Page

- Desktop 
    - ![wireframe-gallery-desktop]()
- Tablet
    - ![wireframe-gallery-tablet]()
- Phone
    - ![wireframe-gallery-phone]()

### About Page

- Desktop 
    - ![wireframe-about-desktop]()
- Tablet
    - ![wireframe-about-tablet]()
- Phone
    - ![wireframe-about-phone]()

### Order Page

- Desktop 
    - ![wireframe-order-desktop]()
- Tablet
    - ![wireframe-order-tablet]()
- Phone
    - ![wireframe-order-phone]()

---

---

### Colour Palette


[Coolors](https://coolors.co/) was a highly beneficial resource in this regard which provided significant help in identifying
matching colours that also have appropriate contrast.

![Colour Palette]()

---

### Typography

[Code Institute](https://codeinstitute.net/ie/)'s recommended approach to choosing fonts on [Google Fonts](https://fonts.google.com/about) was sufficient in finding satisfactory font families. Below is the list of fonts used to stylize the text content of the project;




---

### Images



---

## Website Features

The design considerations that impacted the envisioned features were mainly structured around conventional website design. While there were more features planned in the initial stages of the project, some were not entertained to the benefit of serving the needs referenced in the [User Stories](#user-stories) section. Thus, it was important to focus on a minimum viable project rather than prioritizing the implementation of further features for the sake of it. This would only bloat the website without adding much value to the user experience overall.

### Shared Elements

The below elements are available to be experienced by the user across the website as a whole.

- #### Navigation

![navigation bar]()


- #### Hero Image



- #### Footer

![footer]())

- #### Favicon

![favicon]()

Designing a favicon for the website was a process that required a series of trials and errors to find the design that fit the project most appropriately. Providing image sizes that also fit different browsers and devices is an important concern in this area. 

[Canva](https://www.canva.com/) was the service that allowed the design and creation of this element.

### Home

![home]()


### About

![about]()
 

### 404 Page

![404]()

---

## Future Features


---

## Testing 

- ### User Stories Testing 


- ### Browser Testing

- ### Device Testing


## Validation

### HTML


### CSS


### Lighthouse



### Accessibility


### Mobile Compatibility

---    

## Bug Fixes


---

## Deployment

---

## Technologies Used

### Hardware

- Monster Abra A5 V13.4 15.6" Laptop
- Samsung VA 1920x1080 144Hz Curved Gaming Monitor
- iPhone 7 Plus
- Samsung Galaxy A51

### Software

- Mozilla Firefox: Main browser used for development, testing and device simulation.
- Google Chrome: Secondary browser for testing and device simulation.
- Microsoft Edge: Tertiary browser for testing.
- Firefox Mobile: Mobile testing of the deployed site.
- Chrome Mobile: Mobile testing of the deployed site.
- Safari Mobile: Mobile testing of the deployed site.
- GIMP: Used for converting .jpg and .png files to .webp for site optimization.
- Balsamiq: Used for wireframing.
- Windows Snip & Sketch: Capturing screenshots for readme and archiving identified bugs.
- Microsoft Snipping Tool: Fallback screen capture software when MS Snip & Sketched became unresponsive.

### Platforms

- GitHub: Version control and site deployment.
- GitPod: Integrated Development Environment (IDE) chosen for this project.
- Pexels: Primary source for high-quality royalty-free images.
- Pixabay: Secondary source for high-quality royalty-free images.
- Google Fonts: Finding and exporting third-party fonts for the website.
- CodePen: For quickly testing out ideas before carrying them to 
DevTools.
- Font Awesome: For importing fonts to further decorate text elements.
- Coolors: For creating a matching colour palette that has appropriate contrast.
- Code Beautify: For looking for differences between two pieces of code. This helped me identify my mistakes.

---

## Credits and References


--- 

## Closing Remarks


---
 [Back to Top]()