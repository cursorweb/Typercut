import { Char } from "../typing/char";
import { TypeMode } from "./base";

export class FreeType extends TypeMode {
    append(val: string) {
        this.chars.push(new Char(val[val.length - 1]));
    }

    delete(diff: number) {
        const clength = this.chars.length;
        const start = clength - 1;
        const end = clength + diff;

        for (let i = start; i >= end; i--) {
            this.chars[i].remove();
            this.chars.splice(i, 1);
        }
    }
}
