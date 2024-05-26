commands.rules.stopServer = [
  [
    [],
    function ($, e, t) {
      e.dim.broadcast("Stopping Server");
      console.log("STOPPING SERVER");
      setTimeout(function () {
        process.exit(0);
      }, 5000);
    },
  ],
];
