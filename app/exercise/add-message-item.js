import createMessageItem from './create-message-item';

export default function addMessageItem(list, message) {
  const ListItem = createMessageItem(message);
  list.appendChild(ListItem);
};
// changing stuff
