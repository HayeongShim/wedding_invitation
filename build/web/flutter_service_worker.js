'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fa62a0f385fd246e09c15612da75b2b8",
"index.html": "1583135b465a49e7a556a781951c5d58",
"/": "1583135b465a49e7a556a781951c5d58",
"main.dart.js": "fcbac5413d8f79d9cdff5a7bed2fb6ec",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b9f453ec4a7848f6674fb4e251327f4",
".git/ORIG_HEAD": "4e79f471c6a06e013fb52712c51964ad",
".git/config": "164b7bfba148ddced2e187e6aaaa93e2",
".git/objects/68/ec7e631c77537fefa844d7fe4e7970190d709f": "06f673299b3270a98955f99ec8ffc0f7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/9c/fc828713b71b1a4b5dc1c7f8f079c630941721": "7ccef6a33c317af07757654445c8beec",
".git/objects/a4/1da15e432052366f259cf0db7da5b828eefcca": "eb5aa372134a41ad8b000fac6de781b3",
".git/objects/a4/b39e666e422adb3a62dcca265be3da74c74fce": "86fbcc369e0fcb90690b321c2461ee05",
".git/objects/a3/f1b443880f2cb116f7ee9e86037f0b112bc282": "e3378cbf69aa408517b8825fd69397a8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/709c5bdf0edd4662d736c2386a9eb729fd8ed6": "25dbc6b3c075840b243899db5a579de6",
".git/objects/a2/3d7b288883dcecdbf9e943d0063c77ee249c9f": "b21b33176a9f99bad1b45faa203115eb",
".git/objects/d1/2be15c990d4be007734c7f7fe94b110f0036f1": "3921efc7b8844ef6ae5546e2733a107a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/cdcf0c85145c457d3a826ef887649ebe722f9e": "ea2610b2b8bc80fd0fba0d8840002ad9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/4bd24ea4fa92f6d7a9cb4f18a15e3e37cff3f1": "559991f05e929d305aa6220c4144c38e",
".git/objects/e3/06ceae33d393ec54867741c17110df4c5d4927": "77560b5c117b303db5de3a831955482b",
".git/objects/c1/65e3a1444bdd039b75146d78fe48cf67186303": "7a4678603da7d80c75e4ababa16fe233",
".git/objects/c6/dab8a7a1d9f41efb86d555c93a9832816a37a0": "64054da53175ea8f28f2bebb51b330eb",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/27/5ee86b9181ced6fc244b35add568b6769122a3": "c898e29472ae5cbd19c3c18539caa25d",
".git/objects/pack/pack-b73931b6313aae7d9563c07e6e87398995dd1d0d.pack": "2de9a067e6d77bd5ff81ae390ece6385",
".git/objects/pack/pack-b73931b6313aae7d9563c07e6e87398995dd1d0d.idx": "1c400dbd066f3f1aa676743b5a3b3314",
".git/objects/pack/pack-b73931b6313aae7d9563c07e6e87398995dd1d0d.rev": "2ebd1bc63e576b8162a6f947f9c29ee0",
".git/objects/1a/22a4fcff9bc4a26e5dd7cdc33f3157a7e1aaac": "ccf4c4d117e639d054b038466cfbd607",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/4d/4baf23e411a1f4734488a92b283d03810c157a": "1e2afc82e26b09dfab6cfd60e1bd5b86",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/c2d404f514adcdd57af3f82454a6a08339045d": "d67dc6f7038a6db7f8883d10c0c80581",
".git/objects/36/bbddc71fc088636aaed72249463fe4dd146886": "348c46e32f19d5548fddc40880286087",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/52/56f85cc1c9ea7a312d1cf4f0a4db29b8bea547": "1c44a700fcfdd2020be19f47d8fdb8b1",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/1c995398b6b52e60c8511609646af91bf1c481": "9864440e465273d8bf8af3c1cc9e485c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/4a/01b24c28bf0174dfa326025e3c62fb46e48eac": "1ff9e7a9872d00e2d88ee03fe46ab2db",
".git/objects/23/0b1c1b338d57405274be091c115ec7749b4e2d": "5e6dc65619cb20ae36b775d9cc31fdc9",
".git/objects/49/d00883f6a21dcded981ac883b4366f2e89cd93": "13c75e350183a70e2f98802c4b091382",
".git/objects/7a/4dc783efbd6e72e66221edceb929227ba8315a": "c9bf6bffa8728a0000bf6fa23ed7980d",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/037063a37a8df3a67942716f26ed6ba24b8e92": "c421b822dad5efd67c748e15ef0e2f2b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2ae2347361e8540115a2325d2c207d1",
".git/logs/refs/heads/master": "d2ae2347361e8540115a2325d2c207d1",
".git/logs/refs/remotes/origin/master": "fb72d9d305d8f74a80a8a51181828f0d",
".git/logs/refs/remotes/origin/main": "9b4f03448cda894bcb48dc08c94bb661",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "4e79f471c6a06e013fb52712c51964ad",
".git/refs/remotes/origin/master": "4e79f471c6a06e013fb52712c51964ad",
".git/refs/remotes/origin/main": "dcd5329df2d5c1b3045ad832855bad41",
".git/index": "6b4763070476f020af10287c551e18bb",
".git/COMMIT_EDITMSG": "20c1b851941bfae61c1eadd1388118cc",
".git/FETCH_HEAD": "c0851973d1e3f4d187f768a1adab589b",
"assets/AssetManifest.json": "d9900e4cb442c54a821a1310d97be3f3",
"assets/NOTICES": "8e0ff0322bf2bc800ddaec371ee0f1f7",
"assets/FontManifest.json": "6caa214f216a42dc52d984eb1a97153e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "74de541ded1898c7b0bfe3262208cd3a",
"assets/fonts/MaterialIcons-Regular.otf": "0ec33d6f4e95115222113971d3943fed",
"assets/assets/images/green_1.JPG": "43ad6149274ae8bd7a33ec847ba609f6",
"assets/assets/images/green_0.JPG": "00583b44f3153a52bc0822c1e37554bd",
"assets/assets/images/green_2.JPG": "335c7e6d8046f277c7c1aa18e3285508",
"assets/assets/images/green_3.JPG": "915bb9cc656acbc8c0b93975add195c8",
"assets/assets/images/img_25563_1.jpg": "6f289c9c19ddfe9deecaf06bcbb8cda4",
"assets/assets/images/green_4.JPG": "958390cbd0c0c1f36b35568107e02cf5",
"assets/assets/images/wizard.jpg": "bdef253c6ddb8a933a3173cfbea1805c",
"assets/assets/images/KakaoTalk_20231125_001038144.jpg": "807130cd23ad288cb95bff48e204b30e",
"assets/assets/images/KakaoTalk_20231125_001141292.jpg": "81845ab31f9a85f7c014aa69934ed088",
"assets/assets/images/white_3.JPG": "ca5e3f2aa9692eab0698995686cd75e3",
"assets/assets/images/white_2.JPG": "bf7732f57aed5395c204ff916f6bc7c3",
"assets/assets/images/white_0.JPG": "8a54c5b1bed774cee8bc6ba505f92f03",
"assets/assets/images/white_1.jpg": "807130cd23ad288cb95bff48e204b30e",
"assets/assets/images/white_5.JPG": "1a8e9d7ea46897a42a26c5c7d6913a8a",
"assets/assets/images/KakaoTalk_20231125_001212532.jpg": "1316593aea4efe595227c07178bc23c0",
"assets/assets/images/white_4.JPG": "46840aa97b053a69a347dd04155e3822",
"assets/assets/images/white_6.JPG": "5275ecfb88ae48c09eb0552f293c6471",
"assets/assets/images/flower.jpg": "465039972de9952b0788f5a0149c406e",
"assets/assets/images/white_7.JPG": "a704d13fa1ece36b80d06efa265511b2",
"assets/assets/images/blue_2.JPG": "31af8c265ec03c5b96396861691c543d",
"assets/assets/images/blue_3.jpg": "1316593aea4efe595227c07178bc23c0",
"assets/assets/images/blue_1.JPG": "5bfd5d316a65127aabddb1626a6d208f",
"assets/assets/images/blue_0.JPG": "10927b1fdf44189f268322b0cd55561a",
"assets/assets/images/blue_4.JPG": "3bdb730293769086b8f8b4618fb695d9",
"assets/assets/images/blue_5.JPG": "b86895697a122cc6eb9f3514076b1b9f",
"assets/assets/images/blue_6.jpg": "14b5aa2a2e9d5d27f61cbd1686999e39",
"assets/assets/fonts/GowunBatang-Bold.ttf": "04977f1734ccba2e1525b50660f96458",
"assets/assets/fonts/GowunBatang-Regular.ttf": "9c229195073bb2e4de42ff8a541e6eee",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
