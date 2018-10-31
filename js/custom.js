/*=======================================
============ Login/Register Page ========
========================================*/

function goMainPage(){
	window.location.href = 'index.html';
}

function goTdy(){
	window.location.href = 'index.html' + "#tdy";
}

/*============================================
============ Main Index Page =================
============================================*/

/*-------------- Main Slide ---------------*/


/*----------- Country Food Card Hover -------------*/

$(".div-country-food #card1").on("click",function(){
	window.location.href = 'foodmenu.html' + "#italian-food";
});

$(".div-country-food #card2").on("click",function(){
	window.location.href = 'foodmenu.html' + "#german-food";
});

$(".div-country-food #card3").on("click",function(){
	window.location.href = 'foodmenu.html' + "#french-food";
});

function cardImageHoverOn(cardid){
	if(cardid.id == "card1"){
		var cardImage = document.querySelector("#card1 img");
		var cardDarkLayer = document.querySelector("#card1 .card-img-layer");
		var cardSpanText = document.querySelector("#card1 span");
		cardImage.style.transform = "scale(1.1)";
		cardDarkLayer.style.backgroundColor = "#00000022";
		cardSpanText.style.backgroundColor = "#00000088";
	}
	if(cardid.id == "card2"){
		var cardImage = document.querySelector("#card2 img");
		var cardDarkLayer = document.querySelector("#card2 .card-img-layer");
		var cardSpanText = document.querySelector("#card2 span");
		cardImage.style.transform = "scale(1.1)";
		cardDarkLayer.style.backgroundColor = "#00000022";
		cardSpanText.style.backgroundColor = "#00000088";
	}
	if(cardid.id == "card3"){
		var cardImage = document.querySelector("#card3 img");
		var cardDarkLayer = document.querySelector("#card3 .card-img-layer");
		var cardSpanText = document.querySelector("#card3 span");
		cardImage.style.transform = "scale(1.1)";
		cardDarkLayer.style.backgroundColor = "#00000022";
		cardSpanText.style.backgroundColor = "#00000088";
	}
}

function cardImageHoverOff(cardid){
	if(cardid.id == "card1"){
		var cardImage = document.querySelector("#card1 img");
		var cardDarkLayer = document.querySelector("#card1 .card-img-layer");
		var cardSpanText = document.querySelector("#card1 span");
		cardImage.style.transform = "scale(1)";	
		cardDarkLayer.style.backgroundColor = "#00000066";
		cardSpanText.style.backgroundColor = "#00000033";
	}
	if(cardid.id == "card2"){
		var cardImage = document.querySelector("#card2 img");
		var cardDarkLayer = document.querySelector("#card2 .card-img-layer");
		var cardSpanText = document.querySelector("#card2 span");
		cardImage.style.transform = "scale(1)";
		cardDarkLayer.style.backgroundColor = "#00000066";
		cardSpanText.style.backgroundColor = "#00000033";
	}
	if(cardid.id == "card3"){
		var cardImage = document.querySelector("#card3 img");
		var cardDarkLayer = document.querySelector("#card3 .card-img-layer");
		var cardSpanText = document.querySelector("#card3 span");
		cardImage.style.transform = "scale(1)";
		cardDarkLayer.style.backgroundColor = "#00000066";
		cardSpanText.style.backgroundColor = "#00000033";
	}
}


/*----------- Today Special Slide -------------*/

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:1,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});
});


/*============================================
============ Food Menu Page =================
============================================*/

/*---------- Food Card Count ----------*/
$(document).ready(function(){
	if ($(".count").text() == 0)
		$(".count").css("background-color",'transparent');
	$(".count").css("color",'#fff');
});

function plusCount(event){
	var parentId = event.parentNode.parentNode.parentNode.parentNode.parentNode.id;
	var foodCountId = event.parentNode.id;
	++(document.querySelector("#" + parentId + " #" + foodCountId + " #count").innerHTML);
	document.querySelector("#" + parentId + " #" + foodCountId + " #count").style.backgroundColor = '#fff';
	document.querySelector("#" + parentId + " #" + foodCountId + " #count").style.color = '#333';
}

