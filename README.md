# Planify — Responsive SaaS Pricing Cards

A responsive pricing page built with HTML5, CSS3, and vanilla JavaScript.

## Features
- Monthly / yearly billing switch with live price updates
- Starter, Professional, and Business pricing plans
- Popular and Best Value ribbon badges
- CSS hover transitions, transforms, and shadows
- Responsive desktop, tablet, and mobile layouts
- Accessible billing controls with `aria-pressed`
- Reduced-motion preference support

## Run the project
1. Extract `saas_pricing_cards.zip`.
2. Open the `saas_pricing_cards` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Click **Yearly** and **Monthly** to test the billing switch.
5. Hover over the cards on a desktop to see the animation.

No build tools or package installation are required.

## Customize
- Edit plan names, descriptions, features, and links in `index.html`.
- Edit monthly and yearly prices using the `data-monthly` and `data-yearly` attributes on each `.price` element.
- Customize colours, spacing, and responsive breakpoints in `style.css`.

## Note
The plan links currently open an email draft to a sample address (`hello@planify.example`). Replace these with your real signup, checkout, or contact URLs before publishing.
