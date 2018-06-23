var trainName = '';
var destination = '';
var frequency = '';
var nextTrain = '';

var config = {
    apiKey: "AIzaSyCnpHg6VQYErgLEalm51XBNjAEGToR0kYI",
    autoDomain: "trainactivity-8de0f.firebaseapp.com",
    databaseURL: "https://trainactivity-8de0f.firebaseio.com",
    projectId: "trainactivity-8de0f",
    storageBucket: "",
    messagingSenderId: "175323578355"
};
firebase.initializeApp(config);

var database = firebase.database();
$('#submit').on('click', function(){

    var trainName = $('#train_name').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrain = $('#first_train').val().trim();
    var frequency = $('#frequency').val().trim();
});

$("panelbody").empty();


database.ref().on("value", function(snapshot){

    snapshot.forEach(function(childsnapshot){
        trainName = childsnapshot.val();
        destination = childsnapshot.val();
        frequency = childsnapshot.val();
        nextTrain = childsnapshot.val();

$("panelbody").append("<tr><td>" + trainName + "</td>" + "<td" + destination + "</td>" + "<td>" + frequency + "</td>" + "<td>" + nextTrain + "</td>");


    })

});






   

