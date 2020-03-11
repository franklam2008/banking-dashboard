export function greeting() {
  var d = new Date();
  var time = d.getHours();
  var greeting = "";
  if (time < 12) {
    greeting = "Good morning!";
  }
  if (time >= 12) {
    greeting = "Good afternoon!";
  }
  return greeting;
}
