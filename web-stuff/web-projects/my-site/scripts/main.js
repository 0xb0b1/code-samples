let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rick.jpeg') {
        myImage.setAttribute('src','image/rick-morty.jpg');
    } else {
        myImage.setAttribute('src','images/rick.jpeg');
    }
}
