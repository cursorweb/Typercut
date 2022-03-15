import { getCaretCoords } from "./lib/cursor-pos";
import { fadeIn, fadeOut } from "./lib/fade-in";

const textarea: HTMLTextAreaElement = document.querySelector(".text");
const cursor: HTMLDivElement = document.querySelector(".cursor");

const typing: HTMLDivElement = document.querySelector(".typing");
const text: HTMLDivElement = document.querySelector(".type-text");

const blur: HTMLDivElement = document.querySelector(".blur-div");


textarea.addEventListener("input", () => {
    text.innerText = textarea.value;

    const coords = getCaretCoords(textarea, textarea.selectionEnd);

    cursor.style.top = `${coords.top}px`;
    cursor.style.left = `${coords.left}px`;
});

textarea.addEventListener("blur", () => {
    fadeIn(blur, 20);
});

window.addEventListener("resize", () => {
    const coords = getCaretCoords(textarea, textarea.selectionEnd);

    cursor.style.top = `${coords.top}px`;
    cursor.style.left = `${coords.left}px`;
});

typing.addEventListener("click", () => {
    fadeOut(blur, 20);
    textarea.focus();
});
