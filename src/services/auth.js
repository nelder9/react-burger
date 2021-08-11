import { deleteCookie, setCookie } from './utils';
const URL = "https://norma.nomoreparties.space/api"

const login = async (form) => {
    const response = await fetch(
        `${URL}/auth/login`,
        {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(form),
        }
    );

    const data = await response.json();

    if (data.success) {
        const accessToken = data.accessToken.split("Bearer ")[1];
        const refreshToken = data.refreshToken;

        setCookie("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
    } else {
        throw new Error(data.message);
    }

    return data;
};

const logout = async (token) => {
    const response = await fetch(
        `${URL}/auth/logout`,
        {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({ token }),
        }
    );

    const data = await response.json();

    if (data.success) {
        deleteCookie("token");
        localStorage.removeItem("refreshToken");
    } else {
        throw new Error(data.message);
    }
};

const updateToken = async (token) => {
    const response = await fetch(
        `${URL}/auth/token`,
        {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({ token }),
        }
    );

    const data = await response.json();

    if (data.success) {
        const accessToken = data.accessToken.split("Bearer ")[1];
        const refreshToken = data.refreshToken;

        setCookie("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
    } else {
        throw new Error(data.message);
    }

    return data;
};

const register = async (form) => {
    const response = await fetch(
        `${URL}/auth/register`,
        {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(form),
        }
    );

    const data = await response.json();

    if (data.success) {
        const accessToken = data.accessToken.split("Bearer ")[1];
        const refreshToken = data.refreshToken;

        setCookie("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
    } else {
        throw new Error(data.message);
    }

    return data;
};

const forgotPassword = async (email) => {
    const response = await fetch(
        `${URL}/password-reset`,
        {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                email,
            }),
        }
    );

    const data = await response.json();

    if (data.success) {
        return data;
    } else {
        throw new Error(data.message);
    }
};

const resetPassword = async (form) => {
    const response = await fetch(
        `${URL}/password-reset/reset`,
        {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(form),
        }
    );

    const data = await response.json();
    if (data.success) {
        return data;
    } else {
        throw new Error(data.message);
    }
};

export const authService = {
    login,
    logout,
    updateToken,
    register,
    forgotPassword,
    resetPassword,
};