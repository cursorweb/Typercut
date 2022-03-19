// useful functions for handling textarea input
let prev = "";

/**
 * Positive = +1 char
 * Negative = deleted
 * Zero = nothing
 * @param text The new text
 * @returns Difference
 */
export function compare(text: string) {
    const l = prev.length;
    prev = text;
    return text.length - l;
}

export function filterText(el: HTMLTextAreaElement) {
    el.addEventListener("keydown", e => {
        if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(e.code)) {
            e.preventDefault();
        }
    });
}