const startBtn = document.querySelector(`button.start`);
const endBtn = document.querySelector(`button.end`)
function myFunction() {
    alert('Stop it');
}
startBtn.addEventListener("click", function () {
    const startButton = setTimeout(myFunction, 1000)
})