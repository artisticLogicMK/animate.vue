import { __assign } from "tslib";
import ConstructAnimation from './constructAnimation';
import { isValidAttOptions } from '../../utils/runtimeChecks';
import animationIsRunning from '../../utils/animationIsRunning';
export function bounce(element, options) {
    options = __assign({}, options);
    // Validate options object to ensure it contains only allowed properties
    if (!isValidAttOptions(options)) {
        console.error('Options object should only include: duration(number), delay(number), loop(boolean)');
        return;
    }
    // Prevent starting a new animation if the current element is already animating
    if (animationIsRunning(element))
        return; // exit
    return new ConstructAnimation(element, {
        keyframes: [
            { y: 0, scaleY: 1, duration: 0.1, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
            { y: -30, scaleY: 1.1, duration: 0.2, ease: "cubic-bezier(0.755, 0.05, 0.855, 0.06)" },
            { y: -15, scaleY: 1.05, duration: 0.2, ease: "cubic-bezier(0.755, 0.05, 0.855, 0.06)" },
            { y: 0, scaleY: 0.95, duration: 0.1, ease: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
            { y: -4, scaleY: 1.02, duration: 0.1 }
        ],
        repeat: options.loop ? -1 : 0,
        repeatDelay: options.delay ? options.delay : 0.111,
        duration: options.duration ? options.duration : 2,
        yolo: true
    });
}
