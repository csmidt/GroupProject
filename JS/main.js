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
				<h2>${todaysItem.item}<h2>
				<p class="description">${todaysItem.description}</p>
				<p>Price.......${todaysItem.price}</p>
				<ul class="indicators">
				<li>Allergies ${todaysItem.allergies}</li>
				<li>Favorite ${todaysItem.favorite}</li>
				<li>Spicy ${todaysItem.spicy}</li>
				<li>Vegan ${todaysItem.vegan}</li>
				</ul>
		`
		$(".todaysSpecial").html(deal)

	}

	 $(function(){
      $("#w3-content").slidesjs({
        width: 200,
        height: 200
      });
    });


/*

	$.get("https://json-data.herokuapp.com/restaurant/menu/1", function(data){
		console.log(data)
	})
	
	function displayMenu(choices) {

		var pickme =`
			<p>${choices.item}</p>
			<p>${choices.price}</p>
			<p>${choices.description}</p>
			<p>${choices.allergies}</p>
			<p>${choices.favorite}</p>
			<p>${choices.spicy}</p>
			<p>${choices.vegan}</p>
			`
		$("#tabs1-menu").html(pickme)
	}
*/
	


});
