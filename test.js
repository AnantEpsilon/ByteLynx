var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData1() {
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false);
    xhr1.send(null);
    if (xhr1.status === 200) {
        var data1 = JSON.parse(xhr1.responseText);
        for(var key1 in data1) {
            console.log(key1 + " : " + data1[key1]);
        }
    } else {
        console.log('Error: ' + xhr1.status);
    }
}

function fetchData2() {
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', false);
    xhr2.send(null);
    if (xhr2.status === 200) {
        var data2 = JSON.parse(xhr2.responseText);
        for(var key2 in data2) {
            console.log(key2 + " : " + data2[key2]);
        }
    } else {
        console.log('Error: ' + xhr2.status);
    }
}

// Repeat the fetchData function 98 more times with different function names and different endpoints
// ...

fetchData1();
fetchData2();

// Call each fetchData function 98 more times
// ...