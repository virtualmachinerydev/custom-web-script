# Installation Tutorial
## Wait, what are we installing, exactly?
Great question! A web script that enables skipping to the next question in the Upwego interface by pressing Enter. It's dead simple and I made it myself! It doesn't need a lot of processing power and utilises safe and freely available browser extensions.
## What browsers/platforms are supported?
Many different ones, including Chrome, Safari, Firefox, Yandex and any operating system you can get one of those running on! I'll focus on Safari and Chrome here, but the installation process should be similar in other browsers.
## Is there something else I need to know?
I'm not affiliated with anyone from the platform or Upwego's team, and any issues you encounter while using the script are your problem and your liability only:( I provide the script as-is, but if you need any help with anything, don't hesitate to reach out on Telegram!
# OK, what do I have to do?
## If you're using Chrome:
1. **Install the Tampermonkey extension at https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo** <img width="1273" height="492" alt="Screenshot 2025-09-21 at 5 06 27 PM" src="https://github.com/user-attachments/assets/67812c98-4e2e-4af4-b470-e5c8ad56637b" />
2. **Enable the "Allow User Scripts" setting in the extension preferences**
![ezgif-6cd3aa32f9bdec](https://github.com/user-attachments/assets/b6f26960-df47-4015-9830-ea82544d766d)

3. **Open Tampermonkey and paste the code of the script**:

#### 3.1. Copy the script:

```	
 // ==UserScript==
// @name         UserScript Next Keypress
// @namespace    https://charliethenerd.neocities.com
// @version      0.1
// @description  Press "Next" button on Enter keypress
// @author       charlie
// @match        https://botat.upwego.ru/student/lessons/*
// @icon         none
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    window.doTheThing = () => {
        if (document.getElementsByClassName("b-btn animate b-report__next submit with-next")[0] != undefined) {
            document.getElementsByClassName("b-btn animate b-report__next submit with-next")[0].click();
        }
    }

    document.querySelector('body').addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            window.doTheThing();
        }
    });
})();
```
#### 3.2. Click on the extension and press "Create a new script..."
#### 3.3. Paste the script instead of the placeholder script:
![installing script](https://github.com/user-attachments/assets/08708417-534d-4f0e-87f7-00c11b0733f1)
#### 3.4 Save the script by clicking File>Save:
![saving script](https://github.com/user-attachments/assets/ed578168-7c17-4ef7-9e68-3194aac190bf)
#### That's it! You can now click Enter on your keyboard to move to the next question in multiple choice/gapped tasks.
