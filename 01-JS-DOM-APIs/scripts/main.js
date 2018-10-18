function fadeIn(){
  var helloWorld = document.getElementById("helloworld");
  helloWorld.hidden = false;    
}

function showAlert(){
  alert("This is an alert mesage");
}

function apiRequest(){
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let obj = JSON.parse(this.responseText);
        if(obj.type === "success")
        {
          console.log(obj.value.id);
          document.getElementById("response-content").innerHTML = obj.value.joke;
        }
    }
  };

  xmlHttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xmlHttp.send();
  console.log("Sent");
}

function reutilizableAJAX(config){
  return new Promise(function(resolve, reject){

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open(config.method, config.url, true);

    xmlHttp.onload = function() {
      if (xmlHttp.status == 200) {
        resolve(xmlHttp.response);
      }
      else {       
        reject(Error(xmlHttp.statusText));
      }
    };

    xmlHttp.onerror = function() {
      reject(Error("Something happened"));
    };
    xmlHttp.send();
  });  
}

function showJokes(target){
  var config = {};
  config.method = "GET";
  config.url = "http://api.icndb.com/jokes/random";

  reutilizableAJAX(config).then(response => {
    console.log(JSON.parse(response));
    let obj = JSON.parse(response);
    if(obj.type === "success")
    {
      document.getElementById(target).innerHTML = obj.value.joke;
    }
  })
  .catch(error => {
    console.log(error);
    let content = document.getElementById(target);
    content.style.color = "red";
  })
}
