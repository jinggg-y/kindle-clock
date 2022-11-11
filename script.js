function Time(){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var d = new Date();
    d.toLocaleString('en', {timeZone: 'Australia/Brisbane'});
    var hour = d.getHours();
    var minute = d.getMinutes();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    hour = update(hour);
    minute = update(minute);
    day = days[day - 1];
    month += 1;

    document.getElementById("clock").innerText = hour + ":" + minute
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date + "/" + month + "/" + year;
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