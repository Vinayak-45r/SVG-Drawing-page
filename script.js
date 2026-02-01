let svg = document.getElementById("box");
let drawing = false;
let line;
let points = "";

svg.addEventListener("mousedown", function (e) {
    drawing = true;
    points = "";

    line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polyline"
    );

    line.setAttribute("stroke", "blue");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("fill", "none");

    svg.appendChild(line);
});

svg.addEventListener("mousemove", function (e) {
    if (!drawing) return;

    let rect = svg.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    points = points + x + "," + y + " ";
    line.setAttribute("points", points);
});

svg.addEventListener("mouseup", function () {
    drawing = false;
});

function clearBox() {
    svg.innerHTML = "";
}




