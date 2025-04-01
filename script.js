let tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("sendBtn").addEventListener("click", () => {
  tg.sendData(JSON.stringify({
    message: "Привет из WebApp!"
  }));
});