function minusCount(event){
	var parentId = event.parentNode.parentNode.parentNode.parentNode.parentNode.id;
	var foodCountId = event.parentNode.id;
	var count = document.querySelector("#" + parentId + " #" + foodCountId + " #count").innerHTML;
	if(count > 0){
		--(document.querySelector("#" + parentId + " #" + foodCountId + " #count").innerHTML);
		if(document.querySelector("#" + parentId + " #" + foodCountId + " #count").innerHTML == 0){
			document.querySelector("#" + parentId + " #" + foodCountId + " #count").style.backgroundColor = 'transparent';
			document.querySelector("#" + parentId + " #" + foodCountId + " #count").style.color = '#fff';			
		}
	}

}


/*--------------- Booking Popup --------------*/

// $(".food-bar-card .button").on("click",function(){
// 	if(document.querySelector(".count").innerHTML > 0){
// 		document.querySelector(".div-booking-button").style.display = "block";
// 	} else
// 		document.querySelector(".div-booking-button").style.display = "none";
// });


$(".div-booking-button").on("click",function(){
	var food_price = 0; 
	var food_price_total = 0;
	var i=0;
	var totalAmount = 0;

	var table = document.querySelector("#food-booking-table");

	var row = table.insertRow(i);
	var colNo = row.insertCell(0);
	var colFoodName = row.insertCell(1);
	var colQty = row.insertCell(2);
	var colPrice = row.insertCell(3);
	var colAmount = row.insertCell(4);

	colNo.innerHTML = "No.";
	colNo.style.fontWeight = "bold";

	colFoodName.innerHTML = "Food Name";
	colFoodName.style.fontWeight = "bold";

	colQty.innerHTML = "Qty";
	colQty.style.fontWeight = "bold";

	colPrice.innerHTML = "Price";
	colPrice.style.fontWeight = "bold";

	colAmount.innerHTML = "Amount";
	colAmount.style.fontWeight = "bold";

	for(var r=0;r<3;r++){
		for(var c=0;c<4;c++){
			var row_loop = r+1;
			var col_loop = c+1;
			if(document.querySelector("#italian-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #count").innerHTML != 0){
				row = table.insertRow(++i);
				colNo = row.insertCell(0);
				colFoodName = row.insertCell(1);
				colQty = row.insertCell(2);
				colPrice = row.insertCell(3);
				colAmount = row.insertCell(4);

				colNo.innerHTML = i;
				colFoodName.innerHTML = document.querySelector("#italian-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #food-name").innerHTML;
				colQty.innerHTML = document.querySelector("#italian-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #count").innerHTML;
				colPrice.innerHTML = document.querySelector("#italian-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #food-price").innerHTML;
				colAmount.innerHTML = colQty.innerHTML * colPrice.innerHTML;
				totalAmount += parseInt(colAmount.innerHTML);
			}
		}
	}
	for(var r=0;r<3;r++){
		for(var c=0;c<4;c++){
			var row_loop = r+1;
			var col_loop = c+1;
			if(document.querySelector("#german-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #count").innerHTML != 0){
				row = table.insertRow(++i);
				colNo = row.insertCell(0);
				colFoodName = row.insertCell(1);
				colQty = row.insertCell(2);
				colPrice = row.insertCell(3);
				colAmount = row.insertCell(4);

				colNo.innerHTML = i;
				colFoodName.innerHTML = document.querySelector("#german-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #food-name").innerHTML;
				colQty.innerHTML = document.querySelector("#german-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #count").innerHTML;
				colPrice.innerHTML = document.querySelector("#german-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #food-price").innerHTML;
				colAmount.innerHTML = colQty.innerHTML * colPrice.innerHTML;
				totalAmount += parseInt(colAmount.innerHTML);
			}
		}
	}
	for(var r=0;r<3;r++){
		for(var c=0;c<4;c++){
			var row_loop = r+1;
			var col_loop = c+1;
			if(document.querySelector("#french-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #count").innerHTML != 0){
				row = table.insertRow(++i);
				colNo = row.insertCell(0);
				colFoodName = row.insertCell(1);
				colQty = row.insertCell(2);
				colPrice = row.insertCell(3);
				colAmount = row.insertCell(4);

				colNo.innerHTML = i;
				colFoodName.innerHTML = document.querySelector("#french-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #food-name").innerHTML;
				colQty.innerHTML = document.querySelector("#french-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #count").innerHTML;
				colPrice.innerHTML = document.querySelector("#french-food #food-row-"+ row_loop +" #food-col-"+ col_loop +" #food-price").innerHTML;
				colAmount.innerHTML = colQty.innerHTML * colPrice.innerHTML;
				totalAmount += parseInt(colAmount.innerHTML);
			}
		}
	}
	var rowTotalAmount = table.insertRow();
	var colTotalAmountText = rowTotalAmount.insertCell(0);
	var colTotalAmountValue = rowTotalAmount.insertCell(1);

	colTotalAmountText.innerHTML = "Total Amount";
	colTotalAmountText.colSpan = 4;
	colTotalAmountText.style.fontWeight = "bold";
	colTotalAmountValue.innerHTML = totalAmount;
	// console.log(document.querySelector(".div-popup-table").style.height);
	// if(parseInt(document.querySelector(".div-popup-table").style.height) > 250)
	// 	document.querySelector("#div-popup-table").style.overflowY = "scroll";
	document.querySelector(".div-booking-form").style.display = "block";
});

