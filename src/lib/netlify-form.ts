export const CONTACT_FORM_NAME = "contact";

export function encodeNetlifyForm(form: HTMLFormElement) {
  const params = new URLSearchParams();

  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value === "string") {
      params.append(key, value);
    }
  }

  if (!params.get("form-name")) {
    params.set("form-name", CONTACT_FORM_NAME);
  }

  return params.toString();
}

export async function submitNetlifyForm(form: HTMLFormElement) {
  const local = window.location.hostname === "localhost";

  if (local) {
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return;
  }

  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeNetlifyForm(form),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }
}
