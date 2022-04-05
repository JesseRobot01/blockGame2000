function knop(sw) {
    var game
    
    if (sw== 1) {
        game = "./assets/broken.png"
        $("#button1").hide()
        document.getElementById('button2').style = ""
    }

    else if(sw== 2) {
        game = "./assets/replaced.png"
      
        document.getElementById('screen').alt = "crash";
        $("#button2").hide()
        document.getElementById('button3').style = ""
    }

    else if (sw==3){
        game="./assets/666.png"
        document.getElementById('dummy').style=""
        $("#button3").hide()
    }
    document.getElementById('screen').src = game;
}