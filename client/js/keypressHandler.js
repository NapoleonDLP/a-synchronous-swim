
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1].toLowerCase();
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:3000',
      data: direction,
      success: (data) => {
        SwimTeam.move(data);
      }
    })
  }
});

$('#random').on('click', (event) => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000',
    success: (data) => {
      SwimTeam.move(data);
    }
  });
})

console.log('Client is running in the browser!');
