prediction1 = 
prediction2 = 
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
}) 

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5version;', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VO_fJHQXs/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The fisrt prediction is" + prediction1;
    speak_data2 = "The secondd prediction is" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);

}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name"). innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        result1 = results[0].label
        result2 = results[1].label
        if(result1 == "Fists") {
            document.getElementById("updateemoji").innerHTML = "&#9994;";
        }
        if(result2 == "Fists") {
            document.getElementById("updateemoji2").innerHTML = "&#9994;"
        }
        if(result1 == "Victory") {
            document.getElementById("updateemoji").innerHTML = "&#9996;";
        }
        if(result2 == "Victory") {
            document.getElementById("updateemoji2").innerHTML = "&#9996;"
        }
        if(result1 == "Perfect") {
            document.getElementById("updateemoji").innerHTML = "&#128076";
        }
        if(result2 == "Perfect") {
            document.getElementById("updateemoji2").innerHTML = "&#128076"
        }
        
    }
}
