# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**
Joslin Some
Time spent: **8.5** hours spent in total

Link to project: https://glitch.com/edit/#!/wool-bony-lightning?path=index.html%3A1%3A0 (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:
  
- [x] List anything else that you can get done to improve the app!
  Made a progress bar to illustrate time left to complete guess turn
  Added a ticking clock sound to fill the void
  Added a Label that instructs when the user should guess

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](https://i.imgur.com/2bEwtOV.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[YOUR ANSWER HERE]
Clock sound: https://www.fesliyanstudios.com/royalty-free-sound-effects-download/clock-ticking-46

Learnt how to use audios on 
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
 Learnt how to make progressbar from 
 https://www.youtube.com/watch?v=fY-7IbtIYj4
 https://www.w3schools.com/js/DEFAULT.asp
 
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[YOUR ANSWER HERE]
I encountered many challenges in this project. The hardest thing for me was making the progress bar and getting the animation to work and stop correctly. I started off googling to see if I could find any documentation explaining how to use progress bars. I discovered a YouTube video that helped me a lot with the implementation and animation. But the hardest part was yet to come. It took me a while to understand how to stop the progress bar from animating. At first, I was attempting to do it inside of the timing function, but I later found that it would be easier to stop it whenever the user would guess or pause the game. However, it did not get much easier from there because I had to find out how I could get the timer and progress bar to correspond and end roughly around the same time. I found that starting the animation at the end of the last tone helped a lot with this. My next big challenge was getting the animation to start when the start button would be pressed after having been paused. I was not sure how I could distinguish the initial start signifying the beginning of the game and a start pressed after the game was paused. I decided to switch the green bar from being hidden to visible when the buttons were pressed to remediate this 
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
Before beginning this project, I didn’t know much about web development in html CSS and JavaScript but now I feel as though I have more questions then ever. Firstly, how is it that multiple languages can be used in one same program? Before this all-coding projects I’ve done have been in only one language and it amazes me that 3 different languages would be used in one. Next, I’d like to know if JavaScript Is typically only used for web development. It seems very similar to other object-oriented languages like python so I wonder if it can be used like they are.  The thing I’d most like to know is what to do next from here. How exactly do you go from having a web app written out, to pushing it to a website where other people can visit and use it?
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
If I had more time on this project, I’d start out by adding a timer to my animated progress bar so the user can see how many seconds they have left as well. I spent a large part of this project on the JavaScript portion and I feel like I learnt a lot so if I had more time I would work more on the CSS and styling of the app so I could learn new things and see more of what CSS has to offer. Lastly, I would add extra sounds to the game so it would not seem so quiet. I might have added a background tune and an error sound that plays whenever you click on the wrong option to make things more entertaining.


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.