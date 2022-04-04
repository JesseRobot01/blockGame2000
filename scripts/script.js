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
    }

    document.getElementById('screen').src = game;
}