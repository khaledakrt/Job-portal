export const API_URL = "http://localhost:8000/api";

export async function fetchJobs() {
  const res = await fetch(`${API_URL}/jobs/`);
  return res.json();
}

export async function fetchJob(id: number) {
  const res = await fetch(`${API_URL}/jobs/${id}/`);
  return res.json();
}
