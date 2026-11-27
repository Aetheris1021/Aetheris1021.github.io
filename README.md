# Haoyang Ding — Personal Website

Personal and academic portfolio for Haoyang Ding, focused on applied AI, large language models,
and medical applications.

Live site: [aetheris1021.github.io](https://aetheris1021.github.io/)

## Site structure

- `index.html` — About, Education, Internship, Project, Research, Skill, Teaching, and Contact content
- `styles.css` — responsive layout, Manrope typography, and the navy, cream, and coral color palette
- `script.js` — mobile navigation, current-year footer, and email contact feedback
- `favicon.svg` — HD monogram favicon
- `output/pdf/Haoyang_Ding_CV.pdf` — current one-page CV linked from the website
- `output/pdf/Haoyang_Ding_CV.tex` — editable LaTeX source for the CV

The site is a static page with no JavaScript build step. Manrope is loaded from Google Fonts.

## Local preview

From the repository root, run:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Updating the CV

From `output/pdf`, compile the LaTeX source and replace the downloadable PDF:

```bash
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=/tmp Haoyang_Ding_CV.tex
cp /tmp/Haoyang_Ding_CV.pdf Haoyang_Ding_CV.pdf
```

After changing the PDF, update the version query on the CV link in `index.html` so browsers fetch the new file. Keep CV and website dates, titles, project details, and research results aligned.

## Deployment

GitHub Pages publishes the repository root from the `main` branch.
