// browser cookies value define
const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        const cookiesNameValue = findCookie.split('=');
        return cookiesNameValue[1]
    } 
}