class Counter{

    constructor(){
        this.count=0;
        this.interval=null;
    }

    start(){
        if(!this.interval){
            this.interval = setInterval(()=>{
                this.count++;
                this.render();
            },1000)
        }
    }
    stop(){
        if(this.interval){
            clearInterval(this.interval);
            this.interval=null;
        }
    }
    increment(){    
        this.stop();
        this.count++;
        this.render();

    }
    decrement(){
        if(this.count>0){
            this.stop();
            this.count--;
            this.render();
        }
        
    }
    render(){
        document.getElementById(`count`).innerText=this.count;
    }
}
const counter = new Counter();

document.getElementById(`startStopBtn`).addEventListener('click',function(){
    if(this.textContent === "START"){
        counter.start();
        this.textContent = 'STOP';
    }
    else{
        counter.stop();
        this.textContent='START';
    }

})
document.getElementById(`incrementBtn`).addEventListener('click',function(){
    counter.increment();
});
document.getElementById(`decrementBtn`).addEventListener('click',function(){
    counter.decrement();
})
