import { getCaretCoords } from "./lib/cursor-pos";

const textarea: HTMLTextAreaElement = document.querySelector(".text");
const cursor: HTMLDivElement = document.querySelector(".cursor");

textarea.addEventListener("input", () => {
    const coords = getCaretCoords(textarea, textarea.selectionEnd, {
        debug: true
    });

    cursor.style.top = `${coords.top}px`;
    cursor.style.left = `${coords.left}px`;
});