function MessageHandler(context, event) {
    context.simplehttp.makePost("https://outlaystore.firebaseio.com/.json", '[{"time":"11:13:55 PM","milliseconds_since_epoch":1498346035806,"date":"06-24-2017"},{"money":20.5},{"Purpose":"Mango"}]', { "Content-Type": "application/json" });

    var msg = event.message;
    var lMsg = msg.toLowerCase();
    if (IsNumber(lMsg[0])) {
        var expense = IsValidMoney(msg);
        if (!expense) {
            AddExpense(context, expense);
        }
    }
    else if (msg[0] == '-') {
        var gain = IsValidMoney(msg);
        if (!gain) {
            AddGain(context, gain);
        }
    }
    else if (lMsg == 'day' || lMsg == 'week') {
        HandleReport(lMsg);
    }
    else {
        HandleJunk(context);
    }
}

// Check if Character is Number
function IsNumber(char) {
    var isNum = false;
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (n) {
        if (char == n)
            isNum = true;
    });
    return isNum;
}

// Whether amount given is valid
function IsValidMoney(money) {
    var firstSpace = money.indexOf(" ");
    var numPart = parseFloat(money.substr(0, firstSpace));
    if (isNaN(numPart))
        return false;
    else
        return [numPart, money.substr(firstSpace + 1)];
}

// Handle report related keywords
function HandleReport(context) {
    //   context.simplehttp.makeGet('http://date.jsontest.com/')
}

// Handle Junk
function HandleJunk(context) {
    context.sendResponse("Command not supported.");
}

// Adding gain to Cash in Hand
function AddGain(context, gain) {
    context.simplehttp.makePost("https://outlaystore.firebaseio.com/.json", '[{"time":"11:13:55 PM","milliseconds_since_epoch":1498346035806,"date":"06-24-2017"},{"money":20.5},{"Purpose":"Mango"}]', null);
}

// Adding new expense Cash in Hand
function AddExpense(context, expense) {

}

// Cash In Hand Management
function CashInHand(money) {
}

// future enhancement
function StartTrip() {

}

// future enhancement
function endTrip() {

}

// Functions declared below are required 
function EventHandler(context, event) {
    if (!context.simpledb.botleveldata.numinstance)
        context.simpledb.botleveldata.numinstance = 0;
    numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
    context.simpledb.botleveldata.numinstance = numinstances;
    context.sendResponse("Thanks for adding me. You are" + numinstances);
}

function HttpResponseHandler(context, event) {
    //    if (event.geturl === httpip - api.comjson)
    context.sendResponse(event.getresp);
    context.sendResponse(event.params);
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by" + event.dbval);
}