function toggleAllNotifications(object){
	var switches = $("td input");
	if(object.checked)
		setChecked(switches);
	else
		setUnchecked(switches);
	
}

function setChecked(switches){
	switches.each(function( index ) {
		if(index > 0)
			if(!this.checked)
				$( this ).click();
	});
}

function setUnchecked(switches){
	switches.each(function( index ) {
		if(index > 0)
			if(this.checked)
				$( this ).click();
	});
}