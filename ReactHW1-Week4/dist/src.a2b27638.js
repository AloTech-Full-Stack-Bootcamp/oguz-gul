// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.series = void 0;
var series = [{
  id: "1",
  name: "Friends",
  genre: ["Comedy"],
  isCurrent: true
}, {
  id: "2",
  name: "Game of Thrones",
  genre: "Sci-Fi"
}, {
  id: "3",
  name: "Black Mirror",
  genre: ["Sci-Fi"],
  isWatched: true,
  finishedDate: "09.09.2019"
}, {
  id: "4",
  name: "True Detective",
  genre: ["Crime", "Comedy"]
}, {
  id: "5",
  name: "False Detective :)",
  genre: ["Crime"]
}, {
  id: "6",
  name: "Chernobyl",
  genre: ["Crime"]
}, {
  id: "7",
  name: "The Handmaid's Tale",
  genre: ["Crime"]
}, {
  id: "8",
  name: "Breaking Bad",
  genre: ["Crime"],
  isWatched: true,
  finishedDate: "09.09.2018"
}];
exports.series = series;
},{}],"src/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fancyLogSeriesReport = exports.echo = void 0;
exports.printStats = printStats;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* export function printNumbers(watched, unwatched, total) {
  return `✅ ${watched} | ❌ ${unwatched} 📒 ${total}`;
} */
function printStats(watched, unwatched, total) {
  return "\u2705 ".concat(watched, " watched, \u274C ").concat(unwatched, " unwatched, \uD83D\uDCD2 ").concat(total, " total");
}

var fancyLogSeriesReport = function fancyLogSeriesReport(serieObj) {
  // NOT: Tüm objeyi bu şekilde pass etmek iyi bir pratik değil!
  var numberOfWatched = serieObj.numberOfWatched,
      numberOfUnWatched = serieObj.numberOfUnWatched,
      series = serieObj.series;
  var lastSerie = serieObj.lastSerie.name,
      currentSerie = serieObj.currentSerie.name,
      nextSerie = serieObj.nextSerie.name;
  console.log("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");
  echo.log("️️⬜ Last Watched       ", echo.asAlert(lastSerie));
  echo.log("️⬜ Currently Watching ", echo.asWarning(currentSerie));
  echo.log("️️⬜ Next TV Serie      ", echo.asAlert(nextSerie));
  echo.log("⬜ Stats              ", printStats(numberOfWatched, numberOfUnWatched, series.length));
  console.log("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫▫▫️");
  console.log();
};

exports.fancyLogSeriesReport = fancyLogSeriesReport;

var echo = function () {
  var queue = [];
  var ECHO_TOKEN = {};
  var RESET_INPUT = "%c ";
  var RESET_CSS = ""; // Attach formatting utility method.

  function alertFormatting(value) {
    queue.push({
      value: value,
      css: "display: inline-block ; background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
    });
    return ECHO_TOKEN;
  } // Attach formatting utility method.


  function warningFormatting(value) {
    queue.push({
      value: value,
      css: "display: inline-block ; background-color: gold ; color: black ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
    });
    return ECHO_TOKEN;
  } // I provide an echo-based proxy to the given Console Function. This uses an
  // internal queue to aggregate values before calling the given Console
  // Function with the desired formatting.


  function using(consoleFunction) {
    function consoleFunctionProxy() {
      // As we loop over the arguments, we're going to aggregate a set of
      // inputs and modifiers. The Inputs will ultimately be collapsed down
      // into a single string that acts as the first console.log parameter
      // while the modifiers are then SPREAD into console.log as 2...N.
      // --
      // NOTE: After each input/modifier pair, I'm adding a RESET pairing.
      // This implicitly resets the CSS after every formatted pairing.
      var inputs = [];
      var modifiers = [];

      for (var i = 0; i < arguments.length; i++) {
        // When the formatting utility methods are called, they return
        // a special token. This indicates that we should pull the
        // corresponding value out of the QUEUE instead of trying to
        // output the given argument directly.
        if (arguments[i] === ECHO_TOKEN) {
          var item = queue.shift();
          inputs.push("%c" + item.value, RESET_INPUT);
          modifiers.push(item.css, RESET_CSS); // For every other argument type, output the value directly.
        } else {
          var arg = arguments[i];

          if (_typeof(arg) === "object" || typeof arg === "function") {
            inputs.push("%o", RESET_INPUT);
            modifiers.push(arg, RESET_CSS);
          } else {
            inputs.push("%c" + arg, RESET_INPUT);
            modifiers.push(RESET_CSS, RESET_CSS);
          }
        }
      }

      consoleFunction.apply(void 0, [inputs.join("")].concat(modifiers)); // Once we output the aggregated value, reset the queue. This should have
      // already been emptied by the .shift() calls; but the explicit reset
      // here acts as both a marker of intention as well as a fail-safe.

      queue = [];
    }

    return consoleFunctionProxy;
  }

  return {
    // Console(ish) functions.
    log: using(console.log),
    warn: using(console.warn),
    error: using(console.error),
    trace: using(console.trace),
    group: using(console.group),
    groupEnd: using(console.groupEnd),
    // Formatting functions.
    asAlert: alertFormatting,
    asWarning: warningFormatting
  };
}();

