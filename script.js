var score=0;
let jumped=false;
document.onkeydown=function(e){
    // console.log('hi');
    // console.log("value entered",e.key);
    if(e.key=="w"){
        dino=document.querySelector('.dino')
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove("animateDino")},700);
            jumped=true;
        }
        if(e.key=="d"){
            dino=document.querySelector('.dino')
            dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            console.log(window.getComputedStyle(dino,null));
            dino.style.left=dx+112 +"px";
            setTimeout(()=>{
                dino.classList.remove("animateDino")},700);
            }
            else if(e.key=="a"){
                dino=document.querySelector('.dino');
                dj=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
                dino.style.left=(dj-112)+"px";
                setTimeout(()=>{
                    dino.classList.remove("animateDino")},700);
                }
                
            }

    
    setInterval(()=>{
        dino=document.querySelector('.dino');
        gameOver=document.querySelector('.gameOver');
        obstacle=document.querySelector('.obstacle');

        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

        ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
        oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
        
        

        offsetX=Math.abs(dx-ox);
        offsetY=Math.abs(dy-oy);
        console.log(offsetX);
        console.log(offsetY);
        


        if(offsetX<130 && offsetY<80){
            gameOver.style.visibility='visible';
           dino.classList.remove('dino');
           obstacle.classList.remove('obstacle');
           alert(' "GAMEOVER"\n Your Score:'+ score);
        }else{
            //these new changes make us help in updating score based on jumps which is previously based on time .
            if(jumped){
                score+=1;
                updateScore(score);
                jumped=false;
            }
        }
        

    },100);
    function updateScore(score){
        scoreCont=document.querySelector('.scoreCont');
       scoreCont.innerHTML='Your Score :'+score;
    }
