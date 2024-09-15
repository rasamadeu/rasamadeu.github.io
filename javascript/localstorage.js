// Check if localstorage is available
function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "test";
		storage.setItem(x, x);
		storage.removeItem(x, x);
		return true;
	}
	catch (e) {
		return e instanceof DOMexception &&
			e.name === "QuotaExceededError";
	}
}

// Sets localStorage if not defined already
if (storageAvailable("localStorage")) {
	localStorage.setItem("mode", "os");
	document.querySelector("html").className = "os";
}
else {
	const mode = localStorage.getItem("mode");
	document.querySelector("html").className = mode;
}
