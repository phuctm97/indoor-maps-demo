var unityProgressDone = false;
var navbar = $("nav");
var loadingOverlay = $("#loadingOverlay");
var gameContainer = $("#gameContainer");
var loadingText = $("#loadingOverlay p");

function ShowLoadingOverlay() {
    gameContainer.hide();
    loadingOverlay.show();
}

function HideLoadingOverlay() {
    gameContainer.show();
    loadingOverlay.hide();
}

function SetLoadingText(text) {
    loadingText.text(text)
}

setInterval(function () {
    if (loadingText.text().endsWith('...')) {
        loadingText.text(loadingText.text().substr(0, loadingText.text().length - 3));
    } else {
        loadingText.text(loadingText.text() + '.');
    }
}, 300);

function UnityProgress(gameInstance, progress) {
    if (!unityProgressDone && progress == 0) {
        ShowLoadingOverlay();
        SetLoadingText("Đang tải.");
    }
    if (!unityProgressDone && progress == 1) {
        unityProgressDone = true;
        setTimeout(function () {
            HideLoadingOverlay();
        }, 3000);
    }
}