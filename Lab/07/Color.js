var Color = (function() {
    function randomHexColor() {
        return "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    }

    function init(event) {
        document.body.style.backgroundColor = randomHexColor();
    }

    window.onload = init;
})();