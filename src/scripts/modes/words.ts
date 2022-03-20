import { Char } from "../typing/char";
import { TypeMode } from "./base";

export class WordsType extends TypeMode {
    time: number;
    words: number;
    i = 0;

    constructor(chars: Char[], textarea: HTMLTextAreaElement, time = 60, words = 0) {
        super(chars, textarea);

        this.time = time;
        this.words = words;
        this.textarea.maxLength = chars.length;
    }

    protected append(c: string) {
        this.chars[this.i]?.check(c);
        if (this.i < this.chars.length) this.i++;
    }

    protected delete(diff: number) {
        console.log(diff);
        const clength = this.i;
        const start = clength - 1;
        const end = clength + diff;
        
        for (let i = start; i >= end; i--) {
            this.chars[i].backspace();
        }

        this.i += diff;
    }
}
