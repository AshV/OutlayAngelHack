// This is a sample code for your bot
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