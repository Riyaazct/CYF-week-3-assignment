var user_comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


user_comment = [];


document.getElementById('button').addEventListener('click', (event) => {
  let element_text = document.getElementById('text');
  user_comment.unshift(getNumberOrString(document.getElementById('text').value));
  let element_comment = document.getElementById('comment');
  element_comment.innerText = user_comment[0];

});