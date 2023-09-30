let inputs = document.querySelectorAll("input");
function placeOrder(){
    
    setTimeout(function(){
        new Promise(function(resolve,reject){
                document.getElementById("main").style.display='none';
                document.getElementById("hidden").style.display='block';
                
                resolve("Promise Resolved");
            
            
        }).then(function(res){
            console.log(res);
        }) 
    },2000)

}
