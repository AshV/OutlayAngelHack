function MessageHandler(context, event) {
    context.console.log(test)
    if(event.message.toLowerCase() == httptest) {
        context.simplehttp.makeGet(httpip-api.comjson);
    }
    else if(event.message.toLowerCase() == testdbget) {
        context.simpledb.doGet(putby)
    }
    else if(event.message.toLowerCase() == testdbput) {
        context.simpledb.doPut(putby, event.sender);
    }
    else {
        context.sendResponse('No keyword found  '+event.message); 
    }
}

// Handle report related keywords
function HandleReport(command) {

}

// Handle Junk
function HandleJunk(junk) {

}

// Adding gain to Cash in Hand
function AddGain(gain) {

}

// Adding new expense Cash in Hand
function AddExpense(expense) {

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
    if(! context.simpledb.botleveldata.numinstance)
        context.simpledb.botleveldata.numinstance = 0;
    numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
    context.simpledb.botleveldata.numinstance = numinstances;
    context.sendResponse(Thanks for adding me. You are + numinstances);
}

function HttpResponseHandler(context, event) {
     if(event.geturl === httpip-api.comjson)
    context.sendResponse(event.getresp);
}

function DbGetHandler(context, event) {
    context.sendResponse(testdbput keyword was last get by + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse(testdbput keyword was last put by + event.dbval);
}