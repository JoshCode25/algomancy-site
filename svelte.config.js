import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({ postcss: true }),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		paths: {
			base: dev ? '' : '/algomancy-site',
		},
	},
};

export default config;
