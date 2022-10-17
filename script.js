const CREATE = document.querySelector('.create')
const CREATE_TEXT = document.querySelector('.create-text');
const NOTIFICATIONS = document.querySelector('.notifications');
const NOTIFICATIONS_TEXT = document.querySelector('.notifications-text');

CREATE.addEventListener('mouseover', () => {
    CREATE_TEXT.style.visibility = 'visible';
})
CREATE.addEventListener('mouseout', () => {
    CREATE_TEXT.style.visibility = 'hidden';
})


NOTIFICATIONS.addEventListener('mouseover', () => {
    NOTIFICATIONS_TEXT.style.visibility = 'visible';
})
NOTIFICATIONS.addEventListener('mouseout', () => {
    NOTIFICATIONS_TEXT.style.visibility = 'hidden';
})