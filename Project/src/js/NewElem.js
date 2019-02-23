var NewElem = {

    create : function (elem, className, src, alt) {

        var newElem = document.createElement(elem);
			newElem.className = className || null;
			newElem.src = src || null; 
			newElem.alt = alt || null;
		return newElem;
        
    }
    
};