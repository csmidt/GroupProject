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
					<li>${todaysItem.price}</li>
				</ul>
				<img id="scallops" src="images/scallops1.jpeg" />
				<p class="description">${todaysItem.description}</p>
				<ul class="indicators">
				<li> ${todaysItem.allergies ? '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>' : ''}</li>
				<li> ${todaysItem.favorite ? '<i class="fa fa-gratipay" aria-hidden="true"></i>' : '' }</li>
				<li> ${todaysItem.spicy ? '<i class="fa fa-fire" aria-hidden="true"></i>' : ''}</li>
				<li> ${todaysItem.vegan ? '<i class="fa fa-leaf" aria-hidden="true"></i>' : ''}</li>
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

		pickmeHTML += '<h2 class="menuSelections"> Our Selections </h3>'
		pickmeHTML += '<h2 class="sections">Appetizers</h2>';
		choices.appetizers.forEach(function(appetizer){
			// create appetizers html here
			pickmeHTML += 
			`
			<ul class="menuDisplay">
				<li class ="foodTitle">${appetizer.item}</li>
				<li class="price">.....................${appetizer.price}</li>
			</ul>
			<p class="thefood">${appetizer.description}</p>
			<ul class="symbolsApps">
				<li class="about">${appetizer.allergies ? '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>' : ''}</li>
				<li class="about">${appetizer.favorite ? '<i class="fa fa-gratipay" aria-hidden="true"></i>' : '' }</li>
				<li class="about">${appetizer.spicy ? '<i class="fa fa-fire" aria-hidden="true"></i>' : ''}</li>
				<li class="about">${appetizer.vegan  ? '<i class="fa fa-leaf" aria-hidden="true"></i>' : ''}</li>
			</ul>
			`
		})

		pickmeHTML += '<h2 class="sections">Entrees</h2>'
		choices.entrees.forEach(function(entrees){

			pickmeHTML += 
			`
			<ul class="menuDisplay">
				<li class ="foodTitle">${entrees.item}</li>
				<li class="price">.......................${entrees.price}</li>
			</ul>
			<p class="thefood">${entrees.description}</p>
			<ul class="symbolsEntrees">
				<li class="about">${entrees.allergies ? '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>' : ''}</li>
				<li class="about">${entrees.favorite ? '<i class="fa fa-gratipay" aria-hidden="true"></i>' : '' }</li>
				<li class="about">${entrees.spicy ? '<i class="fa fa-fire" aria-hidden="true"></i>' : ''}</li>
				<li class="about">${entrees.vegan ? '<i class="fa fa-leaf" aria-hidden="true"></i>' : ''}</li>
			</ul>
			`
		})

		pickmeHTML += '<h2 class="sections">Sides</h2>'
		choices.sides.forEach(function(sides){

			pickmeHTML += 
			`
			<ul class="menuDisplay">
				<li class ="foodTitle">${sides.item}</li>
				<li class="price">.........................${sides.price}</li>
			</ul>
			<p class="thefood">${sides.description}</p>
			<ul class="symbolsSides">
				<li class="about">${sides.allergies ? '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>' : ''}</li>
				<li class="about">${sides.favorite ? '<i class="fa fa-gratipay" aria-hidden="true"></i>' : '' }</li>
				<li class="about">${sides.vegan ? '<i class="fa fa-leaf" aria-hidden="true"></i>' : ''}</li>
			</ul>
			`
		})

		$("#tabs1-menu").html(pickmeHTML)
	}

	
	$("#tab-container").easytabs()
	$("#w3-content").cycle()


	$("#button").click(function(){
        $("#button").css("background-color", "red");
    })

	

});
