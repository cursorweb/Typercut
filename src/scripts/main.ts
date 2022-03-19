import { getCaretCoords } from "./lib/cursor-pos";
import { Char } from "./typing/char";
import { filterText, compare } from "./typing/input";

const textarea: HTMLTextAreaElement = document.querySelector(".text");
const cursor: HTMLDivElement = document.querySelector(".cursor");

const typing: HTMLDivElement = document.querySelector(".typing");
// const text: HTMLDivElement = document.querySelector(".type-text");

const blur: HTMLDivElement = document.querySelector(".blur-div");


const chars: Char[] = [];


textarea.value = "";


filterText(textarea, /* () => {
    chars.push(new Char(textarea.value[textarea.value.length - 1]));
}, () => {
    chars[chars.length - 1].remove();
    chars.splice(-1, 1);
    console.log(chars, chars.length);
}, () => {
    const coords = getCaretCoords(textarea, textarea.selectionEnd);

    cursor.style.top = `${coords.top}px`;
    cursor.style.left = `${coords.left}px`;
} */);

textarea.addEventListener("input", () => {
    const val = textarea.value;

    let diff = compare(val);

    if (diff > 0) {
        chars.push(new Char(val[val.length - 1]));
    } else if (diff < 0) {
        const clength = chars.length;
        for (let i = clength - 1; i >= clength + diff; i--) {
            chars[i].remove();
            chars.splice(i, 1);
        }
    }

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
