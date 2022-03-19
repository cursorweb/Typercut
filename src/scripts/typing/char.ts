const cont: HTMLDivElement = document.querySelector(".type-text");

export class Char {
    char: string;
    el: HTMLSpanElement;

    constructor(char: string) {
        const el = document.createElement("span");
        el.classList.add("char");
        el.textContent = char;
        
        cont.appendChild(el);

        this.el = el;
        this.char = char;
    }

    remove() {
        this.el.remove();
        this.el = null;
    }
}