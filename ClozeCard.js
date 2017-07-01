var ClozeCard = function (text,cloze){
	this.cloze = cloze;
	this.partial = function() {
		var str = text;
		var n = str.search(cloze);

		//if search for cloze text is not in the full text n = -1
		if (n === -1) {
			//console.log("Error: " + this.cloze + " is not in the text.");
			return "Error: " + this.cloze + " is not in the text.";
		}
		else {  //cloze text is found in the full text
			var newText = text.replace(this.cloze, "...");
			return newText;

		}
	};
	this.fullText = text;
	// this.deletion = function(){
	// 	//throw and log error when cloze deletion does
	// 	//not appear in the input text
	// 	if (cloze.search(text)==-1) {
	// 		console.log("Error: " + this.cloze + " is not in the text.");
	// 	}
	// }
}

module.exports = ClozeCard;