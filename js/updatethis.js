export default updateThis

function updateThis (id) {
  fetch(location.href).then(response =>
    response.text().then(html => {
      var newhtml = html.replace(
        /(<script[^>]*type="application[^>]*>)([\s\S]*?)(<\/script>)/gim,
        '$1' + JSON.stringify(di[id], null, 2) + '$3'
      )
      if (newhtml !== html) {
        fetch(location.href, {
          method: 'PUT',
          body: newhtml,
          headers: {
            'content-type': 'text/html'
          }
        }).then(console.log)
      }
    })
  )
}
