class HeaderBarData {
    constructor(navLinks) {
        this.navbarId = Date.now();
        this.navItems = navLinks;
    }
}

class NavLink {
    constructor(label, url, isActive) {
        this.label = label;
        this.url = url;
        this.activeClassName = isActive ? "active" : "";
    }
}

exports.HeaderBarData = HeaderBarData;
exports.NavLink = NavLink;