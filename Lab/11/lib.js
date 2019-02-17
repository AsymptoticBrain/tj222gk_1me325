if (window.se == undefined) window.se = {};
if (window.se.lnu == undefined) window.se.lnu = {};
if (window.se.lnu.datalogi == undefined) window.se.lnu.datalogi = {};

se.lnu.datalogi.Main = {
    department: "Computer Science",
    building: "B",
    city: "Växjö",

    introduce: function() {
        var d = se.lnu.datalogi.Main.department;
        var b = se.lnu.datalogi.Main.building;
        var c = se.lnu.datalogi.Main.city;
        console.log(d + ": Building "+ b + ", "+c);
    }
};