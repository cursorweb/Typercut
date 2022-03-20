import { Char } from "../typing/char";
import { compare } from "../typing/input";

export function freetype(chars: Char[], textarea: HTMLTextAreaElement) {
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
}