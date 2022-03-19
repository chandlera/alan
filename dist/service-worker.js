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
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-fa417792'], (function (workbox) { 'use strict';

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

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": ".well-known/cf-2fa-verify.txt",
    "revision": "2d00cc43b94b5bec757b9e69737f503d"
  }, {
    "url": "images/cwu.png?9e79570763cd86353ef5c87d9b686c0f",
    "revision": "02bd4f4ca1a80e1382509945aaa67ca4"
  }, {
    "url": "images/favicon.png?5e2d8cc7f255d206eee50a3e262a28e9",
    "revision": "01bce35dba2603eadfbd2d55b2d6f7e9"
  }, {
    "url": "images/intrepid.png?89ee2fcec2d0e490ae7daf54a61e2b85",
    "revision": "677c27a31cd6326f1aef41b8d851c739"
  }, {
    "url": "images/me.png?472168b913303dd67458812422801c1d",
    "revision": "7e906b6e8ac258aee5931751defaeb6b"
  }, {
    "url": "images/rainier.png?85026460728c5d766a382b6fdb453b99",
    "revision": "b7dd16570df5ecd80bf8c41e59da20ed"
  }, {
    "url": "images/seattle.png?20813a5c0c9c864f7c43f0267fb467df",
    "revision": "b7b3beccdfd3ac66676d95875b44ed9b"
  }, {
    "url": "images/wizards.svg?a7f79449fcc2f43e8fb26fa7f940ee35",
    "revision": "30730a64f2aec2e657a8309af678efa7"
  }, {
    "url": "main.css",
    "revision": "6ef415f3e7691bb79be65330924d8bfe"
  }, {
    "url": "main.js",
    "revision": "f54d74680a525b86101ba4968a986bdf"
  }], {});

}));
//# sourceMappingURL=service-worker.js.map
