<script>
	import logo from '$lib/assets/algomancyLogo.png';
	import { base } from '$app/paths';
</script>

<header>
	<h4>Kickstarter Coming In March!</h4>
</header>
<nav>
	<div class="flexContainer">
		<a class="blackBack" href="{base}/blog">BLOG</a>
		<a href="{base}/">
			<img src={logo} alt="Algomancy Logo" />
		</a>
		<a class="blackBack" href="{base}/cardsearch">CARD SEARCH</a>
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
	h4 {
		width: 100%;
		height: 100%;
		padding: 10px;
		background-color: var(--logo-tan);
		margin: 0 10px;
	}
	.flexContainer {
		margin: 0 10px;
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
	}
	.blackBack {
		width: 100%;
		padding: 20px 10px;
		background-color: var(--logo-black);
	}
</style>
