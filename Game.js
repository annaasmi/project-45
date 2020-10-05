class Game{
    constructor(){

    }

    game1(){
        
     textSize(15);
     fill("black");
     text("Change Character",displayWidth - 1500,70);
    
     sel = createSelect();
     sel.position(displayWidth-1500,80)
     sel.option('player 1');
     sel.option('player 2');
     sel.option('player 3');
     sel.option('player 4');
    
    a1 = createSprite(200,650,5,5);
    a1.shapeColor = "red";
    a1.scale = 0.8;
    }

    game2(){

        textSize(15);
        fill("black");
        text("Change Character",displayWidth - 1500,70);

        sel = createSelect();
        sel.position(displayWidth-1500,80)
        sel.option('player 1');
        sel.option('player 2');
        sel.option('player 3');
        sel.option('player 4');

        a2 = createSprite(200,630,5,5);
        a2.shapeColor = "blue";
        a2.scale = 0.8;
    }

    game3(){

    textSize(15);
        fill("black");
        text("Change Character",displayWidth - 1500,70);

        sel = createSelect();
        sel.position(displayWidth-1500,80)
        sel.option('player 1');
        sel.option('player 2');
        sel.option('player 3');
        sel.option('player 4');

        
        a3 = createSprite(200,650,15,15);
        a3.shapeColor = "black";
        a3.scale = 0.8;
    }

    game4(){

        textSize(15);
        fill("black");
        text("Change Character",displayWidth - 1500,70);

        sel = createSelect();
        sel.position(displayWidth-1500,80)
        sel.option('player 1');
        sel.option('player 2');
        sel.option('player 3');
        sel.option('player 4');

        
        a4 = createSprite(200,790,10,10);
        a4.shapeColor = "brown";
        a4.scale = 0.8;
    }
}