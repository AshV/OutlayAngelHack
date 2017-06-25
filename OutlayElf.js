function MessageHandler(context, event) {
    var msg = event.message;
    var lMsg = msg.toLowerCase();
    context.console.log('0');
    if (IsNumber(lMsg[0])) {
        context.console.log('1');
        var expense = IsValidMoney(msg);
        if (true) {
            context.console.log('2');
            AddExpense(context, expense);
        }
    }
    else if (msg[0] == '-') {
        context.console.log('3');
        var gain = IsValidMoney(msg);
        if (true) {
            context.console.log('4');
            AddGain(context, gain);
        }
    }
    else if (lMsg == 'day' || lMsg == 'help') {
        HandleReport(context, lMsg);
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
function HandleReport(context, msg) {
    if (msg == 'day') {
        context.console.log('5');
        context.simplehttp.makeGet("https://outlaystore.firebaseio.com/.json");
    }
    else if (msg == 'help') {
        context.console.log('05');
        context.sendResponse('Send your-amount space purpose to add Expense.<br/> Ex. 100 Cab <br/><br/> Send minus symbol your amount space recievedfrom to add Recieved Money. <br/>Ex. -500 Lucky Draw. <br/><br/>Send day for summary');
    }
}

// Handle Junk
function HandleJunk(context) {
    context.sendResponse("Command not supported. send help for help.");
}

// Adding gain to Cash in Hand
function AddGain(context, gain) {
    //  context.sendResponse('[{"date":"06-25-2017"},{"money":"'+gain[0]+'"},{"Purpose":"'+gain[1]+'"}]');
    context.simplehttp.makePost("https://outlaystore.firebaseio.com/.json",
        '[{"date":"06-25-2017"},{"money":"' + gain[0] + '"},{"Purpose":"' + gain[1] + '"}]',
        { "Content-Type": "application/json" });
}

// Adding new expense Cash in Hand
function AddExpense(context, expense) {
    context.simplehttp.makePost("https://outlaystore.firebaseio.com/.json",
        '[{"date":"06-25-2017"},{"money":"' + expense[0] + '"},{"Purpose":"' + expense[1] + '"}]',
        { "Content-Type": "application/json" });
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
    context.console.log('6');
    context.sendResponse(event.getresp);
    //   context.sendResponse(event.params);
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by" + event.dbval);
}