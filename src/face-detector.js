

export function faceProb(image){
    // TODO: THIS CODE IS TESTED YET
    const detections = await faceapi.detectAllFaces(image ,new faceapi.TinyFaceDetectorOptions())

    let sum = 0;
    for(let i = 0; i < detections.length; i++){

        sum = sum + detections[i].classScore;
     
    }
    return sum;
}