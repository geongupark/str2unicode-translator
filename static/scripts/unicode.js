function decodeUnicode(unicodeString) {
	var r = /\\u([\d\w]{4})/gi;
	unicodeString = unicodeString.replace(r, function (match, grp) {
	    return String.fromCharCode(parseInt(grp, 16)); } );
	return unescape(unicodeString);
}

function encodeUnicode(convertString) {
	var unicodeString = '';
	for (var i=0; i < convertString.length; i++) {
		var theUnicode = convertString.charCodeAt(i).toString(16).toUpperCase();

		while (theUnicode.length < 4) {
			theUnicode = '0' + theUnicode;
		}

		theUnicode = '\\u' + theUnicode;
		unicodeString += theUnicode;
	}

	return unicodeString;
}

$(function(){
    $("#StringTextarea").on("keyup focusout",function(){
        var strValue = $("#StringTextarea").val();
        $("#UnicodeTextarea").val(encodeUnicode(strValue));
    })
    
    $("#UnicodeTextarea").on("keyup focusout",function(){
        var unicodeValue = $("#UnicodeTextarea").val();
        $("#StringTextarea").val(decodeUnicode(unicodeValue));
    })
});
