// credit: https://stackoverflow.com/a/52967243

/**
 * Fadein Effect
 * @param element Element
 * @param duration Duration in milliseconds
 */
export function fadeIn(element: HTMLDivElement, duration: number) {
    (function increment(value = 0) {
        element.style.display = "block";
        element.style.opacity = String(value);
        if (element.style.opacity != "1") {
            setTimeout(() => {
                increment(value + 0.1);
            }, duration / 10);
        }
    })();
};

/**
 * Fadeout Effect
 * @param element Element
 * @param duration Duration in milliseconds
 */
export function fadeOut(element: HTMLDivElement, duration: number) {
    (function decrement() {
        if (!element.style.opacity) element.style.opacity = "1";
        ((element.style.opacity as unknown as number) -= 0.1) < 0 ? element.style.display = "none" : setTimeout(() => {
            decrement();
        }, duration / 10);
    })();
};