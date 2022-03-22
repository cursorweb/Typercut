import { Char } from "../typing/char";
import { TypeMode } from "./base";


export interface WordsOption {
    time?: number,
    words?: number
}

export class WordsType extends TypeMode {
    time: number;
    words: number;
    infinite = false;
    i = 0;

    constructor(chars: Char[], textarea: HTMLTextAreaElement, {
        time = 60,
        words = 0
    }: WordsOption = {}) {
        super(chars, textarea);

        this.time = time;
        this.words = words;

        if (this.words == 0) this.infinite = true;

        if (!this.infinite) this.textarea.maxLength = chars.length;
    }

    protected append(c: string) {
        this.chars[this.i]?.check(c);
        this.chars.push(..."word ".split("").map(c => new Char(c)));
        if (!this.infinite || this.i < this.chars.length) this.i++;
    }

    protected delete(diff: number) {
        const clength = this.i;
        const start = clength - 1;
        const end = clength + diff;
        
        for (let i = start; i >= end; i--) {
            this.chars[i].backspace();
        }

        this.i += diff;
    }
}
