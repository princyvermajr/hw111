

prediction1="";


Webcam.set({
    height:350,
    width:350,
    image_format:"png",
    png_quality:100
});
Webcam.attach('#webcamera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
  document.getElementById("snapshot").innerHTML='<img id ="snapimage" src="'+data_uri+'">'  ;    
    });
}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bn_kqxjtz/model.json',modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded");
}