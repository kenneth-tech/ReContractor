function myFunction() {
  var x = document.getElementById('mynavbar');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
