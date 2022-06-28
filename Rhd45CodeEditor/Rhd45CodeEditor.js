        function changeTitle() {
            var title = prompt("What would you like to change the title of the webpage to?")
            document.getElementById("heading").innerHTML = title;
            document.getElementById("tab").innerHTML = title;
        }
        
        
        function clickCSS() {
            document.getElementById("css").innerHTML = 
	"h4 {\n color: lightblue;text-align: center;\n }\np {\n  font-family: verdana, cursive; font-size: 35pt;text-align:right;\n }";
			
        }
            
        function clickHTML() {
            document.getElementById("html").innerHTML = "<h4> Hello World! </h4>\n<p> Welcome to my code editor application! </p>";
        }
	
        function launchHTML() {
		var text = document.getElementById("html").value;
                document.getElementById("preview").innerHTML = text;
            }

       	function toggleCSS() {
		var collectCSS = document.getElementById("css").value;
		var holdCSS = document.getElementById("colorful");
                
		if (!holdCSS.innerHTML) {
                    document.getElementById("toggle").style.backgroundColor = "black";
                    holdCSS.innerHTML = collectCSS;
                } 
		else {
                    document.getElementById("toggle").style.backgroundColor = "blue";
                    holdCSS.innerHTML = null;
                }
			
        }

        function clearAll() {
        	var clearHTML = document.getElementById("html");
		clearHTML.innerHTML = null;

		var clearCSS = document.getElementById("css");
		clearCSS.innerHTML = null;

		var clearPreview = document.getElementById("preview");
		clearPreview.innerHTML = null;
        }