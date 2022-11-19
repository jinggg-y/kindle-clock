function Time(){
    const d = new Date()

    var time = d.toLocaleString("en-GB", {timeStyle:"short", timeZone: 'Australia/Brisbane'});
    var date = d.toLocaleString("en-GB", {dateStyle:"short", timeZone: 'Australia/Brisbane'});
    var day =  d.toLocaleString('en-GB', {weekday:"long", timeZone: 'Australia/Brisbane'});

    document.getElementById("clock").innerText = time
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
    // Set Timer to 0.5 minute (30000 ms)
    setTimeout(Time, 30000);
}

Time();