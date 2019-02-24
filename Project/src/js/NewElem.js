var NewElem = {

    create : function (parent, element, attr, attrValue) {

        var elem = document.createElement(element);
			
        if (attr != undefined) {
            elem.setAttribute(attr, attrValue);
        }
	
        parent.appendChild(elem);

    return elem;
    
    }
    
};
