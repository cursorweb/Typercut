import { getCaretCoords } from "./lib/cursor-pos";

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
    blur.classList.add("fade-in");
    blur.classList.remove("fade-out");
    blur.style.display = "block";
});

window.addEventListener("resize", () => {
    const coords = getCaretCoords(textarea, textarea.selectionEnd);

    cursor.style.top = `${coords.top}px`;
    cursor.style.left = `${coords.left}px`;
});

typing.addEventListener("click", () => {
    blur.classList.remove("fade-in");
    blur.classList.add("fade-out");

    textarea.focus();
});

blur.addEventListener("animationend", () => {
    if (blur.classList.contains("fade-out")) blur.style.display = "none";
});
