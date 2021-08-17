const { HeaderBarData, NavLink } = require("./models");
const { HeaderBarComponent } = require("../components/header-bar");

function loadHeaderBar() {
    let navLinks = [
        new NavLink("Home", "#"),
        new NavLink("About", "#"),
        new NavLink("Contact", "#"),
        new NavLink("Blog", "#"),
        new NavLink("Careers", "#")
    ];

    let headerBarData = new HeaderBarData(navLinks);

    return new HeaderBarComponent(document.getElementById("headerBar"), headerBarData);
}

loadHeaderBar();