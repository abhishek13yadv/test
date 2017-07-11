$(document).ready(function(){
  $("#generateButton").click(function(){
  		var rowsA = parseInt($("#rowsA").val())
		var rowsB = parseInt($("#rowsB").val())
		var colsA = parseInt($("#colsA").val())
		var colsB = parseInt($("#colsB").val())
		
		if( rowsA<1 || rowsB<1 || rowsA>25 || rowsB>25) {
			$("#gridsOutput").html("Rows must be between 1 and 25")
			return
		}
		
		if( colsA<1 || colsB<1 || colsA>25 || colsB>25) {
			$("#gridsOutput").html("Columns must be between 1 and 25")
			return
		}
		
    	// write out the one-of-n encoding
    	var output = ""
		
		output += "<b>Matrix A:</b><br>"
		output += "<table>"
    	for(var row=0;row<rowsA;row++) {
			output+="<tr>"
			for(var col=0;col<colsA;col++) {
				var name = "a"+row+"-"+col
				output+='<td><input value="0" size="3" name="'+name+'"></td>'
			}
			output+="</tr>"
    	}
		output+="</table>"
		
		output += "<b>Matrix B:</b><br>"
		output += "<table>"
    	for(var row=0;row<rowsB;row++) {
			output+="<tr>"
			for(var col=0;col<colsB;col++) {
				var name = "b"+row+"-"+col
				output+='<td><input value="0" size="3"></td>'
			}
			output+="</tr>"
    	}
		output+="</table>"


		
    	$("#gridsOutput").html(output)
  });
  $("#calculateButton").click(function(){
  		var rowsA = parseInt($("#rowsA").val())
		var rowsB = parseInt($("#rowsB").val())
		var colsA = parseInt($("#colsA").val())
		var colsB = parseInt($("#colsB").val())		
  		
		// Generate LaTex
		var output = ""
		output += "\\begin{bmatrix}"
		for(var row=0;row<rowsB;row++) {
			for(var col=0;col<colsB;col++) {
				var name = "a"+row+"-"+col
				
				if( col>0 ) {
					output += " &"
				}
				var v = parseFloat($("#"+name).val());
				output += ":" + v
			}
			output += "\\\\"
		}
		output += "\\end{bmatrix}"
		
		$("#calculateOutput").html(output)
		MathJax.Hub.Typeset()
  });
});

