let mix = require('laravel-mix');

mix.postCss('src/tailwind.css', 'public/css/style.css', [
    require("tailwindcss"),
  ]);
