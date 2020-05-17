export async function login({ username, password }) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === "aoyang" && password === "aoyang") {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
}
