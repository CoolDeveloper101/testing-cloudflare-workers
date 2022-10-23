/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	await fetch('/api/random-number');
	return {
		post: {
			title: `Title`,
			content: `Content for hello goes here`
		}
	};
}