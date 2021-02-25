class Log
{
	constructor(date, type, message)
	{
		this.date = date;
		this.type = type;
		this.message = message;
	}

	getLog()
	{
		let log = "[" + this.date + "] " + this.type + ": " + this.message;
		return log;
	}
}

let app_log = [];

app_log[0] = new Log("2018-04-03T12:10:36.100Z", "INFO", "This is an information about something.");
app_log[1] = new Log("2018-04-03T13:21:36.201Z", "ERROR", "We can't divide any numbers by zero.");
app_log[2] = new Log("2018-04-03T16:45:36.210Z", "NOTICE", "Someone loves your status.");
app_log[3] = new Log("2018-04-03T23:40:36.215Z", "WARNING", "Insufficient funds.");
app_log[4] = new Log("2018-04-03T23:56:36.215Z", "DEBUG", "This is debug message.");
app_log[5] = new Log("2018-04-04T04:54:36.102Z", "ALERT", "Achtung! Achtung!");
app_log[6] = new Log("2018-04-04T05:01:36.103Z", "CRITICAL", "Medic!! We've got critical damages.");
app_log[7] = new Log("2018-04-04T05:05:36.104Z", "EMERGENCY", "System hung. Contact system administrator immediately!");

let sorted_app_log = [];

for(let i=0; i<app_log.length; i++)
{
	sorted_app_log[i] = "";
}

for(let i=0; i<app_log.length; i++)
{	
	if(app_log[i].type === "EMERGENCY")
	{
		sorted_app_log[0] += app_log[i].getLog() + '\r\n';
	}
	else if(app_log[i].type === "ALERT")
	{
		sorted_app_log[1] += app_log[i].getLog() + '\r\n';
	}
	else if(app_log[i].type === "CRITICAL")
	{
		sorted_app_log[2] += app_log[i].getLog() + '\r\n';
	}
	else if(app_log[i].type === "ERROR")
	{
		sorted_app_log[3] += app_log[i].getLog() + '\r\n';
	}
	else if(app_log[i].type === "WARNING")
	{
		sorted_app_log[4] += app_log[i].getLog() + '\r\n';
	}
	else if(app_log[i].type === "NOTICE")
	{
		sorted_app_log[5] += app_log[i].getLog() + '\r\n';
	}
	else if(app_log[i].type === "INFO")
	{
		sorted_app_log[6] += app_log[i].getLog() + '\r\n';
	}
	else if(app_log[i].type === "DEBUG")
	{
		sorted_app_log[7] += app_log[i].getLog() + '\r\n';
	}
}

for(let i=0; i<sorted_app_log.length; i++)
{
	console.log(sorted_app_log[i]);
}

const fs = require('fs');
fs.writeFile("app.log", JSON.stringify(sorted_app_log), function(err)
{
	if(err)
	{
		return console.log(err);
	}
	console.log("app.log created");
});