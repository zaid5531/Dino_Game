score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('go.mp3');
setTimeout(() => {
    audio.play();
},2000);
document.onkeydown = function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(dx-ox);
    offSetY = Math.abs(dy-oy);
    console.log(offSetX,offSetY);
    if(offSetX< 100 && offSetY<53){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offSetX<100 && cross){
        score+=10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animationDuration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
    }
}, 100);

function updateScore(score){
    scoreCont.innerHTML = "Your Score : " +score
}