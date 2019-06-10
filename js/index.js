// Your code goes here

//Declarations
const navContainer = document.querySelector(".main-navigation");

const heroImg = document.querySelector(".intro img");

const bodyContent = document.querySelector("body");

const h2s = document.querySelectorAll("h2");

const toggleDark = document.querySelector("#toggleDark");





// Events
navContainer.addEventListener("mouseover",(event) => {
	event.stopPropagation();
	event.target.style.backgroundColor = "gold";
	setTimeout(() => {
		event.target.style.backgroundColor = "";
	}, 4000);
	
}, false);

heroImg.addEventListener("mouseover", (event) => {
		event.target.style.filter = "blur(8px)";

		setTimeout(() => {
			event.target.style.filter = "";
		}, 400);
}, false);



const blurBackground = () => {
	bodyContent.style.filter = "blur(8px)";
	setTimeout(() => {
		bodyContent.style.filter = "";
	}, 1000);

};

window.addEventListener("resize", blurBackground);

const h2Color = () => {
	h2s.forEach((item) => {
		item.style.color = "lightblue";
		
		setTimeout(() => {
			item.style.color = "";
		}, 1000);
	})

}

window.addEventListener("scroll", h2Color);

toggleDark.addEventListener("click", () => {
	  if (bodyContent.style.backgroundColor === "black" ) {
		  bodyContent.style.backgroundColor = "white";
		  bodyContent.style.color = "black";
	  } else {
		  bodyContent.style.backgroundColor = "black"; 
		  bodyContent.style.color = "white";
	  }
});

toggleDark.addEventListener("dblclick", () => {
		if (bodyContent.style.backgroundColor === "black") {
		  	bodyContent.style.backgroundColor = "white";
		  	bodyContent.style.color = "black";
		} else {
		  	bodyContent.style.backgroundColor = "black";
		  	bodyContent.style.color = "#202020";
		}
	});













