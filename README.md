# Lee And Pete

## Requirements

-   Statamic 5
-   PHP 8.2
-   Laravel 12
-   reCAPTCHA Keys

## reCAPTCHA Keys for Forms

Add reCAPTCHA keys in `.env` file.

```shell
CAPTCHA_SITEKEY=
CAPTCHA_SECRET=
```

## Installation Instructions

1. run `composer install`
2. Copy and create env file `cp .env.example .env`
3. Generate key `php artisan key:generate`
4. run `php please make:user` to create a new user. If there's no superadmin, please create superadmin user.
5. run `npm i && npm run watch` (or `npm run dev`)

## Deployment Instructions
1. run `cd lee  ` to build and minify frontend scripts and stylesheet.

## Tools

This project uses a number of tools and libraries:

### [Tailwinds][tailwindscss]

Styling for the site is done using Tailwinds.

### [Alpine.JS][alpinejs]

Alpine JS was for some of the animations and functionality such as navigation:body-scroll-lock, accordions, updating fields once selected etc.

### [Splide.js][splidejs]

Splide JS is used on the home page to create a project carousel. 

## Reference Links

- [Statamic Main Site](https://statamic.com)
- [Statamic Documentation][docs]
- [Statamic Core Package Repo][cms-repo]
- [Statamic Migrator](https://github.com/statamic/migrator)
- [Statamic Discord][discord]

[docs]: https://v5.statamic.dev/
[discord]: https://statamic.com/discord
[contribution]: https://github.com/statamic/cms/blob/master/CONTRIBUTING.md
[cms-repo]: https://github.com/statamic/cms/tree/v5.73.7
[tailwindscss]: https://v3.tailwindcss.com/
[alpinejs]: https://alpinejs.dev/start-here
[splidejs]: https://splidejs.com/
