export default function createMessageItem(message) {

  const li = document.createElement('LI');


  li.innerHTML = `<span class="message-item__username">${message.username}</span> ${message.message}`;

  return li;
};
