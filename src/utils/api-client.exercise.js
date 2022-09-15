async function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }
  const response = await window.fetch(
    `${process.env.REACT_APP_API_URL}/${endpoint}`,
    config,
  )
  const data = await response.json()
  return {data}

  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
}

export {client}

/*






























💰 spoiler alert below...



























































const config = {
    method: 'GET',
    ...customConfig,
  }
*/
