function fadeIn(){
  var helloWorld = document.getElementById("helloworld");
  helloWorld.hidden = false;    
}

function showAlert(){
  alert("This is an alert mesage");
}

//fetch joke
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

//reutilizable AJAX function
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
    let obj = JSON.parse(response);
    console.log(obj);    
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

//fetch with parameters
function fetchApiWithParameters(value = "JavaScript"){
  document.getElementById("repositories").innerHTML = "";
  var config = {};
  config.method = "GET";
  config.url = "https://api.github.com/search/repositories?q=" + value;

  reutilizableAJAX(config).then(response => {
    let result = JSON.parse(response);
    console.log(result);
    result.items.forEach(element => {
      document.getElementById("repositories").innerHTML += "<li>" + element["name"] + "</li>"
    });
  })
  .catch(error => console.log(error))
}

