var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var AS = createGroup();


for (var x = 25; x < 400; x+=60) {
for (var y = 25; y < 200; y+=60) {
var boxes = createSprite(x, y,50,50);
boxes.shapeColor=rgb(randomNumber(120,220),randomNumber(78,190),randomNumber(38,120));
AS.add(boxes);
       
  }
    
  
}
console.log(AS.length);

var ball = createSprite(170,340,20,20);
ball.shapeColor='red';

var computerpaddle= createSprite(180,360,100,20);
computerpaddle.shapeColor='blue';



var Score = 0;
var chances=3;
var gamestate='start';





function draw() {
background("white");
 drawSprites(); 
 textSize(30);
 text("Score "+Score, 30, 320);
 text("Life "+chances, 200, 320);
 if (gamestate==='start') {
   text("Press enter to start the game",10, 230);
   
 }
 
 
 
if (keyDown("enter")&&gamestate==='start') {
ball.velocityX=4;
ball.velocityY=-4;
gamestate='play';
}
if (gamestate==='play') {
  computerpaddle.x=World.mouseX;
if (ball.isTouching(bottomEdge)) {
  ball.x=170;
  ball.y=340;
  ball.setVelocity(0,0);
  chances-=1;
  gamestate='start';
  
}
if (chances===0) {
  gamestate='end';
}


}
if (gamestate==='end') {
 text("Oh! no you loose the game", 0, 240);
   
}
createEdgeSprites();
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(topEdge);
ball.bounceOff(computerpaddle);






for (var i = 0; i < AS.length; i++) {
if (ball.isTouching(AS.get(i))) {
AS.get(i).destroy();
Score+=1;
        
  }
    
}

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
