<script>
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
</script>

<body>
	<Header />
	<slot />
	<Footer />
</body>

<style>
	body {
		max-width: 800px;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>
