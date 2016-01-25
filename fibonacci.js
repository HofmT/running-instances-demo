var fibonacci = function(counter) {


	if(counter == 1 || counter == 2) {
		return 1;
	}
	else {
		return (fibonacci(counter - 1) + fibonacci(counter - 2));
	}
}

module.exports = fibonacci;