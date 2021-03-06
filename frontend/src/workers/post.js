export default async function post(url, data)
{
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		}
	});

	var body = null;

	try {
		body = await response.json();
	} finally {
		return {
			status: response.status,
			body: body,
		};
	}
}
