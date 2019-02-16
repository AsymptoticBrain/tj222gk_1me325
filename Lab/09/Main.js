Main = {
    init: function() {
        var result = document.getElementById("result");

        var p = new Point(10, 10);
        //var r = new Rectangle(50, 50, 100, 200);
        //    r.reset();

        console.log(p.toString());
        result.innerHTML = (p.toString());
        //r.toString();
    }
}

window.addEventListener("load", Main.init);