# Senatus – Portfolio Project 2

![Website mockup covering a range of devices](assets/images/responsive.png)

## [Link to live web application](https://beratzorlu.github.io/Portfolio-Project-2/)

---

## Project Documentation
### Welcome to [Senatus: The Interactive Ancient Roman Quiz Game](https://beratzorlu.github.io/Portfolio-Project-2/)

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
   - As a user, I want to be able to see the name of the quiz application in the centre of the screen
   - As a user, I want to be able to have agency over toggling the music on or off.
   - As a user, I want to be able to see game instructions before starting the game.
   - As a user, I want to be able to track my score performance while playing the game.
   - As a user, I want to be able to track which question out of the total number of questions I am on.
   - As a user, I want to be able to track how much time I have left to complete all questions.
   - As a user, I want to be able to navigate the game with clearly labelled buttons.
   - As a user, I want to be able to save my final score under my username.
   - As a user, I want to be able to display my saved final score on a leaderboard on demand.
   
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
    - ![wireframe-welcome-desktop](assets/images/welcome-desktop.png)
- Tablet
    - ![wireframe-welcome-tablet](assets/images/welcome-tablet.png)
- Phone
    - ![wireframe-welcome-phone](assets/images/welcome-mobile.png)

### Instructions Page

- Desktop 
    - ![wireframe-instructions-desktop](assets/images/instructions-desktop.png)
- Tablet
    - ![wireframe-instructions-tablet](assets/images/instructions-tablet.png)
- Phone
    - ![wireframe-instructions-phone](assets/images/instructions-mobile.png)

### Quiz Game Page

- Desktop 
    - ![wireframe-game-desktop](assets/images/game-desktop.png)
- Tablet
    - ![wireframe-game-tablet](assets/images/game-tablet.png)
- Phone
    - ![wireframe-game-phone](assets/images/game-mobile.png)

### Result Page

- Desktop 
    - ![wireframe-result-desktop](assets/images/result-desktop.png)
- Tablet
    - ![wireframe-result-tablet](assets/images/result-tablet.png)
- Phone
    - ![wireframe-result-phone](assets/images/result-mobile.png)

### Leaderboard Page

- Desktop 
    - ![wireframe-leaderboard-desktop](assets/images/leaderboard-desktop.png)
- Tablet
    - ![wireframe-leaderboard-tablet](assets/images/leaderboard-tablet.png)
- Phone
    - ![wireframe-leaderboard-phone](assets/images/leaderboard-mobile.png)

---

### Colour Palette


