function setMood(mood){

    let body = document.body;
    let title = document.getElementById("title");
    let message = document.getElementById("message");

    if(mood === "tired"){
        body.style.background = "#2c3e50";
        title.innerText = "Take a small pause";
        message.innerText = "You've worked enough. Drink water and try a 15 minute reset.";
    }

    else if(mood === "focused"){
        body.style.background = "#16213e";
        title.innerText = "Deep Work Mode";
        message.innerText = "No distractions. You got this.";
    }

    else if(mood === "stressed"){
        body.style.background = "#432a3b";
        title.innerText = "Breathe Slowly";
        message.innerText = "One task at a time. Don't overload yourself.";
    }

    else if(mood === "lazy"){
        body.style.background = "#3a4750";
        title.innerText = "Get up bro";
        message.innerText = "Your future self is watching you scroll.";
    }

}