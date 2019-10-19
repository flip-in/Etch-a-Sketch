var squareStyles = {
    height: "100px",
    width: "100px",
    border: "1pt solid black"
}

var container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

for(var i = 0; i < 16; i++){
    for(var j = 0; j<16; j++){
        container.innerHTML += '<div class="grid">' + ((i*16)+j+1) + '</div>';
        console.log("j=", j);
    }
    var jump = document.createElement("br");
    document.getElementById("container").appendChild(jump);
    console.log("i = ", i);
};

