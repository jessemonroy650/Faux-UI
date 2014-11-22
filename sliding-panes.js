/*
	Inline Message (non-popup)
	Date: 2014-11-17
*/
//
//	Message is displayed in the <div id="{mId}" class="{mClass}"></div>
//	* Use 'mClass' to reassign the style/color - defaults to what you pre-set it to.
//	* The object is 'none' & 'collapse' by default.
//
var SlidingPane = {
	Classes   : ['info','success','warning','error'],
	DefaultId : 'message',
	GrowlId   : undefined,
	TimeoutHandle : undefined,

	//	* This object just toggles the object between visible and invisible.
	Toggle : function (mId, mClass) {

		if ( mId ) { theId = mId; } else { theId = this.DefaultId; }

		if (theId) {
			var thing = document.getElementById(theId);
			if ( thing.style.visibility == 'visible' ) {
				thing.style.visibility = 'collapse';
				thing.style.display = 'none';
				// NOTE: The class assignment below, only changes colors.
			} else {
				thing.style.visibility = 'visible';
				thing.style.display = 'block';
				if (mClass) {
					thing.className = mClass;
				}
			}
		}
	}
}
