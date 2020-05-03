var map = new Map();
var Componentkeys = [1, 2, 3,
    4, 5, 6, 7
];
var Componentvalues = ["Carousel Component", "WebView Component", "Horizontal View Pager",
    "Header Component", "Calculator List ", "Space Component", "AdView Component"
];
for (var i = 0; i < Componentkeys.length; i++) {
    map.set(Componentkeys[i], Componentvalues[i]);
}

function getComponentTypeName(cmpType) {
    return map.get(cmpType);
}

function bindComponentTypeList(selectId) {
    var list = document.getElementById(selectId);
    for (var i in Componentkeys) {
        list.add(new Option(Componentvalues[i], Componentkeys[i]));
    }
}


var viewTypeMap = new Map();
var viewkeys = [1, 2, 3, 4, 5, 6, 7];
var viewvalues = ["Edit Text", "Date", "Spinner", "Spinner With Edi Text",
    "Button", "Web View", "Header Title"
];
for (var i = 0; i < viewkeys.length; i++) {
    viewTypeMap.set(viewkeys[i], viewvalues[i]);
}

function getViewTypeName(cmpType) {
    return viewTypeMap.get(cmpType);
}

function bindViewTypeList(selectId) {
    var list = document.getElementById(selectId);
    for (var i in viewkeys) {
        list.add(new Option(viewvalues[i], viewkeys[i]));
    }
}

// Calculator mapping

var calMap = new Map();
var calKeys = [10, 20, 30,
    40, 50, 60,
    70, 80, 90,
    100, 110, 120,
    130, 140,
    150, 160
];
var calValues = ["EMI Calculator", "Compare Loan", "Flat Vs Reducing Rate",
    "Create Loan Profile", "View Loan Profile", "Home Loan Eligibility",
    "Systematic Investment Plan", "Goal SIP Calculator", "Lumpsum SIP Calculator",
    "FD Calculator", "RD Calculator", "PPF Calculator",
    "GST Calculator", "VAT Calculator",
    "Add Two Number", "Atal Pension Yojna"
];

for (var i = 0; i < calKeys.length; i++) {
    calMap.set(calKeys[i], calValues[i]);
}

function getCalTypeName(cmpType) {
    return calMap.get(cmpType);
}

function bindCalculatorList(selectId) {
    var list = document.getElementById(selectId);
    for (var i in calKeys) {
        list.add(new Option(calValues[i], calKeys[i]));
    }
}

// output type mapping 
var outputType = new Map();
var outputTypeKeys = [1, 2, 3];
var outputTypeValues = ["Formulae", "Variable", "Fixed"];

for (var i = 0; i < outputTypeKeys.length; i++) {
    outputType.set(outputTypeKeys[i], outputTypeValues[i]);
}

function getOutPutTypeName(cmpType) {
    return outputType.get(cmpType);
}

function bindOutputTypeList(selectId) {
    var list = document.getElementById(selectId);
    for (var i in outputTypeKeys) {
        list.add(new Option(outputTypeValues[i], outputTypeKeys[i]));
    }
}

//  Edittext Input type mapping 
var etTypeMap = new Map();
var etTypeKeys = [1, 2, 3];
var etTypeValues = ["Number", "Decimal Number", "Text"];

for (var i = 0; i < etTypeKeys.length; i++) {
    etTypeMap.set(etTypeKeys[i], etTypeValues[i]);
}

function getetTypeName(cmpType) {
    return etTypeMap.get(cmpType);
}

function bindetTypeList(selectId) {
    var list = document.getElementById(selectId);
    for (var i in etTypeKeys) {
        list.add(new Option(etTypeValues[i], etTypeKeys[i]));
    }
}


var androidActivities = [
    "WebViewActivity", "GenericCalculatorActivity", "SplashActivity",
    "MainActivity", "EmiCalculatorActivity", "EmiCompareActivity",
    "FixedVsReducingActivity", "GstCalculatorActivity", "VatCalculatorActivity",
    "FDCalculatorActivity", "RDCalculatorActivity", "PPFCalculatotActivity",
    "SIPCalculatorActivity", "SIPGoalCalculatorActivity", "LumpSumpSipActivity",
    "SerachHistoryACtivity", "CreateLoanProfileActivity", "ViewLoanProfile",
    "HomeLoanEligibility"
];

function getActivityList() {
    return androidActivities;
}