# test-rollup-postcss

This is a proof-of-concept for bundling PostCSS with Rollup.

Note that postcss is installed from git:

    "postcss": "github:postcss/postcss"

This is so we can get access to the `.es6` source files, not just the compiled `.js` files. Rollup can handle the `.es6` files just fine, but it can't figure out the compiled `.js` files.

Note that this setup doesn't include Babel, which would need to be included, since we're dealing with ES6+ code that isn't well-supported in browsers.

## Try it

Clone the repo, run `npm install` using npm v5+, then `npm run build`. Then open `index.html` in your browser, and you should see CSS code and no errors in the console. Note that there are no plugins included here, so it isn't actually transforming the CSS, just parsing and stringifying it.
