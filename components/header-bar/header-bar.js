const Mustache = require('mustache');

const template = `
<section class="header-bar">
	<div class="header-bar-logo">
		<img src="assets/svg/header-logo.svg" alt="Easy Bank">
	</div>
	<div class="header-bar-navbar">
		<nav class="navbar">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarGuid" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div id="{{navbarGuid}}" class="collapse navbar-collapse">
					<ul class="navbar-nav">
						{{#navItems}}
						<li class="nav-item">
							<a href="{{navItemUrl}}" class="nav-link {{activeClassName}}">{{navItemLabel}}</a>
						</li>
						{{/navItems}}
					</ul>
				</div>
			</div>
		</nav>
	</div>
	<div class="header-bar-button">
		<button>Request Invite</button>
	</div>
</section>
`;

class HeaderBarComponent {
	constructor(parent, data) {
		this.parent = parent;
		this.data = data;
	}

	render() {
		this.parent.innerHTML = Mustache.render(template, this.data);
	}
}

exports.HeaderBarComponent = HeaderBarComponent;