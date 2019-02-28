//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Static class
//--------------------------------------------------------------------------

/**
 * Class to assist with creating new DOM elements.
 */
var NewElem = {

    /**
     * Creates a new DOM element and appends it to the parent element provided as
     * an argment, Attribute and attribute value can be provided but are optional.
     * 
     * @param {*} parent 
     * @param {*} element 
     * @param {*} attr 
     * @param {*} attrValue 
     */
    create : function (parent, element, attr, attrValue) {

        var elem = document.createElement(element);
			
        if (attr != undefined) {
            elem.setAttribute(attr, attrValue);
        }
	
        parent.appendChild(elem);

    return elem;
    
    }
    
};
