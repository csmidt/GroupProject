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
				<p>${todaysItem.price}</p>
				<p>${todaysItem.description}</p>
				<p>${todaysItem.allergies}</p>
				<p>${todaysItem.favorite}</p>
				<p>${todaysItem.spicy}</p>
				<p>${todaysItem.vegan}</p>
			
		`
		$(".todaysSpecial").html(deal)

	}





	 function dailySpecial(menu, id){
	 	console.log(menu)
	 	console.log(id)
	 }


});
