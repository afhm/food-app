function hinter(e){var n=e.target,t=document.getElementById("addr_list");!isNaN(n.value)||n.value.length<0||(window.hinterXHR.abort(),window.hinterXHR.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);t.innerHTML="",e.forEach(function(e){var n=document.createElement("option");n.value=e,t.appendChild(n)})}},window.hinterXHR.open("GET","./class-hp.php?query="+n.value,!0),window.hinterXHR.send())}function validateForm(){var e=document.getElementById("name_input"),n=document.getElementById("addr_list");for(var t of n.children)if(t.value==e.value)return!0;return alert("name input is invalid"),!1}window.addEventListener("load",function(){document.getElementById("name_input").addEventListener("keyup",function(e){hinter(e)}),window.hinterXHR=new XMLHttpRequest});