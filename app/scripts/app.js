
window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}

window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	var addr_list = document.getElementById('addr_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse( this.responseText ); 
				addr_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    addr_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "./class-hp.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	var input = document.getElementById('name_input');
	// Get the datalist
	var addr_list = document.getElementById('addr_list');


	// If we find the input inside our list, we submit the form
	for (var element of addr_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}