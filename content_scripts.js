chrome.runtime.onMessage.addListener(function (msg) {
    $("body").css("background-color", msg.color);
});
chrome.runtime.sendMessage({ log: "start" }, function (response) {
    console.log(response.status); // → startをセットしました。
});
console.log = ((logTextAreaArgument) => {
    let logTextArea = logTextAreaArgument;
    return text => logTextArea.value+=text+'\n';
  })(document.getElementsByClassName('log')[0]);