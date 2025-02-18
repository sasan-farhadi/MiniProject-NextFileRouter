const setCookie = token => {
    document.cookie = `token=${token.token}; max-age=${24 * 60 * 60 * 60}`
}

const getCookie = () => {
    if (typeof window !== 'undefined') { return document.cookie.split("=")[1] } return null
}

// const getCookie = () => {
//     return document.cookie.split("=")[1]
// }

const logoutHandler = () => {
    document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        location.reload()
    });
};

export { setCookie, getCookie, logoutHandler }