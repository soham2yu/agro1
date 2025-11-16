const BASE_URL = "";

// Helper to get Firebase token (if logged in)
async function getToken() {
  const user = window?.firebase?.auth()?.currentUser;
  if (!user) return null;
  return await user.getIdToken();
}

export async function apiGet(path, auth = false) {
  const token = auth ? await getToken() : null;

  const res = await fetch(BASE_URL + path, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return res.json();
}

export async function apiPost(path, data, auth = false) {
  const token = auth ? await getToken() : null;

  const res = await fetch(BASE_URL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function apiPut(path, data, auth = false) {
  const token = auth ? await getToken() : null;

  const res = await fetch(BASE_URL + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function apiDelete(path, auth = false) {
  const token = auth ? await getToken() : null;

  const res = await fetch(BASE_URL + path, {
    method: "DELETE",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return res.json();
}
