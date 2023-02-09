<script>
	import logo from '$lib/assets/algomancyLogo.png';
</script>

<header>
	<h4>Days until Kickstarter Launch: ##</h4>
</header>
<nav>
	<div class="flexContainer">
		<a href="/blog">BLOG</a>
		<img src={logo} alt="Algomancy Logo" />
		<a href="/cardsearch">CARD SEARCH</a>
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
	a {
		text-decoration: none;
		color: var(--logo-lightGray);
		font-size: 24px;
		padding: 20px 10px;
	}
	a:hover {
		color: var(--logo-tan);
		cursor: pointer;
	}
	img {
		width: 125px;
		height: 125px;
		border-radius: 2px;
	}
	.flexContainer {
		margin: 0 10px;
		width: 100%;
		background-color: var(--logo-black);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
