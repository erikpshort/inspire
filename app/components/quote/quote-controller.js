(function (){
	
	var qs = new QuoteService();


		new Vue({
			el: '#quote',
			data:{
				quote: '',
                message: 'Hello bro',

			},
			mounted: function(){
				qs.getQuote(this.setQuote)
			},
			methods: {
				setQuote:  function(q){
              this.quote ='"' + q.quote + '"'
              this.message = 'The Author of this quote is: "' + q.author + '"'
			//   document.getElementById("body").style.background += "url(""+imageUrl+") no-repeat center center fixed"
			//   document.getElementById("body").style.background-size = "url("+imageUrl+") no-repeat";
				}
			}
		})		
}())

