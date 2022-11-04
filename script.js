const BTN_SEARCH = document.querySelector(".btn-search");
const BTN_SEARCH_POPUP = document.querySelector(".search");

const MICROPHONE = document.querySelector(".microphone");
const SEARCH_WITH_VOICE = document.querySelector(".search-with-voice");

const CREATE = document.querySelector(".create");
const CREATE_TEXT = document.querySelector(".create-text");

const NOTIFICATIONS = document.querySelector(".notifications");
const NOTIFICATIONS_TEXT = document.querySelector(".notifications-text");

const SHOW_CREATE_MENU = document.querySelector(".create");
const HIDE_CREATE_MENU = document.querySelector(".create-menu");

const SHOW_NOTIFICATIONS_MENU = document.querySelector(".notifications");
const HIDE_NOTIFICATIONS_MENU = document.querySelector(".notifications-menu");

const SHOW_MICROPHONE_MENU = document.querySelector(".voice-search");
const HIDE_MICROPHONE_MENU = document.querySelector(".voice-menu");

const SHOW_ACCOUNT_INTERFACE = document.querySelector(".user");
const HIDE_ACCOUNT_INTERFACE =  document.querySelector(".account-interface");

BTN_SEARCH.addEventListener("mouseover", () => {
  BTN_SEARCH_POPUP.style.visibility = "visible";
});
BTN_SEARCH.addEventListener("mouseout", () => {
  BTN_SEARCH_POPUP.style.visibility = "hidden";
});

MICROPHONE.addEventListener("mouseover", () => {
  SEARCH_WITH_VOICE.style.visibility = "visible";
});
MICROPHONE.addEventListener("mouseout", () => {
  SEARCH_WITH_VOICE.style.visibility = "hidden";
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

SHOW_CREATE_MENU.addEventListener("click", () => {
  if (HIDE_CREATE_MENU.style.visibility === "hidden") {
    HIDE_CREATE_MENU.style.visibility = "visible";
  } else {
    HIDE_CREATE_MENU.style.visibility = "hidden";
  }
});

SHOW_NOTIFICATIONS_MENU.addEventListener("click", () => {
  if (HIDE_NOTIFICATIONS_MENU.style.visibility === "hidden") {
    HIDE_NOTIFICATIONS_MENU.style.visibility = "visible";
  } else {
    HIDE_NOTIFICATIONS_MENU.style.visibility = "hidden";
  }
});

SHOW_MICROPHONE_MENU.addEventListener("click", () => {
  if (HIDE_MICROPHONE_MENU.style.visibility === "hidden") {
    HIDE_MICROPHONE_MENU.style.visibility = "visible";
  } else {
    HIDE_MICROPHONE_MENU.style.visibility = "hidden";
  }
});

SHOW_ACCOUNT_INTERFACE.addEventListener("click", () => {
  if (HIDE_ACCOUNT_INTERFACE.style.visibility === "hidden") {
    HIDE_ACCOUNT_INTERFACE.style.visibility = "visible";
  } else {
    HIDE_ACCOUNT_INTERFACE.style.visibility = "hidden";
  }
});