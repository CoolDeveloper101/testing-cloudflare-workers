/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		await fetch('/api/random-number');
	}
	catch(err) {
		return { err };
	}
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}