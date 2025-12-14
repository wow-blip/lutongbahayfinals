Lutong Bahay — Recipe Landing Page

A simple static implementation of the landing page and responsive authentication pages (Log In, Sign Up) from the provided mockups.

Files:
- `index.html` — primary homepage (new)
- `landingpage.html` — primary marketing landing page (kept for alternate layout)
- `landingpage.css` — styling used by all pages
- `landingpage.js` — small interaction (mobile nav toggle)
- `login.html` — Log In page (responsive)
- `signup.html` — Sign Up page (responsive)
- `auth.js` — simple form validation and demo submit handlers

Quick start:
- Open `index.html` in a browser (double click or serve with a simple server).
- `landingpage.html` is a separate marketing landing page. `login.html` and `signup.html` are linked from the header.

Notes:
- Forms are demo-only and redirect to `index.html` on submit. Replace the `auth.js` handlers with real API calls as needed.
- Images are loaded from Unsplash for placeholders. Replace the image `src` attributes with your exported images for a nearly identical pixel-perfect look.
- Fonts used: Playfair Display, Lora, Poppins from Google Fonts. Replace or adjust as you like.

If you'd like, I can:
- Add email/password validation and error messages
- Hook forms to a backend or Firebase Auth
- Add animations, micro-interactions, or make the style pixel-perfect to the mockup

Logo image / inline SVG instructions
- The header logo is now referenced as an image (`assets/lutong-bahay-mark.png`) on all pages. You can replace this with your own image file by placing it at `assets/lutong-bahay-mark.png`.
- If you prefer an inline SVG (editable in the code), open `landingpage.html`, `login.html`, or `signup.html` and replace the `<img class="brand-logo" ...>` with your `<svg>...</svg>` markup (the previous sample SVG is still in the repo as `assets/lutong-bahay-logo.svg`).
- If you'd like me to embed the PNG for you directly, paste the PNG's base64 data here and I can update the HTML to use a data-URI (not recommended for large files) or add the binary file to `assets/`.
