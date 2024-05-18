//THE SANCTUARY - - - -  Reaching the stars...
!function() {
  const dim = dimension.create({
    maxWormholes: 6,
    mapSize: 3750,                        // mapsize
    name: 'sanctuary',                 // internal name of dim
    type: 'ffa',                       // leave this
    freeJoin: false,                       // whether tank can join from server select
    allowScale: false,                     // allow use of /mapsize command
    removeFallens: true,                  // remove tanks that go fallen
    darkness: 0,
    displayName: 'Reach for the Stars',
    displayRadiant: 0,                  // make color radiant on server select
    displayColor: 6,                     // color on server select
    walls: [                              // [ [x, y, w, h] ]
      [0, 0, 1000, 1000, 6],[3000, 3500, 2000, 1500],[3500, 3000, 1500, 2000],[-3500, 3000, 1500, 2000],[-3000, 3500, 2000, 1500],[3000, -3500, 2000, 1500],[3500, -3000, 1500, 2000],[-3000, -3500, 2000, 1500],[-3500, -3000, 1500, 2000]          // blue team base
],
    gates: [],
    background: {                         // background color
      r: 0,
      g: 0,
      b: 0
    },
    grid: {                               // grid color
      r: 50,
      g: 50,
      b: 50
    },
    gridSize: 25,
    maxPolygonSides: 8,
    maxPolygonCount: 0,
    spawnPlayer: function(team, tank) {
      if (tank.team == !8) {tank.invincible = false             // remove spawn invincibility
      tank.invincibleTime = 0             // remove spawn invincibility timer
      tank.team = 6}
      setTimeout(function() {
        if(tank.ws.sendPacket) {          // send a notification
          tank.ws.sendPacket('announcement', 'Welcome.')
        }
      })
     //return [0,0]
      return [Math.sin(defender.d + (4 * (1 - 2 * Math.random()) * 120))*500, Math.cos(defender.d + (4 * (1 - 2 * Math.random()) * 120))*500]                       // spawn all tanks at center
    }
  })
  
    const defender = generator.tank({          // create a tank
      dim: dim,
      x: 0,
      y: 0,
      name: 'Prime Celestial',                   // display name
      weapon: 'ganymede',                     // weapon
      body: 'andromeda',                   // body
      score: 10e+18,
      static: true,                       // make bot unpushable and unable to gain xp
      team: 6,
      ai: 'defender'
    })



    
    
  const sanctuaryWormholeGenerator = {
            count: function (e, t) {
                let a = [];
                for (let n in e.wormholes) {
                    let i = e.wormholes[n];
                    i.type === t && a.push(i);
                }
                return a;
            },
            main: function (e) {
                setInterval(function () {
                    if (0.3 > Math.random()) {
                        let t = sanctuaryWormholeGenerator.count(e, 0),
                            a = 0;
                        if (Math.random() < (a = 0 === t.length ? 0.5 : 2 / (3 + t.length))) {
                            let n = e.mapSize - 2e3,
                                i = (2 * Math.random() - 1) * n,
                                l = (2 * Math.random() - 1) * n;
                            const destination = 'ffa'
                            //console.log(destination + ' ' + dimension.dims[destination].displayColor);
                            generator.wormhole({
                                x: i,
                                y: l,
                                size: 100,
                                ruptured: true,
                                color: dimension.dims[destination].displayColor,
                                type: 0,
                                time: 30 + 60 * Math.random(),
                                dim: e,
                                action: function (e) {
                                    let t = tankData.bodies[e.body] || {};
                                    6 === e.team || t.celestial || e.ascend(),
                                        7 !== e.team ? dimension.sendTankTo({ tank: e, dim: destination }) : dimension.sendTankTo({ tank: e, dim: "ffa1" });
                                }
                            });
                        }
                    }
                }, 1e3);
            },
        };
  sanctuaryWormholeGenerator.main(dim)
}()
