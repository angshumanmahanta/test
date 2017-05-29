describe("Description of the javascript file to be tested ", function() {
//rename to something like javascriptFileToBeTestedSpec.js so Jasmine will recognize it as a spec file.

contextVariables = {};
var nameOfExportedJavascriptFunction;

beforeAll(function() {
context = {
getVariable: function(key){
// console.log("im getting a variable");
return contextVariables[key];
},
setVariable : function(key, value){
// console.log("setting a variable");
contextVariables[key] = value;
}
};
//Any data that must be passed to the nameOfExportedJavascriptFunction function must be initialized here, you will most likely override these for individual test cases.
context.setVariable("response.content",'{"result":"Reponse Data Needed for javascript"}');
context.setVariable("response.status.code",200);

//update path to point to javascript file to be tested
nameOfExportedJavascriptFunction = require('../../apiproxy/resources/jsc/javascriptFileToBeTested.js');

print = console.log; //needed to get the apigee print statements to log to the console.
});

//this describes the test case, you may have many of these to properly test your javascript or perhaps you might only need one based on the javscript's complexity
it("TESTCASE-NAME", function() {
//this can be used to override the values set above.
context.setVariable("response.content",'{"result":"Reponse Data Needed for javascript"}');
context.setVariable("response.status.code",200);

spyOn(context, "setVariable"); //indicates which methods you will be writing expectations on below

//set up parameters as they would be set up in the javascript file.
var param1 = JSON.parse(context.getVariable("response.content"));
var param2 = context.getVariable("response.status.code");

//call the method to be tested
nameOfExportedJavascriptFunction(param1,param2);

//describe the method call expectations in order of their execution in the javascript NOTE: argsFor must increment for each call to the inspected method
expect(context.setVariable.calls.argsFor(0)).toEqual(['targetparam1',"The Value of targetParam1"]);
expect(context.setVariable.calls.argsFor(1)).toEqual(['targetparam2',"The Value of targetParam2"]);
 
});
});