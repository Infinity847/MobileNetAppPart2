function setup() {
    canvas = createCanvas(300, 300);

    video = createCapture(VIDEO);
    video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded() {
    console.log('MODEL IS LOADED');
}
function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,gotResult)
   
   }
   var previous = '';
   function gotResult(error,results) 
   {
   if (error) {
     console.error(error);
   }else {
     if ((results[0].confidence > 0.5) && (previous != results[0].label))
     {
       console.log(results);
       previous = results[0].label;
       synth.speak(utterThis);
       document.getElementById("item").innerHTML = results[0].label;
       document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
   }
   }
   