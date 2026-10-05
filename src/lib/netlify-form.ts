export const CONTACT_FORM_NAME = "contact";
export const CAREERS_FORM_NAME = "careers";

type SubmitOptions = {
  formName: string;
  localEndpoint: string;
  withFiles?: boolean;
};

function encodeNetlifyForm(form: HTMLFormElement, formName: string) {
  const params = new URLSearchParams();

  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value === "string") {
      params.append(key, value);
    }
  }

  if (!params.get("form-name")) {
    params.set("form-name", formName);
  }

  return params.toString();
}

function formDataWithName(form: HTMLFormElement, formName: string) {
  const data = new FormData(form);
  if (!data.get("form-name")) {
    data.set("form-name", formName);
  }
  return data;
}

export async function submitNetlifyForm(
  form: HTMLFormElement,
  { formName, localEndpoint, withFiles = false }: SubmitOptions,
) {
  const local = window.location.hostname === "localhost";
  const data = formDataWithName(form, formName);

  if (local) {
    const response = await fetch(localEndpoint, {
      method: "POST",
      ...(withFiles
        ? { body: data }
        : {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(data.entries())),
          }),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return;
  }

  const response = await fetch("/__forms.html", {
    method: "POST",
    ...(withFiles
      ? { body: data }
      : {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeNetlifyForm(form, formName),
        }),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }
}
