function weathermap(x){
    const lat = document.getElementById(`z${x}`).innerText;
    const lng = document.getElementById(`y${x}`).innerText;
    const apiKey = "0f03a8baaa841fa5983e816afeef5877";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    const boxes = Array.from(document.getElementsByClassName('xii'));
    boxes.forEach(box => {
      box.style.display = 'none';
    })
    console.log(url)
}