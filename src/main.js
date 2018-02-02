import postcss from 'postcss/lib/postcss.es6'

const css = `p {
  color: red
}`;

postcss([])
  .process(css, { from: undefined })
  .then(result => {
    document.getElementById('output').innerHTML = result.css
  })
  .catch(console.error)
