import { Char } from "../typing/char";
import { compare } from "../typing/input";

export class TypeMode {
    protected chars: Char[];
    protected textarea: HTMLTextAreaElement;

    constructor(chars: Char[], textarea: HTMLTextAreaElement) {
        this.chars = chars;
        this.textarea = textarea;
    }

    handler() {
        const val = this.textarea.value;

        let diff = compare(val);

        if (diff > 0) {
            this.append(val.slice(-diff));
        } else {
            this.delete(diff);
        }
    }

    protected append(_: string) {

    }

    protected delete(_: number) {

    }
}