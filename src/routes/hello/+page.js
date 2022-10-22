/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	await fetch('/api/random-number');
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}