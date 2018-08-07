// Put your Last.fm API key here
var api_key = "2ca7fcf57c6ec671302dd6dee1c0d8ab";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
			if(json.artist != undefined){				
				//var str = JSON.stringify(json,undefined,2);
				//document.getElementById("output").innerHTML = "<pre>" + json.artist.name + "</pre>";
				document.getElementById("error").style.display = "none";
				document.getElementById("output").style.display = "block";
				if(json.artist.name != undefined && json.artist.name != ""){
					document.getElementsByClassName("name-o")[0].style.display = "block";
					document.getElementsByClassName("name-o")[0].innerHTML = json.artist.name;
				}else{
					document.getElementsByClassName("name-o")[0].style.display = "none";
				}
				if(json.artist.image[json.artist.image.length-1]["#text"] != undefined && json.artist.image[json.artist.image.length-1]["#text"] != ""){
					document.getElementsByClassName("pic-o")[0].style.display = "block";
					document.getElementsByClassName("pic-o")[0].src = json.artist.image[json.artist.image.length-1]["#text"];
				}else{
					document.getElementsByClassName("pic-o")[0].style.display = "none";
				}
				if(json.artist.url != undefined && json.artist.url != ""){
					document.getElementsByClassName("lastFm-o")[0].style.display = "block";
					document.getElementsByClassName("lastFm-o")[0].href = json.artist.url;
				}else{
					document.getElementsByClassName("lastFm-o")[0].style.display = "none";
				}
				if(json.artist.bio.content != undefined && json.artist.bio.content != ""){
					document.getElementsByClassName("desc-o")[0].style.display = "block";
					document.getElementsByClassName("desc-o")[0].innerHTML = json.artist.bio.content;
				}else{
					document.getElementsByClassName("desc-o")[0].style.display = "none";
				}
			}else{
				document.getElementById("output").style.display = "none";
				document.getElementById("error").style.display = "block";
			}
        }
    };
    xhr.send(null);
	
	var xhr2 = new XMLHttpRequest();
	var method2 = "artist.gettopalbums";
	xhr2.open("GET", "proxy.php?method="+method2+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr2.setRequestHeader("Accept","application/json");
    xhr2.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json2 = JSON.parse(this.responseText);
			if(json2.topalbums != undefined)
			{				
				for (i = 0; i < 4; i++) {
					document.getElementsByClassName("row-2")[0].style.display = "block";
					document.getElementsByClassName("top-album-title")[i].innerHTML = json2.topalbums.album[i].name;
					document.getElementsByClassName("top-album-img")[i].src = json2.topalbums.album[i].image[json2.topalbums.album[i].image.length-1]["#text"];
				}
			}else{
				document.getElementsByClassName("row-2")[0].style.display = "none";
			}
            //var str = JSON.stringify(json,undefined,2);
            //document.getElementById("output").innerHTML = "<pre>" + json.artist.name + "</pre>";
        }
    };
    xhr2.send(null);
	
	var xhr3 = new XMLHttpRequest();
	var method3 = "artist.getsimilar";
	xhr3.open("GET", "proxy.php?method="+method3+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr3.setRequestHeader("Accept","application/json");
    xhr3.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json3 = JSON.parse(this.responseText);
			var similarartists = "";
			if(json3.similarartists != undefined)
			{
				document.getElementsByClassName("row-3")[0].style.display = "block";
				for (i = 0; i < json3.similarartists.artist.length; i++) { 
					similarartists += "<li class='col-sm-3'>" + json3.similarartists.artist[i].name + "</li>";
					if(i==11)
						break;
				}
				document.getElementsByClassName("similar-artist-ul")[0].innerHTML = similarartists
            }else{
				document.getElementsByClassName("row-3")[0].style.display = "none";
			}
			//var str = JSON.stringify(json,undefined,2);
            //document.getElementById("output").innerHTML = "<pre>" + json.artist.name + "</pre>";
        }
    };
    xhr3.send(null);
}
