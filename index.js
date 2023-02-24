
const feetInABlock = 264;
const freeFare = 400;

function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42){
        return someValue - 42;
    } else {
        return 42 -someValue;
    }
  }

  function distanceFromHqInFeet(distanceInBlocks) {
    const distanceFromHq = distanceFromHqInBlocks(distanceInBlocks)
    const computedDistanceInFeet = distanceFromHq  * feetInABlock;
    return computedDistanceInFeet;
  }

  function distanceTravelledInFeet(start, destination){
    let positiveDistanceTraveled;
    if (destination > start){
        positiveDistanceTraveled = (destination - start);
    } else {
        positiveDistanceTraveled = (start - destination);
    }
    return positiveDistanceTraveled * feetInABlock
  }

  function calculatesFarePrice(start, destination) {
    const feetToPrice = (Math.abs(start-destination) * feetInABlock);
    if (feetToPrice - freeFare <= 0){
        return 0;
    } else if (feetToPrice > 2500){
        return 'cannot travel that far';
    } else if (feetToPrice >= 2000){
        return 25;
    } else {
        return (feetToPrice - freeFare) * 0.02;
    }
  }