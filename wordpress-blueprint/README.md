# Himal Product & Services — WordPress blueprint

This folder is the working plan for rebuilding the current Himal Electronics website as an editable WordPress site in LocalWP. It describes the current site as it exists in the website project, including its business information, pages, content types, design, customer flows, SEO and launch requirements.

## What is in this folder

- `SITE-BLUEPRINT.md` — the full page, design, content and functionality specification.
- `site-settings.json` — business identity, hours, contact details, colors and social links in editable structured form.

## Important

The folder you supplied at `C:\Users\HP\Desktop\New folder\Local` contains the LocalWP application. It does not contain a WordPress site or WordPress `wp-content` directory, so this package does not overwrite that application or install files into it. Create a LocalWP site first, then use this blueprint to build/import the WordPress theme and content into that site's `app/public/wp-content` directory.

This is a migration blueprint, not an installable LocalWP `.zip` or WordPress theme yet. The existing site is built with Next.js and cannot be opened for editing inside WordPress as-is. The blueprint specifies how to rebuild it with WordPress blocks and content types while keeping the existing public URLs wherever possible.

## Recommended LocalWP setup

1. Create a site named `himal-electronics` in LocalWP.
2. Choose a current WordPress release and PHP version supported by WooCommerce and your hosting provider.
3. Keep the default WordPress content in place until the theme, pages, products and migration redirects have been reviewed.
4. Build the page templates and custom fields described in `SITE-BLUEPRINT.md`.
5. Import the site images from the existing website project's `public` folder into WordPress Media Library and map them to the matching products, repair pages and articles.
6. Test orders, review moderation, help enquiries, media uploads, mobile layouts and SEO metadata on Local before connecting production hosting.

The blueprint intentionally does not include any secrets. Set up WordPress administrator credentials, database credentials, SMTP settings, payment gateway keys and any Supabase credentials privately in the relevant service settings.
