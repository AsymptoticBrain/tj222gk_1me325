Main = {
    init: function() {
        var result = document.getElementById("result");

        var p = new Point(10, 10);
        var r = new Rectangle(50, 50, 100, 200);

        console.log(p);
        console.log(r);
        console.log(r.toString());

            r.testy.call();
            r.reset();

        console.log(p.toString());
        result.innerHTML = (p.toString() + "<br/>");
        console.log(r.toString());
        result.innerHTML += (r.toString());
    }
}

window.addEventListener("load", Main.init);