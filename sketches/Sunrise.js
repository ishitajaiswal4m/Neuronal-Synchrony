require([
  'dom/dom',
  'neurons/Sunrise'
], function(dom, Sunrise) {

  var playing = false;
  var sunrise = new Sunrise(getProperties());

  stage.domElement.style.backgroundColor = '#b5b5b5';

  dom.bind(window, 'click', toggle);

  function toggle() {

    if (playing) {
      sunrise.unrepeat();
    } else {
      sunrise.initialize(getProperties()).repeat().start();
    }

    playing = !playing;

  }

  function getProperties() {

    return {
      duration: Math.floor(Math.random() * 1000),
      radius: Math.floor(Math.random() * stage.width / 2),
      distance: Math.floor(Math.random() * stage.height),
      palette: [getRandomColor(), getRandomColor(), getRandomColor()]
    };

  }

  function getRandomColor() {

    return 'rgb('
      + Math.floor(Math.random() * 255) +','
      + Math.floor(Math.random() * 255) +','
      + Math.floor(Math.random() * 255) +')';

  }

});
