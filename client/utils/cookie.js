const setCookie = token => {
    document.cookie = `token=${token.token}; max-age=${24 * 60}`
}

const getCookie = () => {
    // return document.cookie.split("=")[1]
}

const logoutHandler = () => {
    document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        location.reload()
    });
};

export { setCookie, getCookie, logoutHandler }