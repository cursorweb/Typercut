import { getCaretCoords } from "./lib/cursor-pos";
import { FreeType } from "./modes/freetype";
import { WordsType } from "./modes/words";
import { Char } from "./typing/char";
import { filterText } from "./typing/input";

const textarea: HTMLTextAreaElement = document.querySelector(".textarea");
const cursor: HTMLDivElement = document.querySelector(".cursor");

const typingCont: HTMLDivElement = document.querySelector(".typing-cont");

const blur: HTMLDivElement = document.querySelector(".blur-div");


const chars: Char[] = "type this text super fast or else you suck at typing ".split("").map((c) => new Char(c));


textarea.value = "";
const text = new WordsType(chars, textarea);


filterText(textarea);

textarea.addEventListener("input", () => {
    text.handler();

    const coords = getCaretCoords(textarea, textarea.selectionEnd);

    cursor.style.top = `${coords.top}px`;
    cursor.style.left = `${coords.left}px`;
});

textarea.addEventListener("blur", () => {
    blur.classList.add("fade-in");
    blur.classList.remove("fade-out");
    blur.style.display = "block";
});

window.addEventListener("resize", () => {
    const coords = getCaretCoords(textarea, textarea.selectionEnd);

    cursor.style.top = `${coords.top}px`;
    cursor.style.left = `${coords.left}px`;
});

typingCont.addEventListener("click", () => {
    blur.classList.remove("fade-in");
    blur.classList.add("fade-out");

    textarea.focus();
});

blur.addEventListener("animationend", () => {
    if (blur.classList.contains("fade-out")) blur.style.display = "none";
});
