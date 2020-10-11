const container = document.getElementById('container')

// create array 
for(let i=128512; i<=128580; i++){
    //push p tag into array
    //include unicode value #
    container.innerHTML+=`<div class="emoji"><p class="code">&#${i};</p><p>&amp;#${i};</p></div>`


}

//join array send to html with iner html proporties 

var moods = [i=128512]

function myFunction() {
    var moods = [128512];
    var x = document.getElementById("demo");
    x.innerHTML = moods.join();
  }

