## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Styling

Use Tailwind CSS utilities for all new or modified page and component styling.

- Do not mix Tailwind utility classes with component-scoped `<style>` blocks in the same component.
- Prefer standard Tailwind utilities first, then arbitrary values or properties when necessary.
- Reserve inline `style` attributes for dynamic runtime values that cannot be expressed as static Tailwind utilities.
- For patterns reused across components, define a Tailwind theme token or reusable utility in `src/styles/global.css`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
