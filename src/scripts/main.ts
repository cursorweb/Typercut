const input: HTMLTextAreaElement = document.querySelector(".text");
const cursor: HTMLDivElement = document.querySelector(".cursor");


input.addEventListener("input", e => {
    const {
        offsetLeft,
        offsetTop,
        offsetHeight,
        offsetWidth,
        scrollLeft,
        scrollTop,
        selectionEnd
    } = input;

    const { lineHeight, paddingRight } = getComputedStyle(input);

    const { x, y } = getCursorXY(input, selectionEnd);

    const newLeft = Math.min(
        x - scrollLeft,
        offsetLeft + offsetWidth - parseInt(paddingRight.replace(/px/, ""), 10)
    );

    
    const newTop = Math.min(
        y - scrollTop,
        offsetTop + offsetHeight - (parseInt(lineHeight.replace(/px/, ""), 10) || 0)
    );

    console.log(paddingRight.replace(/px/, ""), lineHeight);
    
    cursor.style.top = `${newTop}px`;
    cursor.style.left = `${newLeft}px`;
})


// https://jh3y.medium.com/how-to-where-s-the-caret-getting-the-xy-position-of-the-caret-a24ba372990a
function getCursorXY(input: HTMLInputElement | HTMLTextAreaElement, selectionPoint: number) {
    const {
        offsetLeft: inputX,
        offsetTop: inputY,
    } = input;

    // dummy element
    const div = document.createElement("div");

    const copyStyle = getComputedStyle(input);
    for (const prop in copyStyle) {
        div.style[prop] = copyStyle[prop];
    }

    // char replace whitespace
    const swap = ".";
    const inputValue = input.tagName == "INPUT" ? input.value.replace(/ /g, swap) : input.value;

    const textContent = inputValue.substring(0, selectionPoint);

    div.textContent = textContent;

    if (input.tagName == "TEXTAREA") div.style.height = "auto";
    if (input.tagName == "INPUT") div.style.width = "auto";

    // marker to get curr pos
    const span = document.createElement("span");
    span.textContent = inputValue.substring(selectionPoint) || ".";
    div.appendChild(span);
    document.body.appendChild(div);

    const { offsetLeft: spanX, offsetTop: spanY } = span;

    document.body.removeChild(div);

    return {
        x: inputX + spanX,
        y: inputY + spanY,
    };
}