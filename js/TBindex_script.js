// JavaScript Document
var scjxx = document.getElementsByClassName("top-bg-fav");
window.onload = function(){
		onMovediv();

		ma_dp();
	}

function onMovediv(){
		var blocks = document.getElementsByClassName("nav_block");
		var menu = document.getElementsByClassName("top-menu");
		for(var i=0; i<blocks.length; i++){
				menu[i].num = i;
				blocks[i].num = i;
				menu.item(i).onmouseover = function(){
						this.style.display = "block";
						blocks[this.num].style.backgroundColor = "#FFF";
					}
				menu.item(i).onmouseout = function(){
						this.style.display = "none";
						blocks[this.num].style.backgroundColor = null;
					}
					
				blocks.item(i).onmouseover = function(){
						this.style.backgroundColor = "#FFF";
						menu[this.num].style.display = "block";
					}
				blocks.item(i).onmouseout = function(){
						this.style.backgroundColor = null;
						menu[this.num].style.display = "none";
					}
					
			}
	}
	
	function favMover(){
			scjxx[0].style.background = "url(./img/xpt.png) -38px 0px";
		}
	function favOut(){
			scjxx[0].style.background = "url(./img/xpt.png) -18px 0px";
		}


	function ma_dp(){
		var vv = document.getElementsByClassName("sea-ma");
		if(document.addEventListener){
			vv[0].addEventListener("click",function(){
				vv[0].setAttribute("class","sea-ma sea-ma-selected");
				vv[1].setAttribute("class","sea-ma");
				document.getElementById("seach-tdiv").style.borderColor="#f50";
				document.getElementById("seach-bdiv").style.backgroundColor="#ff4200";
				vv[2].setAttribute("class","sea-ma");
			},false);
			vv[1].addEventListener("click",function(){
				vv[0].setAttribute("class","sea-ma");
				vv[1].setAttribute("class","sea-ma sea-ma-selected sea-tm-selected");
				document.getElementById("seach-tdiv").style.borderColor="#c40000";
				document.getElementById("seach-bdiv").style.backgroundColor="#c40000";
				vv[2].setAttribute("class","sea-ma");
			},false);
			vv[2].addEventListener("click",function(){
				vv[0].setAttribute("class","sea-ma");
				vv[1].setAttribute("class","sea-ma");
				document.getElementById("seach-tdiv").style.borderColor="#f50";
				document.getElementById("seach-bdiv").style.backgroundColor="#ff4200";
				vv[2].setAttribute("class","sea-ma sea-ma-selected");
			},false);
		}
	}