// About Page
if (document.querySelector('details')) {
  // Fetch all the details elements
  const details = document.querySelectorAll('details');

  // Add onclick listeners
  details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
          // Close all details that are not targetDetail
          details.forEach((detail) => {
              if (detail !== targetDetail) {
                  detail.removeAttribute("open");
              }
          });
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var detailsElements = document.querySelectorAll('details');

  detailsElements.forEach(function(detailsElement) {
    detailsElement.addEventListener('toggle', function() {
      var summaryElement = detailsElement.querySelector('summary');

      if (detailsElement.open) {
        summaryElement.innerHTML = 'Show Less';
      } else {
        summaryElement.innerHTML = 'More info';
      }
    });
  });
});

// Student Projects
    // Student Projects
const btn1 = document.querySelector(".button-2021");
const btn2 = document.querySelector(".button-2022");
const btn3 = document.querySelector(".button-2023");
btn1.addEventListener("click", year2021);
btn2.addEventListener("click", year2022);
btn3.addEventListener("click", year2023);
function year2021() {
	console.log('show 2021')
	document.getElementById("year2021").style.display = "block";
	document.getElementById("year2022").style.display = "none";
	document.getElementById("year2023").style.display = "none";

	btn1.classList.remove('non-selected-button');
	btn1.classList.add('selected-button');

	btn2.classList.remove('selected-button');
	btn2.classList.add('non-selected-button');
	
	
	btn3.classList.remove('selected-button');
	btn3.classList.add('non-selected-button');
}

function year2022() {
	console.log('show 2022')
	document.getElementById("year2022").style.display = "block";
	document.getElementById("year2023").style.display = "none";
	document.getElementById("year2021").style.display = "none";

	btn1.classList.remove('selected-button');
	btn1.classList.add('non-selected-button');

	btn2.classList.remove('non-selected-button')
	btn2.classList.add('selected-button');
	
	
	btn3.classList.remove('selected-button');
	btn3.classList.add('non-selected-button');
}
function year2023() {
    console.log('Activating show 2023');
    document.getElementById("year2023").style.display = "block";
    document.getElementById("year2022").style.display = "none";
    document.getElementById("year2021").style.display = "none";

    btn1.classList.remove('selected-button');
    btn1.classList.add('non-selected-button');
    
    btn2.classList.remove('selected-button');
    btn2.classList.add('non-selected-button');

    btn3.classList.remove('non-selected-button');
    btn3.classList.add('selected-button');

    // Check if the project info is correctly targeted
    const year2023Divs = document.getElementById("year2023").getElementsByClassName("project-div");
    console.log("Number of project divs in 2023:", year2023Divs.length);

    // Re-apply event listeners to ensure they are attached
    for (let div of year2023Divs) {
        const icon = div.querySelector('.icon');
        if (icon) {
            icon.removeEventListener('mouseover', mouseout_func); // remove first to avoid duplicates
            icon.addEventListener('mouseover', () => {
                div.classList.add('select-color');
            });
            icon.removeEventListener('mouseout', mouseout_func); // remove first to avoid duplicates
            icon.addEventListener('mouseout', mouseout_func);
            console.log('Event listeners re-applied to icon');
        }
    }
}


const showMoreIcon = "https://itp.nyu.edu/covid19impactproject/wp-content/uploads/2023/08/Subtract-3.png";
const showLessIcon = "https://itp.nyu.edu/covid19impactproject/wp-content/uploads/2023/08/Subtract-2.png";

const mouseout_func = (e) => {
	let prj = e.target.parentNode.parentNode.parentNode.parentNode
    console.log(prj);
	prj.classList.remove('select-color')
}

// grab all project divs into a list
const projects = document.querySelectorAll("div.project-div")
console.log(projects);
// parse projects list for icons
// add mouseover and mouseout function to each icon
for (let i = 0; i < projects.length; i++) {
	let prj = projects[i]
	let icon = prj.querySelector('.icon')
	console.log('icon name', icon)
	icon.addEventListener('mouseover', () => {
		prj.classList.add('select-color');
	})
	icon.addEventListener("mouseout", mouseout_func);

}
function genericShowMore() {
    event.stopPropagation(); // Stop the event from bubbling up further
    let myProjDiv = event.currentTarget.closest('.project-div'); // Ensures you're getting the right div regardless of where the event is triggered
    let myMoreInfoDiv = myProjDiv.querySelector('div.more-info');
    let myIcon = event.currentTarget; // Change to currentTarget to ensure you are getting the icon that was clicked

    console.log("Function called: genericShowMore");
    console.log("Project Div:", myProjDiv);
    console.log("More Info Div:", myMoreInfoDiv);
    console.log("Icon Element:", myIcon);

    // Check if the div contains the 'showLess' class
    if (myMoreInfoDiv.classList.contains('showLess')) {
        myMoreInfoDiv.classList.remove("showLess");
        myMoreInfoDiv.classList.add("showMore");
        myIcon.src = showMoreIcon; // Assuming showMoreIcon is defined elsewhere
        myProjDiv.classList.add('select-color');
        myIcon.removeEventListener("mouseout", mouseout_func); // Assuming mouseout_func is defined elsewhere
        myIcon.classList.add('mouseout-disabled');
        console.log("Expanded project");
    } else if (myMoreInfoDiv.classList.contains('showMore')) {
        myMoreInfoDiv.classList.remove("showMore");
        myMoreInfoDiv.classList.add("showLess");
        myIcon.src = showLessIcon; // Assuming showLessIcon is defined elsewhere
        myProjDiv.classList.remove('select-color');
        myIcon.addEventListener('mouseout', mouseout_func); // Assuming mouseout_func is defined elsewhere
        myIcon.classList.remove('mouseout-disabled');
        console.log("Collapsed project");

        // Stop all videos in iframes or objects
        stopVideoContent(myProjDiv);
		
    }
}

function stopVideoContent(container) {
    // Pause videos in iframes or objects
    const frames = container.querySelectorAll('iframe, object');
    frames.forEach(frame => {
        if (frame.contentWindow && frame.contentWindow.document) {
            const videos = frame.contentWindow.document.querySelectorAll('video');
            videos.forEach(video => video.pause());
        }
    });
}
