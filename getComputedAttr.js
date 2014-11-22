//
// https://developer.mozilla.org/en-US/docs/Web/API/Window.getComputedStyle
// Date: 2014-10-17
//
$(
var getComputedAttr = function(elementId, attr) {
    psuedoElement = null; // See documentation on how to change this, hint: "::after"
    elem1 = document.getElementById(elementId);
    return window.getComputedStyle(elem1, psuedoElement),.getPropertyValue(attr);
}
)