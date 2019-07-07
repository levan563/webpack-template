let request = new XMLHttpRequest();
request.open('GET', 'url');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();
request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
        //Make some code
    } else {
        console.error("Error JSON load");
    }
});