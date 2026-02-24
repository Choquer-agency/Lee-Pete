# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Real estate marketing website for "Lee + Pete Vancouver Real Estate Group" built on **Statamic 5** (flat-file CMS) with **Laravel 12**, **PHP 8.2+**.

## Common Commands

```bash
# Install dependencies
composer install
npm install

# Development (Vite dev server with HMR)
npm run dev          # or: npm run watch

# Production build
npm run build        # or: npm run prod

# Linting & formatting
npm run lint         # ESLint for JS
npm run format       # Prettier for JS/CSS (includes Antlers + Tailwind plugins)

# PHP testing
composer test        # PHPUnit (Unit + Feature suites)

# Statamic CLI
php please make:user # Create admin user
php artisan serve    # Run local server
```

## Architecture

### Content (Flat-File CMS)
All content lives in `content/` as YAML files — no database for content storage. Key collections:
- `content/collections/pages/` — property listing pages (~240+)
- `content/collections/projects/` — featured project showcases
- `content/collections/team/` — team member profiles
- `content/collections/testimonials/` — client testimonials

### Templates (Antlers)
Statamic uses its own **Antlers** templating engine (`.antlers.html` files):
- `resources/views/layout.antlers.html` — main layout wrapper
- `resources/views/layout/` — header, footer partials
- `resources/views/page_builder/` — 12 reusable page builder components
- `resources/views/components/` — shared UI components
- `resources/views/snippets/` — SEO, utilities, shared snippets

### Blueprints & Fieldsets
Content types are defined via blueprints (`resources/blueprints/`) and fieldsets (`resources/fieldsets/`). These control what fields appear in the Statamic control panel.

### Frontend Stack
- **Tailwind CSS 3** — utility-first styling with three config layers: `tailwind.config.js` (main), `tailwind.config.peak.js` (theme), `tailwind.config.site.js` (site overrides), `tailwind.config.typography.js`
- **Alpine.js** — interactivity (navigation, accordions, form handling) with Collapse, Focus, and Persist plugins
- **GSAP** — scroll-triggered animations (`resources/js/custom/animations.js`)
- **Splide.js** — carousels (`resources/js/custom/slider.js`)
- CSS entry: `resources/css/tailwind.css`; JS entry: `resources/js/site.js`

### Build System
Vite with `laravel-vite-plugin`. Config in `vite.config.js`.

### Forms
Contact form (`resources/forms/contact.yaml`) uses honeypot field ("fax") and reCAPTCHA (`aryehraber/statamic-captcha`). CSRF tokens refresh dynamically via `DynamicToken` controller for AJAX submissions.

### Custom Routes
`routes/web.php` defines routes for sitemap.xml, manifest.json, and CSRF token refresh (`/!/DynamicToken/refresh`).

## Code Style

- **PHP:** Laravel Pint + StyleCI (Laravel preset)
- **JS/CSS:** Prettier with `prettier-plugin-antlers` and `prettier-plugin-tailwindcss`; single quotes, tab indentation
- **JS Linting:** ESLint with Vue 3 recommended + Prettier config

## Environment Setup

Copy `.env.example` to `.env`. Key variables: `CAPTCHA_SITEKEY`, `CAPTCHA_SECRET` (for forms), `STATAMIC_LICENSE_KEY`, `APP_URL`.
