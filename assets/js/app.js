//// Spinning Animation ////
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

//// Loading Animation ////
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

//// Flying Bird Animation ////

const birdData = {
  frames: {
    bird1: {
      frame: { x: 0, y: 0, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird2: {
      frame: { x: 240, y: 0, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird3: {
      frame: { x: 480, y: 0, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird4: {
      frame: { x: 720, y: 0, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird5: {
      frame: { x: 960, y: 0, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird6: {
      frame: { x: 0, y: 314, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird7: {
      frame: { x: 240, y: 314, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird8: {
      frame: { x: 480, y: 314, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird9: {
      frame: { x: 720, y: 314, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird10: {
      frame: { x: 960, y: 314, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird11: {
      frame: { x: 0, y: 628, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird12: {
      frame: { x: 240, y: 628, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird13: {
      frame: { x: 480, y: 628, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird14: {
      frame: { x: 720, y: 628, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird15: {
      frame: { x: 960, y: 628, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird16: {
      frame: { x: 0, y: 942, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird17: {
      frame: { x: 240, y: 942, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird18: {
      frame: { x: 480, y: 942, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird19: {
      frame: { x: 720, y: 942, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
    bird20: {
      frame: { x: 960, y: 942, w: 240, h: 314 },
      sourceSize: { w: 240, h: 314 },
      spriteSourceSize: { x: 0, y: 0, w: 240, h: 314 }
    },
  },
  meta: {
    image: '/assets/images/bird_spritesheet.png',
    format: 'RGBA8888',
    size: { w: 1200, h: 1256 },
    scale: 1
  },
  animations: {
    bird: ['bird1', 'bird2', 'bird3', 'bird4', 'bird5', 'bird6', 'bird7', 'bird8', 'bird9', 'bird10', 'bird11', 'bird12', 'bird13', 'bird14', 'bird15', 'bird16', 'bird17', 'bird18', 'bird19', 'bird20'] //array of frames by name
  }
};

async function main() {
  const spritesheet = new PIXI.Spritesheet(
    PIXI.Texture.from(birdData.meta.image),
    birdData
  );

  await spritesheet.parse();

  // spritesheet is ready to use!
  const bird = new PIXI.AnimatedSprite(spritesheet.animations.bird);

  // Create a new PIXI application
  const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xff99bb,
  });

  bird.x = app.view.width / 2;
  bird.y = app.view.height / 2;
  bird.anchor.set(0.5);
  bird.scale.set(1.5);
  bird.animationSpeed = 0.1;
  // Add the PIXI application view to the DOM
  document.querySelector(".pixiCanvas").appendChild(app.view);

  // set the animation speed
  bird.animationSpeed = 0.25;

  // play the animation on a loop
  bird.play();

  // add it to the stage to render
  app.stage.addChild(bird);

  // mouse interaction
  app.stage.interactive = true;
  const moveBird = (event) => {
    bird.x = event.data.global.x;
    bird.y = event.data.global.y;

    // center the bird when the mouse is out of canvas
    if (bird.x < 0) {
      bird.x = app.view.width / 2;
    }
    if (bird.x > app.view.width) {
      bird.x = app.view.width / 2;
    }
    if (bird.y < 0) {
      bird.y = app.view.height / 2;
    }
    if (bird.y > app.view.height) {
      bird.y = app.view.height / 2;
    }
  };
  app.stage.on("pointermove", moveBird);
}

main();