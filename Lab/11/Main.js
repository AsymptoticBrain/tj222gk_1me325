if (window.se == undefined) window.se = {};
if (window.se.lnu == undefined) window.se.lnu = {};
if (window.se.lnu.medieteknik == undefined) window.se.lnu.medieteknik = {};

se.lnu.medieteknik.Main = {
    department: "Media Technology",
    building: "D",
    city: "Växjö",

    introduce: function() {
        var d = se.lnu.medieteknik.Main.department;
        var b = se.lnu.medieteknik.Main.building;
        var c = se.lnu.medieteknik.Main.city;
        console.log(d + ": Building "+ b + ", "+c);
    }
};