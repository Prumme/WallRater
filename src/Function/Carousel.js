import { MouseEvent, MouseEventHandler } from 'react';
function Carousel() {

    window.addEventListener("mousedown", (event) => {
        event.preventDefault();
        const elem = document.getElementById("page");
        if (!elem) return;
        elem.style.transition = "all 0.2s";
        elem.style.transform = `scale(0.9)`;
    }, [])

    window.addEventListener("mouseup", (event) => {
        const elem = document.getElementById("page");
        if (!elem) return;
        elem.style.transition = "all 0.2s";
        elem.style.transform = `scale(1)`;
    }, [])

}

export default Carousel;