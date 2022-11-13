function Time(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    hour = update(hour);
    minute = update(minute);
    day = days[day];
    month += 1;

    document.getElementById("clock").innerText = hour + ":" + minute
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date + "/" + month + "/" + year;
    document.getElementById("print").innerText = d.toString() + d.toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    // Set Timer to 0.5 minute (30000 ms)
    setTimeout(Time, 30000);
}

function update(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}
Time();