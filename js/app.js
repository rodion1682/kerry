(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const input = document.querySelectorAll(".page__input");
    const firstText = document.querySelectorAll(".page__text_first");
    const secondText = document.querySelectorAll(".page__text_second");
    const textWrapper = document.querySelectorAll(".page__top");
    function addNewHeight() {
        for (let index = 0; index < textWrapper.length; index++) {
            const first = firstText[index];
            const second = secondText[index];
            const firstHeight = first.clientHeight;
            const secondHeight = second.clientHeight;
            console.log(firstHeight);
            console.log(secondHeight);
            if (firstHeight > secondHeight) {
                console.log(firstHeight);
                textWrapper[index].style.height = `${firstHeight}px`;
            } else if (secondHeight > firstHeight) textWrapper[index].style.height = `${secondHeight}px`;
        }
    }
    addNewHeight();
    window.addEventListener("resize", (function() {
        addNewHeight();
    }));
    for (let index = 0; index < secondText.length; index++) {
        const secondElement = secondText[index];
        secondElement.classList.add("_hidden");
    }
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        element.oninput = function() {
            const minNumber = Number(element.value);
            addNewHeight();
            if (75 === minNumber || minNumber > 75) {
                firstText[index].classList.add("_hidden");
                secondText[index].classList.remove("_hidden");
            } else {
                secondText[index].classList.add("_hidden");
                firstText[index].classList.remove("_hidden");
            }
        };
    }
    window["FLS"] = true;
    isWebp();
})();