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