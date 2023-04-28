const app = new PIXI.Application({ background: '#1099bb' });
document.querySelector(".spinning").appendChild(app.view);

// create a new Sprite from an image path
const spinningSpriteCan = PIXI.Sprite.from('/assets/images/sprite.png');

// center the sprite's anchor point
spinningSpriteCan.anchor.set(0.5);

// move the sprite to the center of the screen
spinningSpriteCan.x = app.screen.width / 2;
spinningSpriteCan.y = app.screen.height / 2;

app.stage.addChild(spinningSpriteCan);

// Listen for animate update
app.ticker.add((delta) => {
    // just for fun, let's rotate sprite can a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    spinningSpriteCan.scale.set(0.5);
    spinningSpriteCan.rotation += 0.01 * delta;
});

//////////////////////////////////////////////////////

// Create a new PixiJS Application
const app_ = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x10ffbb,
  resolution: window.devicePixelRatio || 1,
});

// Add the canvas to the DOM
document.querySelector(".loading").appendChild(app_.view);

// Create the sprite and add it to the stage
let sprite = PIXI.Sprite.from('/assets/images/loading.png');

// center the sprite's anchor point
sprite.anchor.set(0);

// move the sprite to the center of the screen
sprite.x = app_.screen.width / 2;
sprite.y = app_.screen.height / 2;
app_.stage.addChild(sprite);

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app_.ticker.add((delta) => {
  elapsed += delta;
  sprite.x = 400.0 + Math.cos(elapsed / 50.0) * 100.0;
  sprite.y = 300.0 + Math.sin(elapsed / 50.0) * 100.0;
  sprite.rotation += 0.1 * delta;
});
