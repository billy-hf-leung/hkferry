
function generateSwipper() {
    for (var i = 0; i < 3; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Testing";
        newDiv.setAttribute("class", "swiper-slide");
        newDiv.setAttribute("style", " text-align: center; font-size: 18px; background: #fff; border-style: solid; border-radius: 7px;  display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; -webkit-justify-content: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;-webkit-align-items: center;align-items: center;")
        document.getElementsByClassName("swiper-wrapper").appendChild(newDiv);
    };
}