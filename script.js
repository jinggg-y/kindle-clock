function Time(){
    var time = Intl.DateTimeFormat('en-GB', {timeStyle: 'short', timeZone: 'Australia/Brisbane'}).format();
    var date = Intl.DateTimeFormat('en-GB', {timeZone: 'Australia/Brisbane'}).format();
    var day = Intl.DateTimeFormat('en-GB', {weekday:"long", timeZone: 'Australia/Brisbane'}).format();

    document.getElementById("clock").innerText = time
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
    // Set Timer to 0.5 minute (30000 ms)
    setTimeout(Time, 30000);
}

Time();