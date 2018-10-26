if(window.indexedDB) { //Checking for support 
  var request = indexedDB.open('textAreaDB', 1);
  var db;
 
  request.onupgradeneeded = event => {
    let db = event.target.result;
    console.log('Executing onupgradeneeded');
    if(!db.objectStoreNames.contains('textAreaOS')) {
      db.createObjectStore('textAreaOS', {autoIncrement : true});
    }
  }

  request.onsuccess = event => {      
    db = event.target.result;      
  }   

  request.onerror = event => {
    console.log('IndexedDB Error');
  }
}
else {
  console.log('IndexedDB not supported by browser');
}


function saveData(data) {
  if(window.localStorage) { //Checking for support 
    localStorage["Text" + Date.now()] = data; //Used Date.now() to test the addition of multiple KVPs
  }
  else {
    console.log('LocalStorage not supported by browser');
  }

  if(window.indexedDB) { //Checking for support 
    var transaction = db.transaction(['textAreaOS'], "readwrite");

    var objectStore = transaction.objectStore('textAreaOS');

    var request = objectStore.add(data);

    request.onsuccess = event => {      
      console.log('Text saved to IndexedDB');
    }   

    request.onerror = event => {
      console.log('Failed to add');
    }
  }
  else {
    console.log('IndexedDB not supported by browser');
  }
}

function clearData()
{
  if(window.localStorage) {
    localStorage.clear();
  }
  else {
    console.log('LocalStorage not supported by browser');
  }

  if(window.indexedDB) { //Checking for support 
    var transaction = db.transaction(['textAreaOS'], "readwrite");

    var objectStore = transaction.objectStore('textAreaOS');

    var request = objectStore.clear();

    request.onsuccess = event => {      
      console.log('Cleared data');
    }   

    request.onerror = event => {
      console.log('Failed to delete');
    }
  }
  else {
    console.log('IndexedDB not supported by browser');
  }
}

//Drag and drop files
function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  
  if (event.dataTransfer.items.length > 1) {
    console.log('Max. 1 simultaneous file');
  }
  else { 
    if (event.dataTransfer.items[0].kind === 'file') { //Check if dropped items are files
      var file = event.dataTransfer.items[0].getAsFile();
      console.log(file.name);

      var reader = new FileReader();

      reader.readAsText(file);

      reader.onload = ev => {
        data = reader.result;
      }
    
      reader.onloadend = ev => {
        event.target.innerHTML = data;
      }
    
      reader.onerror = ev => {
        console.log('Reading error');
      }      
    }
  }

    
}
