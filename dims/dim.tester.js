!(function () {
  const dim = dimension.create({
    mapSize: 8000, // mapsize
    name: "test", // internal name of dim
    type: "4teams", // leave this
    freeJoin: true, // whether tank can join from server select
    allowScale: true, // allow use of /mapsize command
    removeFallens: false, // remove tanks that go fallen
    displayName: "UwUOwO:3c>w<!!", // name of dim shown on server select
    displayRadiant: 0.3, // make color radiant on server select
    displayColor: -6, // color on server select
    walls: [
      // [ [x, y, w, h] ]
      [-5800, -5200, 200, 800],
      [-5200, -4600, 400, 200],
      [-5000, -4200, 200, 200],
      [-5000, -5600, 200, 400],
      [-4800, -2600, 800, 200],
      [-4200, -5400, 600, 200],
      [-3800, -4800, 200, 400],
      [-4200, -4000, 200, 800],
      [-5000, -3400, 600, 200],
      [-4200, -2000, 200, 400],
      [-4600, -1800, 200, 200],
      [-5400, -1000, 200, 1400],
      [-4800, 200, 400, 200],
      [-4400, -200, 400, 200],
      [-4200, -800, 200, 400],
      [-4600, -1000, 200, 200],
      [-4400, 1000, 1600, 200],
      [-3800, 600, 200, 200],
      [-4200, 1400, 200, 200],
      [-3200, -3400, 400, 200],
      [-3000, -4000, 200, 400],
      [-2600, -4400, 200, 400],
      [-2200, -4800, 200, 400],
      [-1800, -5200, 200, 400],
      [-1400, -5600, 200, 400],
      [-5000, 1800, 200, 200],
      [-5400, 2200, 200, 200],
      [-5800, 4200, 200, 1800],
      [-5400, 3000, 200, 200],
      [-4600, 2200, 200, 200],
      [-4200, 2600, 200, 200],
      [-3800, 2200, 200, 200],
      [-3400, 1800, 200, 200],
      [-3000, 2200, 200, 200],
      [-2600, 3400, 200, 1000],
      [-3000, 3000, 200, 200],
      [-4200, 3000, 600, 200],
      [-3200, -1800, 400, 200],
      [-3400, -2400, 200, 400],
      [-2800, -2600, 400, 200],
      [-2200, -600, 200, 2600],
      [-2000, -3400, 400, 200],
      [-1600, -3800, 400, 200],
      [-1200, -4200, 400, 200],
      [-800, -4600, 400, 200],
      [-400, -5000, 400, 200],
      [0, -5400, 400, 200],
      [1000, -5000, 200, 600],
      [600, -4400, 200, 400],
      [200, -4000, 200, 400],
      [-200, -3600, 200, 400],
      [-600, -3200, 200, 400],
      [-1000, -2800, 200, 400],
      [-1400, -2200, 200, 600],
      [-1000, -1600, 200, 400],
      [-1800, -800, 200, 400],
      [1000, -600, 2600, 200],
      [0, -1000, 400, 200],
      [0, -2200, 400, 200],
      [200, -2600, 200, 200],
      [600, -1400, 600, 200],
      [1000, -2400, 200, 800],
      [1400, -3400, 200, 600],
      [3400, -5400, 1800, 200],
      [5400, -5800, 600, 200],
      [5400, -4600, 600, 200],
      [5800, -4200, 200, 200],
      [3200, -4600, 1200, 200],
      [2200, -4000, 200, 400],
      [2600, -3400, 200, 200],
      [2800, -3800, 400, 200],
      [3600, -3600, 400, 400],
      [3800, -2800, 200, 400],
      [4400, -2600, 400, 200],
      [5000, -2200, 600, 200],
      [5600, -1800, 400, 200],
      [-4000, 5800, 1600, 200],
      [-2600, 5200, 200, 400],
      [-4000, 5000, 1200, 200],
      [-5000, 4600, 200, 200],
      [-4200, 4000, 200, 400],
      [-3400, 4000, 200, 400],
      [-600, 5000, 1400, 200],
      [-600, 4600, 200, 200],
      [-400, 4200, 800, 200],
      [2000, 5800, 1200, 200],
      [3800, 5800, 200, 200],
      [4800, 5800, 400, 200],
      [5200, 5400, 400, 200],
      [5600, 4800, 400, 400],
      [4800, 3800, 1200, 200],
      [3400, 3400, 600, 200],
      [3400, 3000, 200, 200],
      [3000, 3800, 200, 200],
      [4600, 4400, 200, 400],
      [4000, 4800, 400, 400],
      [3000, 4800, 200, 400],
      [1800, 4600, 600, 600],
      [5800, 1000, 200, 2600],
      [5400, -600, 200, 200],
      [5600, -3000, 400, 200],
      [5000, -3400, 600, 200],
      [4600, -3800, 200, 200],
      [2600, -2600, 600, 200],
      [3000, -2200, 200, 200],
      [1800, -1800, 200, 200],
      [3200, -1400, 1600, 200],
      [4400, -600, 400, 200],
      [4600, -1000, 200, 200],
      [3200, -1800, 800, 200],
      [3200, -200, 400, 200],
      [4200, 200, 1000, 200],
      [5000, 1200, 200, 800],
      [4600, 2400, 200, 800],
      [5000, 3000, 200, 200],
      [4200, 2200, 200, 200],
      [4000, 1000, 400, 200],
      [3600, 1400, 400, 200],
      [3400, 2200, 200, 200],
      [800, 1800, 2800, 200],
      [-1400, 800, 200, 800],
      [-1000, 200, 200, 200],
      [-1000, 1000, 200, 200],
      [200, 200, 600, 200],
      [200, 1000, 600, 200],
      [200, 600, 200, 200],
      [200, 1400, 200, 200],
      [1800, 1000, 600, 200],
      [1800, 200, 600, 200],
      [1800, 600, 200, 200],
      [1800, 1400, 200, 200],
      [-1400, 3000, 200, 600],
      [-200, 3000, 200, 600],
      [400, 3400, 400, 200],
      [200, 2600, 200, 200],
      [600, 2400, 200, 400],
      [1200, 3000, 800, 200],
      [1400, 3400, 200, 200],
      [1400, 2600, 200, 200],
      [-3200, -1000, 400, 200],
      [-3400, -400, 200, 400],
      [-3000, 0, 200, 400],
      [-2600, 200, 200, 200],
      //      [-125, -125, 125, 125, 1], // blue team base
      //      [125, -125, 125, 125, 2], // red team base
      //      [-125, 125, 125, 125, 3], // green team base
      //      [125, 125, 125, 125, 4], // purple team base
    ],
    gates: [
//      [1, 500, -500, 1, 250, false, 0], // radiant gate
//      [0, -375, -375, 1, 125, false, 0], // ascention gate
//      [2, -625, -625, 0, 125, false, 0], // one way gate
//      [3, -875, -875, 1, 125, false, 0], // sanctuary gate
    ],
    background: {
      // background color
      r: 205,
      g: 205,
      b: 205,
    },
    grid: {
      // grid color
      r: 200,
      g: 200,
      b: 200,
    },
    gridSize: 25,
    maxPolygonSides: 100,
    maxPolygonCount: 50,
    spawnPlayer: function (team, tank) {
      tank.invincible = false; // remove spawn invincibility
      tank.invincibleTime = 0; // remove spawn invincibility timer
      setTimeout(function () {
        if (tank.ws.sendPacket) {
          // send a notification
          tank.ws.sendPacket(
            "announcement",
            "im going to torture you. Type /kys to get command access. also kill yourself you swine."
          );
        }
      });
      return [0, 0]; // spawn all tanks at center
    },
  });

  generator.wormhole({
    // create a portal
    x: 2000,
    y: 100,
    size: 75,
    type: 2,
    dim: dim,
    action: function (tank) {
      // executed on tank when hit
      tank.radiant++ + 2; // increase tank radiance by 1
      dimension.sendTankTo({
        // send to dim
        tank: tank,
        dim: "test",
      });
    },
  });

  setTimeout(function () {
    generator.polygon({
      // spawn a polygon
      x: 5000,
      y: 4500,
      d: 2 * Math.PI * Math.random(), // direction polygon initially points toward
      sides: -1, // internal for tetrahedron
      dim: dim,
      radiant: 10,
    });

    const bot = generator.tank({
      // create a tank
      dim: dim,
      x: -1000,
      y: 0,
      name: "hellbent fallen.", // display name
      weapon: "node", // weapon
      body: "base", // body
      score: 1e11,
      radiant: 0,
      static: false, // make bot unpushable and unable to gain xp
      team: 8, // 8 is yellow team
    });
    bot.firing = true; // make bot shoot
    let passive = false;
/*    setInterval(function () {
      bot.passive = passive = !passive; // toggle passive every second
    }, 1000 ); */ // 1 second delay
    setInterval(function () {
      bot.d += 0.0; // rotate at 1 radian per second
    }, 100);
  }, 1000);
})();

//Glitch Project https://glitch.com/~zeras-server-of-despair-agony-and-anguish