const BTN_SEARCH = document.querySelector(".btn-search");
const BTN_SEARCH_POPUP = document.querySelector(".search");
const MICROPHONE = document.querySelector(".microphone");
const SEARCH_WITH_VOICE = document.querySelector(".search-with-voice");
const CREATE = document.querySelector(".create");
const CREATE_TEXT = document.querySelector(".create-text");
const NOTIFICATIONS = document.querySelector(".notifications");
const NOTIFICATIONS_TEXT = document.querySelector(".notifications-text");

MICROPHONE.addEventListener("mouseover", () => {
  SEARCH_WITH_VOICE.style.visibility = "visible";
});
MICROPHONE.addEventListener("mouseout", () => {
  SEARCH_WITH_VOICE.style.visibility = "hidden";
});

BTN_SEARCH.addEventListener("mouseover", () => {
  BTN_SEARCH_POPUP.style.visibility = "visible";
});
BTN_SEARCH.addEventListener("mouseout", () => {
  BTN_SEARCH_POPUP.style.visibility = "hidden";
});

CREATE.addEventListener("mouseover", () => {
  CREATE_TEXT.style.visibility = "visible";
});
CREATE.addEventListener("mouseout", () => {
  CREATE_TEXT.style.visibility = "hidden";
});

NOTIFICATIONS.addEventListener("mouseover", () => {
  NOTIFICATIONS_TEXT.style.visibility = "visible";
});
NOTIFICATIONS.addEventListener("mouseout", () => {
  NOTIFICATIONS_TEXT.style.visibility = "hidden";
});
