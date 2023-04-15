function attachDelayedScript(url: string, attachElement: HTMLHeadElement, delay = 2000) {
    setTimeout(() => {
        const newScript = document.createElement('script');
        newScript.type = "text/javascript";
        newScript.src = url;
        newScript.async = true;
        newScript.defer = true;
        attachElement.appendChild(newScript)
    }, delay)
}

export default (urls: string | string[]) => {
    const head = document.getElementsByTagName('head')[0];
    if(Array.isArray(urls)){
        return urls.forEach(url => attachDelayedScript(url, head))
    }

    return attachDelayedScript(urls, head)
}