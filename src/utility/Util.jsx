

export function getCookies () {
    let cookie = document.cookie.split(';');
        let cookieJsn = {};
        for(let i=0;i<cookie.length;i++){
           let temp = cookie[i].split("=");
            cookieJsn[temp[0]] = temp[1];          
        }
        return cookieJsn;
}

export function createCookie (cookieName, cookieValue) {
    let date = new Date();
    date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
    document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toGMTString();
}

export function deleteCookie(cookieName) {
    document.cookie = cookieName+"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}