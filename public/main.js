

if(document.querySelector("#login")){
	document.querySelector("#login").addEventListener("click", (e) => {
		e.preventDefault();
		window.location = "/login"
	})
}


if(document.querySelector("#register")) {
	document.querySelector("#register").addEventListener("click", (e) => {
		e.preventDefault();
		window.location = "/register"
	})
}




if (document.querySelector("#errRedirect")) {
	document.querySelector("#errRedirect").addEventListener("click", (e)=>{
		e.preventDefault();
		window.location = "/login"
	})	
}



$("#mapButton").on("click", function(e) {
	$("#chartArea").hide();
	$("#mapArea").show();
});

$("#chartButton").on("click", function(e) {
	$("#mapArea").hide();
	$("#chartArea").show();
});

