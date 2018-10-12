module.exports = global.process = {
  version: "v7.1.0",
  umask: () => 18,
  cwd: () => "",
  nextTick: setImmediate,
  argv: ["react-native", "run-android", "your-app"],
  versions: {}
};
