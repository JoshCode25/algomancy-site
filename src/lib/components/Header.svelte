<script>
	import logo from '$lib/assets/algomancyLogo.png';
</script>

<header>
	<h4>Days until Kickstarter Launch: ##</h4>
</header>
<nav>
	<img src={logo} alt="Algomancy Logo" />
	<div class="flexContainer">
		<a href="/">HOME</a>
		<a href="blog">BLOG</a>
		<a href="/cardsearch">CARD SEARCH</a>
		<a href="/about">ABOUT</a>
	</div>
</nav>

<style>
	nav,
	header {
		display: flex;
	}
	header {
		justify-content: center;
	}
	nav {
		background-color: var(--logo-black);
		justify-content: space-between;
	}
	a {
		color: var(--logo-lightGray);
		font-size: 24px;
		margin: 10px;
	}
	a:hover {
		color: var(--logo-tan);
		cursor: pointer;
	}
	img {
		width: 100px;
		height: 100px;
	}
	.flexContainer {
		display: flex;
		align-items: center;
	}
</style>
