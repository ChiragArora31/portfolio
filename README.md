# Portfolio Website

Chirag Arora's evidence-first software engineering portfolio. Built with semantic HTML, CSS, and a small amount of vanilla JavaScript.

## Features

- **Evidence-first homepage** - Verifiable projects, merged contributions, and production work
- **Dark/light theme** - Theme persistence through localStorage
- **Responsive layout** - Desktop and mobile styles without a frontend framework
- **Accessible structure** - Semantic landmarks, skip navigation, visible focus states, and reduced-motion support
- **Writing routes** - Clean extensionless essay URLs on Vercel
- **Search metadata** - Canonicals, Open Graph, Twitter metadata, sitemap, robots.txt, and Person structured data

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties and responsive layouts
- **Vanilla JavaScript** - Theme persistence and reading progress
- **Google Fonts** - Inter typeface

## Sections

- **Evidence ledger** - Current, quantified proof of work
- **Selected work** - Detailed case studies for recent projects
- **Open source** - Verifiable merged contributions
- **Production work** - Professional engineering experience
- **Writing** - Technical essays at `/writing`, with clean root-level article URLs
- **Collection** - Papers, essays, books, and other references
- **Contact** - Social and direct contact links

## Publishing an essay

1. Copy `templates/article.html` into the project root.
2. Rename it to a short, descriptive slug such as `building-vecsearch-from-scratch.html`.
3. Replace the uppercase placeholders, write the article, and keep every section heading `id` stable.
4. Add the article to the list in `writing.html`, newest first.
5. Add its canonical URL to `sitemap.xml`.

With Vercel clean URLs, the example file is published at:

```text
https://www.chiragarora.tech/building-vecsearch-from-scratch
```

Requests containing `.html` permanently redirect to the extensionless URL. `/blog` and `/blogs` also redirect to `/writing`.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ChiragArora31/portfolio-website.git
cd portfolio-website
```

2. Start a local static server:
```bash
# Using Python
python -m http.server 8000

```

3. Visit `http://localhost:8000`. The Python server does not emulate Vercel's clean URLs, so use `/writing.html` and `/collection.html` locally.

## Deployment

The `main` branch deploys through Vercel. `vercel.json` enables clean URLs and redirects `/blog` and `/blogs` to `/writing`.

## Contact

- **LinkedIn**: [Chirag Arora](https://www.linkedin.com/in/chirag-arora-3107/)
- **GitHub**: [@ChiragArora31](https://github.com/ChiragArora31)
- **Twitter**: [@iChiragArora](https://x.com/iChiragArora)
- **Email**: chiragarora1831@gmail.com
