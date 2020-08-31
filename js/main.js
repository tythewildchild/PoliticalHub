
//LINKS FOR CLICKING ON TOPIC ARTICLES
let covid = document.getElementById('covid');
let sameSex = document.getElementById('sameSex');
let gunControl = document.getElementById('gunControl');
let abortion = document.getElementById('abortion');
let blm = document.getElementById('blm');
let fakeNews = document.getElementById('fakeNews');
covid.addEventListener("click", function(evt){ 
    evt.preventDefault(); 
    window.location.assign("covid.html"); 
    return false; 
});
sameSex.addEventListener("click", function (evt) { 
    evt.preventDefault(); 
    window.location.assign("sameSex.html"); 
    return false; 
});
gunControl.addEventListener("click", function (evt) { 
    evt.preventDefault(); 
    window.location.assign("gunControl.html"); 
    return false; 
});
abortion.addEventListener("click", function (evt) { 
    evt.preventDefault(); 
    window.location.assign("abortion.html"); 
    return false; 
});
blm.addEventListener("click", function (evt) { 
    evt.preventDefault(); 
    window.location.assign("blm.html"); 
    return false; 
});
fakeNews.addEventListener("click", function (evt) { 
    evt.preventDefault(); 
    window.location.assign("fakeNews.html"); 
    return false; 
});

