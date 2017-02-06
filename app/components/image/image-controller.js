(function (){
	
	var is = new ImageService();


		new Vue({
			el: '#image',
			data:{
			},
			mounted: function(){
				is.getImage(this.setImage)
			},
			methods: {
				setImage:  function(image){
				var 	imageUrl = image.url
			  console.log(imageUrl)
			  document.getElementById("body").style.background += "url("+imageUrl+") no-repeat center center fixed"
			//   document.getElementById("body").style.background-size = "url("+imageUrl+") no-repeat";
				}
			}
		})		
}())


