const API_BASE_URL = "http://localhost:8080"

export async function ping() {
  const res = await fetch(`${API_BASE_URL}/ping`)
  return res.json()
}

export async function sort(algorithm, array) {
  const res = await fetch(`${API_BASE_URL}/sort`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ algorithm, array }),
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()
  console.log("Response data:", data)
  return data
}