function closePopup(){
	document.querySelector(".div-booking-form").style.display = "none";
	var tableBody = document.querySelector("#food-booking-table").innerHTML ="";
	// document.querySelector("#food-booking-table tbody").remove();
}


/*==========================================
=============== Location Page ==============
==========================================*/


$("#location-id-mmp").on("mouseover",function(){
	$("#img-id-mmp").css("filter","blur(2px) brightness(60%)");
	$("#point-id-mmp").css("opacity","1");
});

$("#location-id-mmp").on("mouseout",function(){
	$("#img-id-mmp").css("filter","none");
	$("#point-id-mmp").css("opacity","0");
});

$("#location-id-mmp").on("click",function(){
		$("#location-popup iframe").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15275.844786274238!2d96.1550498!3d16.828281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f4ddafeb1222e0a!2sMyanmar+Plaza!5e0!3m2!1smy!2smm!4v1540723940058");
		$("#location-popup").css("display","block");
});


$("#location-id-ssq").on("mouseover",function(){
	$("#img-id-ssq").css("filter","blur(2px) brightness(60%)");
	$("#point-id-ssq").css("opacity","1");
});

$("#location-id-ssq").on("mouseout",function(){
	$("#img-id-ssq").css("filter","none");
	$("#point-id-ssq").css("opacity","0");
});

$("#location-id-ssq").on("click",function(){
		$("#location-popup iframe").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15279.919398568392!2d96.1585075!3d16.7776781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf629281949864a5c!2z4YCG4YCw4YC44YCc4YCxIOGAheGAgOGAveGAsg!5e0!3m2!1smy!2smm!4v1540726003467");
		$("#location-popup").css("display","block");
});


$("#location-id-cm").on("mouseover",function(){
	$("#img-id-cm").css("filter","blur(2px) brightness(60%)");
	$("#point-id-cm").css("opacity","1");
});

$("#location-id-cm").on("mouseout",function(){
	$("#img-id-cm").css("filter","none");
	$("#point-id-cm").css("opacity","0");
});

$("#location-id-cm").on("click",function(){
		$("#location-popup iframe").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15279.521384116975!2d96.1447283!3d16.7826276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa056b495f4b29597!2z4YCF4YCu4YC44YCQ4YCu4YC44YCZ4YCx4YCsIOGAheGAreGAlOGAuuGAguGAu-GAveGAlOGAuuGAuA!5e0!3m2!1smy!2smm!4v1540726166974");
		$("#location-popup").css("display","block");
});



/* ---------------- Location Popup ---------------- */

function closeLocationPopup(){
	document.querySelector(".div-location-popup").style.display = "none";
	document.querySelector("#location-popup iframe").src = "";
}


/*==============================================
============== About Us Page ===================
==============================================*/

/* ----------------- About Us Bar ----------------- */

$("#down-arrow-wwa-id").on("click",function(){
	$("#wwa-sub-bar-id").slideToggle(700);
});

$("#down-arrow-kitchen-id").on("click",function(){
	$("#kitchen-sub-bar-id").slideToggle(800);
});

$("#down-arrow-chefs-id").on("click",function(){
	$("#chefs-sub-bar-id").slideToggle(800);
});