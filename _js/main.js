// JavaScript source code
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};


window.onload = function (){
  if (localStorage.getItem("lista") === null){
    getJSON('https://private-21e8de-rafaellucio.apiary-mock.com/users', function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        
        localStorage.setItem("lista",JSON.stringify(data));
      }
    });
  }
}