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
    image: 'hero_spritesheet.png',
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
  bird.animationSpeed = 0.1666;

  // play the animation on a loop
  bird.play();

  // add it to the stage to render
  app.stage.addChild(bird);
}

main();
