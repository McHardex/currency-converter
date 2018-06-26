const getApi = (method, url, payload) => {
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: method,
    body: JSON.stringify(payload),
  }).then(response => {
    return response
  })
}

export { getApi }
