(function (){
	
	var weatherService = new WeatherService();


		new Vue({
			el: '#weather',
			data:{
				weather: {},
				city: "",
				temp: 0
			},
			mounted: function(){
				weatherService.getWeather(this.setWeather)
			},
			methods: {
				setWeather: function(weather){
				this.weather = weather;
				this.city = weather.name
			},
			celsius: function(){
				console.log()
			}
			},
			computed: {
				displayWeather: function() {
					if(this.weather.main){
						x = this.weather.main.temp
						return {temp: ((9/5*(x - 273)) + 32).toFixed(0)+"°F"}
					}
					return {temp: 'loading'}
				}
			},
		})		
}())


