/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-0c7afc7d'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "cf-2fa-verify.txt",
    "revision": "2d00cc43b94b5bec757b9e69737f503d"
  }, {
    "url": "images/cwu.png?02bd4f4ca1a80e1382509945aaa67ca4",
    "revision": "02bd4f4ca1a80e1382509945aaa67ca4"
  }, {
    "url": "images/favicon.png?01bce35dba2603eadfbd2d55b2d6f7e9",
    "revision": "01bce35dba2603eadfbd2d55b2d6f7e9"
  }, {
    "url": "images/intrepid.png?677c27a31cd6326f1aef41b8d851c739",
    "revision": "677c27a31cd6326f1aef41b8d851c739"
  }, {
    "url": "images/me.png?7e906b6e8ac258aee5931751defaeb6b",
    "revision": "7e906b6e8ac258aee5931751defaeb6b"
  }, {
    "url": "images/rainier.png?b7dd16570df5ecd80bf8c41e59da20ed",
    "revision": "b7dd16570df5ecd80bf8c41e59da20ed"
  }, {
    "url": "images/seattle.png?b7b3beccdfd3ac66676d95875b44ed9b",
    "revision": "b7b3beccdfd3ac66676d95875b44ed9b"
  }, {
    "url": "images/wizards.svg?d3b98e48df98c3b00e9bca49b2ccf922",
    "revision": "d3b98e48df98c3b00e9bca49b2ccf922"
  }, {
    "url": "index.html",
    "revision": "2960daa5e7ec25b1565903ba3531e40f"
  }, {
    "url": "main.css",
    "revision": "d4d1a816a8f6721fc3e5c4b7da674f22"
  }, {
    "url": "main.js",
    "revision": "6944d42722cb491134e5794662283622"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
