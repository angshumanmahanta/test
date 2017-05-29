var transaction_id = context.getVariable("request.header.Transaction-Id");
var contentTypeHdr = context.getVariable("request.header.Content-Type");

function javascriptValidateRequestHeader(_transaction_id, _contentTypeHdr){
    print('_transaction_id:'+_transaction_id);
    var transationIdExists = false;
    if(_transaction_id === null || _transaction_id === undefined) {
        _transaction_id = context.getVariable("request.header.Transaction-Id");
        if(_transaction_id === null || _transaction_id === undefined) {
    context.setVariable('errorDesc', 'Transaction Id is missing');
        } else {
            transationIdExists = true;
}  
    } else {
        transationIdExists = true;
    }
    if(transationIdExists){
        if  (/^[a-zA-Z0-9-]+$/.test(_transaction_id)) {
            context.setVariable('globalTransactionId', _transaction_id);
}   else {
    context.setVariable('errorDesc', 'Transaction Id is invalid');
}
    }

    if  (_contentTypeHdr === null || _contentTypeHdr === undefined) {
    context.setVariable('errorDesc', 'Content-Type Header is missing');
}   else {
        print('_contentTypeHdr: '+_contentTypeHdr);
            if  (_contentTypeHdr !== 'application/json') {
                print("inside invalid branch");
            context.setVariable('errorDesc', 'Content-Type Header is invalid');
        }
    }


}

if (typeof module !== 'undefined') {
    module.exports = javascriptValidateRequestHeader;
} else {
    javascriptValidateRequestHeader(transaction_id, contentTypeHdr);
}