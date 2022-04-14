function knop(sw) {
    var game

    if (sw == 1) {
        game = "./assets/broken.png"
        $("#button1").hide()
        document.getElementById('button2').style = ""
    }

    else if (sw == 2) {
        game = "./assets/replaced.png"

        document.getElementById('screen').alt = "crash";
        $("#button2").hide()
        document.getElementById('button3').style = ""
    }

    else if (sw == 3) {
        game = "./assets/666.png"
        document.getElementById("tab").innerHTML = "666"
        $("#button3").hide()
        document.getElementById("title").innerHTML = "666"
        document.getElementById("style1").href = "./scripts/666.css"
    }

    else if (sw == 0) {
        var typeStart = Math.floor(Math.random() * 10)
        console.log(typeStart)

        if (typeStart === 1) {
            game = "./assets/block2.png"
        } else  game = "./assets/grass.png"
        document.getElementById('button1').style = ""
        $("#button0").hide()



    }
    document.getElementById('screen').src = game;
}


