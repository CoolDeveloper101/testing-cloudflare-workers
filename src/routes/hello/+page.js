/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	await fetch('https://google.com');
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}