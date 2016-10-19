$(document).ready(function(){


	$.get("https://json-data.herokuapp.com/restaurant/news/1", function(data){
		console.log(data)
		createNewsItem(data)
    })

	function createNewsItem(newsItem) {
		var htmlStr = `
		<div class="newsfeed">
			<h2>${newsItem.title}</h2>
			<p>${newsItem.post}</p>
		</div>
		`
		$("#newsfeed").html(htmlStr)
	}


	$.get("https://json-data.herokuapp.com/restaurant/special/1", function(special){
		 $.get("https://json-data.herokuapp.com/restaurant/menu/1", function(menu){
			showSpecial(menu, special.menu_item_id)
		 })
	})

	function showSpecial(menu, id){
		var todaysItem = menu.entrees.filter(function(menuItem) {
			if(menuItem.id === id) {
				return true
			}
		})[0]

		var deal = `
				<ul class="specialPrice">
					<li>${todaysItem.item}</li>
					<li>Price.......${todaysItem.price}</li>
				</ul>
				<p class="description">${todaysItem.description}</p>
				<ul class="indicators">
				<li>Allergies ${todaysItem.allergies}</li>
				<li>Favorite ${todaysItem.favorite}</li>
				<li>Spicy ${todaysItem.spicy}</li>
				<li>Vegan ${todaysItem.vegan}</li>
				</ul>
		`
		$(".todaysSpecial").html(deal)

	}



	$.get("https://json-data.herokuapp.com/restaurant/menu/1", function(data){
		console.log('menu', data)
		displayMenu(data)
	})
	
	function displayMenu(choices) {
		var pickmeHTML = '';

		pickmeHTML += '<h2 class="sections">Appetizers</h2>';
		choices.appetizers.forEach(function(appetizer){
			// create appetizers html here
			pickmeHTML += 
			`
			<h2 class ="foodTitle">${appetizer.item}</h2>
			<p  class=$price>${appetizer.price}</p>
			<p class="thefood">${appetizer.description}</p>
			<ul class="symbols">
			<li class="about">${appetizer.allergies}</li>
			<li class="about">${appetizer.favorite}</li>
			<li class="about">${appetizer.spicy}</li>
			<li class="about">${appetizer.vegan}</li>
			</ul>
			`
		})

		pickmeHTML += '<h2 class="sections">Entrees</h2>'
		choices.entrees.forEach(function(entrees){

			pickmeHTML += 
			`

			<h2 class ="foodTitle">${entrees.item}</h2>
			<p class=$price>${entrees.price}</p>
			<p class="thefood">${entrees.description}</p>
			<ul class="symbols">
			<li class="about">${entrees.allergies}</li>
			<li class="about">${entrees.favorite}</li>
			<li class="about">${entrees.spicy}</li>
			<li class="about">${entrees.vegan}</li>
			</ul>
			`
		})

		pickmeHTML += '<hs class="sections>Sides</h2>'
		choices.sides.forEach(function(sides){

			pickmeHTML += 
			`
			<h2 class ="foodTitle">${sides.item}</h2>
			<p class=$price>${sides.price}</p>
			<p class="thefood">${sides.description}</p>
			<ul class="symbols">
			<li class="about">${sides.allergies}</li>
			<li class="about">${sides.favorite}</li>
			<li class="about">${sides.vegan}</li>
			</ul.>
			`
		})

		$("#tabs1-menu").html(pickmeHTML)
	}

	
	$("#tab-container").easytabs()
	$("#w3-content").cycle()

	$(function (){
		$("#datepicker").datepicker();
	});

});
