export const BASE_URL = "http://193.37.71.240:3010";

const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function loadArchive(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(BASE_URL + "/upload/", {
    method: "POST",
    body: formData,
  });
  return response;
}

export async function getListScorms() {
    const response = await fetch(BASE_URL + "/", {
      method: "GET",
      headers: headers,
    });
    return response;
}

export async function getScorm(id: string) {
  const response = await fetch(`${BASE_URL}/scorm/${id}`, {
    method: "GET",
    headers: headers,
  });
  return response;
}

export async function putScorm(id: string, time_render: string) {
  const response = await fetch(`${BASE_URL}/scorm/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({ scorm_id: id, time_render:time_render }),
  });
  return response;
}
