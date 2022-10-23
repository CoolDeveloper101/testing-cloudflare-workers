/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let a = await (await fetch('/api/random-number')).text();
	await fetch("https://httpbin.org")
	return {
		post: {
			title: `Title ${a}`,
			content: `Content for hello goes here`
		}
	};
}