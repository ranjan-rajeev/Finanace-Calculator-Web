var map = new Map();
var Componentkeys = [1, 2, 3, 4, 5, 6, 7];
var Componentvalues = ["Carousel Component", "WebView Component", "Horizontal View Pager", "Header Component",
    "Grid Recycler", "Space Component", "AdView Component"
];
for (var i = 0; i < Componentkeys.length; i++) {
    map.set(Componentkeys[i], Componentvalues[i]);
}

function getComponentTypeName(cmpType) {
    return map.get(cmpType);
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

var calMap = new Map();
var calKeys = [1, 2, 3];
var calValues = ["EMI Calculator", "Compare Loan", "Flat Vs Reducing Rate"];

for (var i = 0; i < calKeys.length; i++) {
    calMap.set(calKeys[i], calValues[i]);
}

function getCalTypeName(cmpType) {
    return calMap.get(cmpType);
}
