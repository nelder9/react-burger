import { getCookie } from "./utils";
const URL = "https://norma.nomoreparties.space/api/auth/user"
const getUser = async () => {
  const response = await fetch(
    URL,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data;
};

const updateUser = async (form) => {
  const response = await fetch(
    URL,
    {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data;
};

export const profileService = {
  getUser,
  updateUser,
};
