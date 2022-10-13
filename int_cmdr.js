let user = prompt("What's your username?");
let console = navigator.platform;
let log = ("user=" + user + " platform=" + console + " type=manualCrypt");
alert("Logged In Sucessfully! log = (" + log + ")");
let cmd = prompt("What's your command? ( Commands: /platform /device)");
if (cmd == "/platform") {
  let input = navigator.platform;
  alert("input = (" + input + ")")
} else { 
  if (cmd == "/device") {
    let input = navigator.userAgent;
    alert("input = (" + input + ")");
  } else {
    alert("Command '" + cmd + "' Didn't Work!");
  }
}
