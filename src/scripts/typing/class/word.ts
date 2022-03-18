const wrapper = document.querySelector(".type-text");

export class Word {
    el: HTMLSpanElement;
    val: string;

    constructor(val: string) {
        let el = document.createElement("span");
        
        el.classList.add("word");

        for (const c of val) {
            const char = document.createElement("span");
            
            char.classList.add("char");
            char.textContent = c;

            el.appendChild(char);
        }

        this.el = el;
        this.val = val;

        wrapper.append(this.el, document.createTextNode(" "));
    }

    highlight() {

    }

    /**
     * Returns true if in the word, false if not
     * @param n The index (0 = start of word)
     */
    inWord(n: number) {
        return n < this.val.length;
    }
}