[Coolors](https://coolors.co/) was an essential resource in identifying matching colours that have appropriate contrast. More importantly, this colour combination consists of items that were historically utilized by the ancient Roman empire. For instance, purple was used to represent nobility and gold and carmine represented courage and wealth.

![Colour Palette](assets/images/senatus-colour-palette.png)

---

### Typography

[Code Institute](https://codeinstitute.net/ie/)'s recommended approach to choosing fonts on [Google Fonts](https://fonts.google.com/about) was helpful in finding appropriate font families. Below is the list of fonts used to stylize the text in keeping with the overall theme of ancient Rome;

- Headings: Gideon Roman (Regular 400)
    ![Gideon Roman](assets/images/gideon-roman.png) 
- Text: Luxurious Roman (Regular 400) 
    ![Luxurious Roman](assets/images/luxurious-roman.png)

---

### Images

Imagery present in this project has a close connection to an ancient Roman aesthetic. While the total amount of images is limited, the user is consistently presented with a background image that provides a sense of space. This establishes a medium appropriate to the theme of the project for the application to be placed within. Thus, all these aspects combined, imagery plays a subtle but equally critical role for this project in establishing an overall style.

[Pexels](https://www.pexels.com/) and [Pixabay](https://pixabay.com/) were the platforms that this project resourced its image files.

---

## Website Features

The design considerations that impacted the envisioned features were mainly structured around conventional quiz game design. While there were more features planned initially, some did not make it to the final product to better serve the user needs referenced in the [User Stories](#user-stories) section. Thus, prioritizing the minimum viable project rather than focusing on the implementation of further features for the sake of it allowed the timely completion of the core components of the project. Adding unnecessary features would only bloat the website without value to the user experience.

### Shared Elements

The below elements are available to be experienced by the user across the website.

- #### Navigation Buttons

![navigation buttons](assets/images/nav-buttons.png)


- #### Background/Hero Image

![background image](assets/images/bg-image.png)

- #### Border Image

![border image](assets/images/border-image.png)

This feature was custom designed to provide unique styling to the borders of the container elements in the markup 

- #### Favicon

![favicon](assets/images/favicon.png)

Designing a favicon for the website was a process that required a series of trials and errors to find the design that fit the project most appropriately. Providing image sizes that also fit different browsers and devices is an important concern in this area. 

[Canva](https://www.canva.com/) was the service that allowed the design and creation of this element.

- #### Fun Facts

![favicon](assets/images/funfact.png)

Random fun facts about ancient rome displayed in the welcome and leaderboard pages.

### Quiz Page

- Progression 
    - ![Progression](assets/images/progress-bar.png)

- Score
    - ![Score](assets/images/score.png)

- Timer 
    - ![Timer](assets/images/timer.png)

- Questions 
    - ![Questions](assets/images/question.png)

- Choices 
    - ![Choices](assets/images/choices.png)

- Correct 
    - ![Correct](assets/images/correct.png)

- Incorrect 
    - ![Inorrect](assets/images/incorrect.png)


### Instructions Page

![Instructions](assets/images/instructions.png)
 

### Result Page
- Final Score and Alternating Text 
    - Alternating header text depending on user performance.
    - ![Final Score & Text](assets/images/final-score1.png)
    - ![Final Score & Text](assets/images/final-score2.png)

- Score Save and Player ID Registeration
    - ![Final Score & Text](assets/images/player-reg.png)

### Leaderboard Page
- Player ID and Saved Score
    - ![Player ID & Saved Score](assets/images/rankings.png)

---

## Future Features

### Background Music
- Music is one of the initial features that was left out to ensure the completion of the minimum viable product. Adding thematic background music would complement the narrative that the game establishes and help the player feel more immersed in the game's content. However, this feature should be disabled by default and only be enabled if the user chooses to do so for accessibility reasons.

### Score Carryover on Time Out
- Currently, it is not possible to save their score if they run out of time before the completion of the quiz. While this adds meaningful pressure on the player to think about how to strategise their remaining time, it would be more user-friendly to save their score if the timer reaches 0 before the last question. The game still functions as intended without this feature and the user is asked to try again if they run out of time. Allowing them to save the player's progress instead of resetting their score on time out would be a good addition to implement in the future.

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
- User Input Not Registering Correctly Due To Shuffled Choices
    - Fixed by targeting a separate key/value pair in the questions object that has the specific string matching the correct answer. You can view the associated push here: [JavaScript Shuffle Choices Bug Fix](https://github.com/beratzorlu/Portfolio-Project-2/commit/beb36d4d01aca35312b28e269c4ec085470d5160)

- Previous Game Score Displaying After Time Out On A New Game
    - Fixed by resetting the score 0 before taking the player to the result page. You can view the associated push here: [JavaScript Score Time Out Fix](https://github.com/beratzorlu/Portfolio-Project-2/commit/beb36d4d01aca35312b28e269c4ec085470d5160)
---

## Deployment

This project was deployed utilizing GitHub pages using the following procedure;

1. After creating a repository for the project, select the settings tab indicated by a :gear: icon.
2. Navigate to the "Code and Automation" section on the left side of the page and click on the "Pages" link.
3. Having done this, select "Main" and then the "root" folder from the drop-down branch menu.
4. Hit "save" to ensure that your changes are recognised by the service.
5. Finally, if previous steps were followed correctly GitHub will create a page and present a URL to the deployed website.

---

## Technologies Used

### Hardware

- Monster Abra A5 V13.4 15.6" Laptop
- Samsung VA 1920x1080 144Hz Curved Gaming Monitor
- iPhone 7 Plus
- Samsung Galaxy A51

### Software
- HTML5: For markup.
- CSS3: For styling.
- JavaScript ES6: For logic.
- Root Variables: Utilised for quick access to various fonts and colours.
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
- Mozilla Border Image Generator: Utilized to generate unique border image file.


### Platforms

- GitHub: Version control and site deployment.
- GitPod: Integrated Development Environment (IDE) chosen for this project.
- Pexels: Primary source for high-quality royalty-free images.
- Pixabay: Secondary source for high-quality royalty-free images.
- Google Fonts: Finding and exporting third-party fonts for the website.
- CodePen: For quickly testing out ideas before carrying them to DevTools.
- Font Awesome: For importing fonts to further decorate text elements.
- Coolors: For creating a matching colour palette that has appropriate contrast.
- Diff Checker: For looking for differences between two pieces of code. This helped me identify my mistakes.
- CSS Gradient: Used for generating custom CSS gradients for stylizing buttons.
- Rapid Tables: Used for converting Hex values to RGB.

---

## Credits and References

- [Code Institute](https://codeinstitute.net/): I would like to thank Code Institute for their support and guidance throughout the development of this project.
    - The [Love Maths](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/f2db5fd401004fccb43b01a6066a5333/) project was helpful in providing a place to start developig my project.
- [UCD Professional Academy](https://www.ucd.ie/professionalacademy/): I would like to thank UCD PA for their facilitator and masterclass sessions in partnership with Code Insitute. These have been invaluable in better understanding relevant theory and practice elements.
- [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=1574s): Brian Design's quiz game tutorial has helped me establish the fundamental aspects of this project. I used this video to code the quiz game, leaderboard and result page features.
- [Stack Overflow](https://stackoverflow.com/): This project heavily made use of Stack Overflow for troubleshooting problems that occurred throughout the development process. Below is are entries used to supplament this project;
    - [Js quiz answer recognition issue](https://stackoverflow.com/questions/74815696/js-quiz-correct-answer-recognition-issue/74826945#74826945) (My own post: this post is active at the time of writing this documentation.)
    - [Adding text to markup](https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom) (This post is active at the time of writing this documentation.)
    - [Div button resize](https://stackoverflow.com/questions/620476/can-someone-tell-me-why-my-div-buttons-wont-resize) (This post is active at the time of writing this documentation.)
    - [Quiz timer](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz) (This post is active at the time of writing this documentation.) 
    - [Stop timer countdown](https://stackoverflow.com/questions/16869328/stop-countdown-timer-javascript-onclick) (This post is active at the time of writing this documentation.)  
- [W3Schools](https://www.w3schools.com/): W3S was an excellent resource in understanding and practicing CSS and HTML frameworks
before implementing them into my project. The code I implemented from them is as follows;
    - [Blurred Background](https://www.w3schools.com/howto/howto_css_blurred_background.asp)
    - [CSS background-attachment Property](https://www.w3schools.com/cssref/pr_background-attachment.php)
    - [CSS Button Animation](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3)
    - [CSS Font-family Attribute](https://www.w3schools.com/cssref/pr_font_font-family.php)
- [Geeks For Geeks](https://www.geeksforgeeks.org/how-to-align-text-in-html/): A blog post explaining how to align text in HTML. 
- [Simple Steps Code](https://simplestepscode.com/javascript-quiz-tutorial/): A blog post teaching basic JavaScript quiz game structure.
- [WebDevSimplified](https://github.com/WebDevSimplified/JavaScript-Quiz-App/blob/master/script.js): WebDevSimplified's approach to register correct answers helped inform my approach towards implementing this functionality into my project.
- [Kevin Powell](https://www.youtube.com/watch?v=ypstT5UfCsk): Kevin Powell's tutorial on how to implement border images into my website was very valuable in imporving the aesthetic quality of my project.
- Quiz Questions:
    - [Britannica](https://www.britannica.com/quiz/the-roman-empire)
    - [History Extra](https://www.historyextra.com/period/roman/ancient-rome-quiz/)
    - [Khan Academy](https://www.khanacademy.org/humanities/ancient-art-civilizations/roman/rome-quiz/e/ancient-rome)
- Fun Facts:
    - [NatGeo Kids](https://www.natgeokids.com/ie/discover/history/romans/10-facts-about-the-ancient-romans/)
    - [History Colored](https://historycolored.com/articles/6606/11-facts-about-roman-life-you-should-know/)
    - [Eating Europe](https://www.eatingeurope.com/blog/ancient-rome-for-kids/)
- [Sean Young](https://code-institute-room.slack.com/archives/C027C3PLS1W/p1671125815485319?thread_ts=1671062728.032189&cid=C027C3PLS1W): I would like to thank Sean for introducing me to the Fisher-Yates Shuffle.
- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset): Allowed me to understand how to use HTMLElement.dataset while building the answer recognition feature.

--- 

## Closing Remarks


---
 [Back to Top](#senatus-–-portfolio-project-2)