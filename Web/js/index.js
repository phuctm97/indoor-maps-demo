var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Web.json", {
  onProgress: UnityProgress
});
var timeouts = [];

function UpdateElementSize() {
  loadingOverlay.height($(window).height() - navbar.outerHeight());
  gameContainer.height($(window).height() - navbar.outerHeight());
}

function UpdateGameSize() {
  gameInstance.SendMessage("DebugText", "SetWidth", gameContainer.width());
  gameInstance.SendMessage("DebugText", "SetHeight", gameContainer.height());
  gameInstance.SendMessage("DebugText", "OnResize");
}

UpdateElementSize();
UpdateGameSize();

function OnResize() {
  UpdateElementSize();
  SetLoadingText("Đang cập nhật độ phân giải.");

  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  timeouts = [];

  ShowLoadingOverlay();
  var id = setTimeout(function () {
    HideLoadingOverlay();
  }, 1000);
  timeouts.push(id);

  UpdateGameSize();
}

window.addEventListener("resize", OnResize);