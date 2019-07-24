import attack from 'IFGS-perturbator';
import {getImageVector, getImage} from 'tools';

export function perturbateImage(image){
    let imageVector = getImageVector(image);
    let perturbedImageVector = attack(imageVector);
    return getImage(perturbedImageVector);
}