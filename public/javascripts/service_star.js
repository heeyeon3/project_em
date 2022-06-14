$(function(){

    
    window.addEventListener("scroll", (e) => { 
		

        let scrollLocation = document.documentElement.scrollTop; 
        console.log(scrollLocation)
        $('#header').attr("style","background-color:#FFFFFF;")
        if(scrollLocation != 0){
            $('#header').attr("style","background-color:#FFFFFF;")
        }else{
            $('#header').attr("style","background-color: transparent;")
        }
	});
})