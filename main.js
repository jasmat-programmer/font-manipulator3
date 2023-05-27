leftWristX = "";
rightWristX = "";
function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 420);
    canvas.position(560, 180);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
background("white");
textSize(difference);
fill("black");
text("hello",50,400);
}
function modelLoaded(){
    console.log("yo model loaded");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
    }
}