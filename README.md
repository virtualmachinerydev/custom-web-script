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
### That's it! Just refresh the Upwego page, and now you can now click Enter on your keyboard to move to the next question in multiple choice/gapped tasks.

## If you're using Safari:
1. **Install Userscripts from the App Store** (https://apps.apple.com/ru/app/userscripts/id1463298887?l=en-GB)
2. **Enable the extension**:
![installing userscript the app](https://github.com/user-attachments/assets/fa748c80-d24e-4fca-b2b9-6c2677d92891)
3. **Open the extension settings and paste the following code into a new script:**
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
![userscriptsafariinstallationfinalgiftrimmed-ezgif com-speed](https://github.com/user-attachments/assets/220a36f4-114c-45d5-8a29-091f1409a20b)
4. That's it! Just refresh the Upwego page, and now you can now click Enter on your keyboard to move to the next question in multiple choice/gapped tasks.

# I don't want to use the script anymore:(
### Sure! If you're using Chrome, you can disable the script either by toggling it in the Tampermonkey dashboard:
![ezgif com-optimize-2](https://github.com/user-attachments/assets/8a7550e0-dd2d-4608-b901-30ecf1b1445e)

### ...or by removing Tampermonkey from Chrome:
![uninstalltampermonkey-ezgif com-optimize](https://github.com/user-attachments/assets/22df5fba-acea-4476-b1ea-7f63db4ec7c2)

### If you're using Safari, either disable the script by going into the Userscripts settings:
![ezgif com-optimize](https://github.com/user-attachments/assets/504f9992-8555-4622-b8fb-e2b79f9a8c0b)
### ...or delete Userscripts.app by putting it in the Trash (how you would uninstall any other app you wanted to uninstall from your Mac)

