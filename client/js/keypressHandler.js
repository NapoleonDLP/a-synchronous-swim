// import httpHandler from '.httpHandler.js'
// const random = require('./httpHandler')


$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('#random').on('click', (event) => {
  const url = 'http://127.0.0.1:3000';
  console.log('clicked');
  $.ajax({
    type: 'GET',
    // data: formData,
    url: url,
    // cache: false,
    // contentType: false,
    // processData: false,
    success: (data) => {
      // reload the page
      console.log(data)
      SwimTeam.move(data);
      // window.location = window.location.href;
    }
  });
})

console.log('Client is running in the browser!');
