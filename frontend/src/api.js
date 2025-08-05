const API_BASE_URL = "http://localhost:8080"

export async function ping() {
  const res = await fetch(`${API_BASE_URL}/ping`)
  return res.json()
}