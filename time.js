window.onload = () => {
    var hrs = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var res = document.getElementById("result");
    var conv = document.getElementById("convert");

    conv.addEventListener("click", toSeconds);

    function toSeconds() {
        var num1 = Number(hrs.value);
        var num2 = Number(min.value);
        var sec = num1 * 60 * 60 + num2 * 60;
        res.value = sec + " sec";
    };
};