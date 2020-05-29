'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d95fe4bb5f12294beddcd91fd2d3d1c4",
"assets/assets/bird.png": "20ad8a8736e89f3744c7ade4f2ef93fd",
"assets/assets/cat.png": "479ead8b4006ddfe5139a358a3ff7ae3",
"assets/assets/dalmatian.png": "8f42efbed21b62b975fc3e2be9fa8e11",
"assets/assets/farm.png": "33f973c625e9f7f6c4fb6edd2334f893",
"assets/assets/goat.png": "a6b0daa748d7b798041391343035d2f2",
"assets/assets/horse.png": "5d90bea4d9c87e699d74ce710022a942",
"assets/assets/mouse.png": "f582b28f5ec0475026490799ddf50c71",
"assets/assets/pig.png": "f5e55468980ccc8cb3f13d91c70f0258",
"assets/assets/rabbit.png": "a95a62f51c12d068ad391e2653326b01",
"assets/FontManifest.json": "a37df7c060ccb747e1358ddbf05254e7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/montserrat/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/fonts/montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/fonts/montserrat/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/fonts/montserrat/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/montserrat/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/fonts/montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/fonts/montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/montserrat/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/fonts/montserrat/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/fonts/open_sans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/open_sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/open_sans/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/open_sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/open_sans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/fonts/Raleway-Black.ttf": "46818ebd4f76c4e6fe9b030dbc74f5cf",
"assets/fonts/Raleway-BlackItalic.ttf": "956d40aa9747deb39f8b93793803bc9d",
"assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/fonts/Raleway-BoldItalic.ttf": "400d6e7c7df487961a0f1426a73fff68",
"assets/fonts/Raleway-ExtraBold.ttf": "be3bf63a30b4523ae221bd4358b13e8f",
"assets/fonts/Raleway-ExtraBoldItalic.ttf": "05c7000a5498523bbd184902d124c382",
"assets/fonts/Raleway-ExtraLight.ttf": "d2a8929f630cba5875d97a5f34da6162",
"assets/fonts/Raleway-ExtraLightItalic.ttf": "c8c27816a4b4b6fdfd4a8c944bd2c8ff",
"assets/fonts/Raleway-Italic.ttf": "b43297391b7d5d5d7b135958668c1876",
"assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/fonts/Raleway-LightItalic.ttf": "e2a70086178378a6165ad7b032ee1077",
"assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/fonts/Raleway-MediumItalic.ttf": "d3aded9f5da961c952a9c6c41d77f681",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/fonts/Raleway-SemiBold.ttf": "5a25c50b181b07279489ce5bb6a9545c",
"assets/fonts/Raleway-SemiBoldItalic.ttf": "b8ea2e82df9aeaf774c081dffb3b46e8",
"assets/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"assets/fonts/Raleway-ThinItalic.ttf": "b4fdd9b19ccaa454c97e1ba2b1364815",
"assets/LICENSE": "4cdd7423462dcfea0670ee0661e15888",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "48e2e1ee1dfdb39a653a2fa308655eef",
"/": "48e2e1ee1dfdb39a653a2fa308655eef",
"main.dart.js": "2cbd6af032c5b4426be2f33dd5cb91b9",
"manifest.json": "40cc96e86f5b3a6a735669b2c2f89070"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
