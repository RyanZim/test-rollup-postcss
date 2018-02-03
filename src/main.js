import postcss from 'postcss'

const css = `p {
  color: red
}`;

postcss([])
  .process(css, { from: undefined })
  .then(result => {
    document.getElementById('output').innerHTML = result.css
  })
  .catch(console.error)