exports.echo = echo;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesTracker = SeriesTracker;

var _data = require("./data.js");

var _utils = require("./utils.js");

function SeriesTracker(series) {
  var _this = this;

  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie); //(If a serie has been watched) {

    if (serie.isWatched) {
      // Update the count of watched series: "numberOfWatched"
      this.numberOfUnWatched += 1; // Check for "lastSerie" property, set if we don't

      if (!this.lastSerie) {
        this.lastSerie = serie;
      } else {
        // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
        if (new Date(this.lastSerie.finishedDate) < new Date(serie.finishedDate)) {
          // set "lastSerie" prop to "serie" object.
          this.lastSerie = serie;
        }
      }
    } // If a serie hasn't been watched:


    if (serie.isWatched) {} else {
      this.numberOfUnWatched += 1; // Check if serie has "isCurrent" prop

      if (serie.isCurrent) {
        // Check if we have a "currentSerie" property. Set if we don't.
        if (!this.currentSerie) {
          this.currentSerie = serie;
        } // Check if we have a "nextSerie" property as well - if we didn't

      } else if (!this.nextSerie) {
        // set the .currentSerie property, set the .nextSerie property.
        this.nextSerie = serie;
      }
    }
  }; //check to see if we have series to process


  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    series.forEach(function (serie) {
      //Use the .add function to handle adding series, so we keep counts updated.
      _this.add(serie);
    });
  }

  this.finishSerie = function () {
    var _this2 = this;

    // find and update currently watching serie in "this.series" array
    this.series.forEach(function (serie, index) {
      // update "lastSerie" with the finished one
      serie.isWatched = true;
      serie.isCurrent = false;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = "".concat(dd, "/").concat(mm, "/").concat(yyyy);
      serie.finishDate = today;
      _this2.lastSerie = serie; // update "numberOfWatched" and "numberOfUnWatched" props

      _this2.numberOfWatched += 1;
      _this2.numberOfUnWatched -= 1; // set "currentSerie" with the next one

      if (serie === _this2.nextSerie) {
        _this2.currentSerie = serie;
        serie.isCurrent = true;
      } // set new nextSerie value with the next one which has not been watched.


      if (_this2.nextSerie === _this2.currentSerie) {
        if (!serie.isWatched && !serie.isCurrent) {
          _this2.nextSerie = serie;
        }
      }
    });
  };

  this.printSeriesReport = function () {
    (0, _utils.fancyLogSeriesReport)(this);
  };
} // Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */
// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */
// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
},{"./data.js":"src/data.js","./utils.js":"src/utils.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62331" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map