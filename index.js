function scuberGreetingForFeet(rideDistant){
  if (rideDistant <= 400) {
    return 'This one is on me!';
  } else if (rideDistant > 400 && rideDistant <= 2000) {
    return 'That will be twenty bucks.';
  } else if (rideDistant > 2000 && rideDistant <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideDistant > 2500){
    return 'No can do.';
  }

  }

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
}
}