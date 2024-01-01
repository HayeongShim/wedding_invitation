'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fa62a0f385fd246e09c15612da75b2b8",
"index.html": "378a7409624d63f63692ad909b635d03",
"/": "378a7409624d63f63692ad909b635d03",
"main.dart.js": "3da06d7265cf18211cb972dda1bee2c2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b9f453ec4a7848f6674fb4e251327f4",
".git/config": "a8c26f22ca4c77618e7146d2ccc60944",
".git/objects/61/cb3e5be1698c96a005d54969889f7fe11c13a7": "f83158bad4c8ff795518e8696a859e1c",
".git/objects/61/82cbd75d4e7e03344f8b787195ba083bfdccd9": "e0ca5e93566d5cab680fc8c54c9f89a5",
".git/objects/0d/cfd2a99f1b6e34b1e93d52e5b7098a9cb3e49d": "3c8402aa17b1a02ef56ace08d5ec587e",
".git/objects/95/729f21e9ced3c3d1c7127a243c59dfce9fdaaa": "2ef6bdbc0f142d62ee53b9ee31d293c6",
".git/objects/68/ec7e631c77537fefa844d7fe4e7970190d709f": "06f673299b3270a98955f99ec8ffc0f7",
".git/objects/03/d514e5f73732afc3fd4d307c984bc07cba3476": "ec8d9bacd6d566bd86d80129cfe1f8aa",
".git/objects/03/2d903728e42bbb9489bd9a55b16b9293e54034": "1b165bb220cd5a8433a654a0e2523bda",
".git/objects/9e/885e148f6efd6306bd0e919287d8a92741ec5a": "cae6b1f36f1f147e9afb449b45672882",
".git/objects/32/d256d4b55c364caf76f2aeea84f71ce992c082": "2ddc5f998199356fb2cf68c89b945459",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/a34d8c9440865554e7d610b5f47b208bcff667": "db768fbdd73d43c018bd4ee947162b66",
".git/objects/5f/afcaab06f65e961abad428411b26731db39b87": "bab3c78f10c9c913bb1d6ed316bd50a0",
".git/objects/33/5a6cc9a931d2f502ebb55639c8879c27505faf": "619e0b3619badb2f093b51d9a7c33341",
".git/objects/9c/fc828713b71b1a4b5dc1c7f8f079c630941721": "7ccef6a33c317af07757654445c8beec",
".git/objects/ad/64f303a8f74aa203f6e9907e3ea7005a3e9cf6": "a72020f9e955a4fcd420349a460a5381",
".git/objects/bb/e67150033fa5e8977be94683a99526d3681467": "bc65b82d3f975e89f406ff9705019da0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/709c5bdf0edd4662d736c2386a9eb729fd8ed6": "25dbc6b3c075840b243899db5a579de6",
".git/objects/a2/3d7b288883dcecdbf9e943d0063c77ee249c9f": "b21b33176a9f99bad1b45faa203115eb",
".git/objects/a2/fb9c3d5efa404e73736c42aba0c0cd71352ca6": "ba9158d5cdee93787b5342aeabf0a98d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/06ceae33d393ec54867741c17110df4c5d4927": "77560b5c117b303db5de3a831955482b",
".git/objects/cf/9984197bcd7dc1d51a71352cdd1327007ad2c4": "fbcfb9fe086f0b017d32a80a98f202e4",
".git/objects/ca/2ad9db62e71c18aad0ee7f9de539bb9034c26a": "0afc252e87d34b8dda4c442610f21af3",
".git/objects/fe/2f99cec931a83748e38ce907a937ca1da291f0": "b38ddee6d97b07e68cb38a850eb11486",
".git/objects/c1/65e3a1444bdd039b75146d78fe48cf67186303": "7a4678603da7d80c75e4ababa16fe233",
".git/objects/c6/dab8a7a1d9f41efb86d555c93a9832816a37a0": "64054da53175ea8f28f2bebb51b330eb",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/27/5ee86b9181ced6fc244b35add568b6769122a3": "c898e29472ae5cbd19c3c18539caa25d",
".git/objects/pack/pack-c6e36ff56fe6f4f75efddfe6e928036494cb8775.idx": "e97ff63896a47fcfe3c28395c7f8cfbf",
".git/objects/pack/pack-c6e36ff56fe6f4f75efddfe6e928036494cb8775.rev": "945e180ecbd6b9a02e537f5ad3b8163e",
".git/objects/pack/pack-c6e36ff56fe6f4f75efddfe6e928036494cb8775.pack": "8a38488a3a948b50d847fb3517694e5e",
".git/objects/1a/22a4fcff9bc4a26e5dd7cdc33f3157a7e1aaac": "ccf4c4d117e639d054b038466cfbd607",
".git/objects/7b/865a0c5f46d739b93b94863196ff2f92e92a8d": "52b53ab62ed23d8a058e48b607aaa1e2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/6729864d621ca7e43479dc3dedba46a98ce36a": "d5efa3f8d2f0d5f3747e0b28ff39d766",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/4baf23e411a1f4734488a92b283d03810c157a": "1e2afc82e26b09dfab6cfd60e1bd5b86",
".git/objects/86/bb44585920072aac123ed94f38c842cd621d81": "2627916f92b0f9f07a50ad771b6f6bbd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/1147011fdbfa6f0091dcef873712c3055fbf01": "ee12d753aee124f75e3af8f4847710f5",
".git/objects/9a/fe1652f93a84f6846b39e5b71593ecfbe7e8ce": "a46aaef49a4e67dc1c24442c653f4a0c",
".git/objects/36/bbddc71fc088636aaed72249463fe4dd146886": "348c46e32f19d5548fddc40880286087",
".git/objects/5c/df870b4860237d2e637a9d153cc368695e14a6": "62444ca32e0ea66a3675627444b457cb",
".git/objects/09/882adc515900ac8dd766e583972599395f61a3": "ab4f23c15f7daa0d391b4ddce8025b33",
".git/objects/31/717acd98ee4ce3dc8ce531ff7e7c76fd1c2ae2": "2a7bd1d6584c61285e9f556ea09e466f",
".git/objects/62/db3a92db06c363ac4de8f59c241511a1c40665": "d6435b49c7ba42caa7be3da0d34774a9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/a7366943784bab6bd991669bf959b0a4708c46": "3bdfa84af45c6aca1c7aa41d4f37b41b",
".git/objects/30/d6d172e45052bcc0be779edaf2217f7fd18c11": "48d78ae36a13d8fdc752187482c561a8",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/39/26ed0bf71be7edec2e6ce135653544dd549ba8": "0fcc403b35a2d93ff4e6c6e5d44d1156",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/76320a3843de895dbed546f659f937e8b07db0": "30fe54c1f1cdf6e2ce02e9aaad8d2650",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/fe40d3dcbe1572dae8b9e89f855767ad3177c4": "ef4209408ad3ad676de64e285520bab3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/4e0a716cb46e597e43404a6db7847f81258baa": "693d1ece79433282cd20887126ea61ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/96e7fa2924de4818e8d3c6b49a8f42c4b00018": "92075d40cb9add6e3cebac53bcf31ba8",
".git/objects/c4/af49524ebd0257ae07dc83d154f39ace8af492": "314fc6ed0ddbf220f5baaa522dca750e",
".git/objects/c4/23f5a53518892d76a42644cc06add349de8841": "1abeaeb947848280d7ae610afa64beb7",
".git/objects/e6/1c995398b6b52e60c8511609646af91bf1c481": "9864440e465273d8bf8af3c1cc9e485c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ff/78ad231b01fd29611298732dd2a0217a9f60ad": "7b4caa4a7407ddd3d13d3c392c86328d",
".git/objects/e9/0e6908a3745002893ffc8608e1e0206c5a8a9c": "5673c33558ab08c0ecc956f470f946be",
".git/objects/cb/db03fbb6e002cae8cc8657ae35a5a177f58f80": "961889004496a8c3ea24f4974175c805",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/a171477f1a251ce1f4ae8ca1b26e07ba475524": "dbce62697d337124659fdc313e33bdba",
".git/objects/70/b2b18b913f285f5cd467a532e362e642605a74": "7f64ac4f8d7227be749234fd2dbe5080",
".git/objects/84/f5859c832d2a7b8b5da18c01b0faa2ed7dbda8": "640d77640be14dc5c33729ffdb4684d0",
".git/objects/24/3f87591e2e8ff31d95d01bfd93b7d3d4c30b38": "c3c8e984a4c711bfb109c747e08b3c36",
".git/objects/76/8792cff3ee42bfe68044de8842b916366525b3": "a1c5e7b55252e35a848acdca585a6ea3",
".git/objects/82/efa7f28f03ec334580254e4bb02dd4bcb876cf": "8b7e49e62c1772cb67ec93b0c64b7e96",
".git/objects/40/15f167002d07a05bc68796b8eaef423d172f8e": "812748727d9e7819f641991e90416663",
".git/objects/47/cb83ef054ac28f4c3e41a026107db1ad827a69": "1e6368fb3960c28bcd8ecceb06410ee3",
".git/objects/7f/23972cb21aa35c7a2064e1634767671921bef5": "ffd85837cc3bc9f61c800b5b07fbb0da",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/037063a37a8df3a67942716f26ed6ba24b8e92": "c421b822dad5efd67c748e15ef0e2f2b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99d2c228931228e2f084c17cdc1f34cc",
".git/logs/refs/heads/master": "99d2c228931228e2f084c17cdc1f34cc",
".git/logs/refs/remotes/origin/master": "c1fdf422ec99272f2df80e8fed73e170",
".git/logs/refs/remotes/origin/main": "c8d0a1481b76148e305b352e081ea382",
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
".git/refs/heads/master": "736216bda6814d54ba03d684b9155b8c",
".git/refs/remotes/origin/master": "736216bda6814d54ba03d684b9155b8c",
".git/refs/remotes/origin/main": "dcd5329df2d5c1b3045ad832855bad41",
".git/index": "586a983747f064d707d737c9977e1157",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/FETCH_HEAD": "46628ffedf47cf102f77da6e9d6dab77",
"assets/AssetManifest.json": "8af73720074ac54208793cf6291f89f7",
"assets/NOTICES": "8e0ff0322bf2bc800ddaec371ee0f1f7",
"assets/FontManifest.json": "6caa214f216a42dc52d984eb1a97153e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f1395e514618811cbc15bbdcd5ebd114",
"assets/fonts/MaterialIcons-Regular.otf": "0ec33d6f4e95115222113971d3943fed",
"assets/assets/images/green_1.JPG": "dc8604a2480c8161ff1df0e8c7a419a8",
"assets/assets/images/green_0.JPG": "3419bf25c2c92502a95502157d6fbfca",
"assets/assets/images/green_2.JPG": "411cc0dca01de4175ef36e1d49a0e5bc",
"assets/assets/images/green_3.JPG": "ee2012d5db77877196c1468caa2d4f2a",
"assets/assets/images/developed_by.png": "8d038a07647c205f2f6eccaab7d061eb",
"assets/assets/images/green_4.JPG": "d95713fd5768f719ed8fa2d3e1298d87",
"assets/assets/images/0303.png": "11c7591bd60a81f7af75761c4c85a05b",
"assets/assets/images/guide.png": "fef0c6d190cdeee35de766367e4a0759",
"assets/assets/images/wizard.jpg": "bdef253c6ddb8a933a3173cfbea1805c",
"assets/assets/images/wizard.png": "8d8146acb42d2bbd60d29a0f0f179991",
"assets/assets/images/express.png": "4a1c38a44c10ec8ce0bd6d52756bbbc0",
"assets/assets/images/intro.png": "c3a3dbb7c59f543c38f4d56e487293ce",
"assets/assets/images/KakaoTalk_20231125_001141292.jpg": "81845ab31f9a85f7c014aa69934ed088",
"assets/assets/images/white_3.JPG": "f4860f73903c4312a5a2ee5f3f58c3e6",
"assets/assets/images/white_2.JPG": "428fb9ff945717b93346c54b86c61b76",
"assets/assets/images/white_0.JPG": "b4c905c6e1443e170975d09b11e80b2e",
"assets/assets/images/white_1.jpg": "807130cd23ad288cb95bff48e204b30e",
"assets/assets/images/white_5.JPG": "dccc886e2efa36fd010825810a4acb02",
"assets/assets/images/white_4.JPG": "9ad09cb5120c551ae0601c2bb44ff0aa",
"assets/assets/images/place_info.png": "b98feb15619aaa39c7afab0abdf70004",
"assets/assets/images/white_6.JPG": "ce097f88b62d2649d85c2cf0c9745b9a",
"assets/assets/images/white_7.JPG": "dc552dc132abc790a061619e45bbc30d",
"assets/assets/images/blue_2.JPG": "2765e4270d243d0999a68343299e9852",
"assets/assets/images/blue_3.jpg": "1316593aea4efe595227c07178bc23c0",
"assets/assets/images/blue_1.JPG": "41cebe29c6a2acf03ec47351df3c6278",
"assets/assets/images/blue_0.JPG": "acb7fa9d60034f4ad4aee07fc946b311",
"assets/assets/images/place_info_2.png": "064f95658ff7f82c75d9fe66de7c11da",
"assets/assets/images/blue_4.JPG": "f93549ab1c2227be2c68e2844efdcc58",
"assets/assets/images/invitation.png": "68ed18cf0f7bfa0147768fcacce657ac",
"assets/assets/images/blue_5.JPG": "db0742b24c1ff355113592e5b8ac9558",
"assets/assets/images/place_info_3.png": "ef8fdbc3424839f9bf3f285f5b8c86c2",
"assets/assets/images/blue_6.jpg": "e12f931de7563a7a1bca3f250874c33a",
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
