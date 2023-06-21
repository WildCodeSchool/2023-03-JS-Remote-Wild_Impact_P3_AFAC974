const postData = (path, data) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${path}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const deleteData = (path) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${path}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const connexion = {
  post: (path, data) => postData(path, data),
  delete: (path, id) => deleteData(path, id),
};

export default connexion;
