bespoke.plugins.logikeys = function(options) {
  return function(deck) {

    var isHorizontal = options !== 'vertical',
      digits = [],
      keyDelay,
      KEY_DELAY_MS = 300,

      getDigit = function(which) {
        var result = which;
        while (result > 0x9) {
          result -= 0x30;
        }
        return result;
      },

      isDigitKey = function(which) {
        var result = (which >= 0x30 && which <= 0x39) || (which >= 0x60 && which <= 0x69);
        return result;
      },

      first = function() {
        return deck.slide(0);
      },

      last = function() {
        var lastIndex = Math.max(0, deck.slides.length - 1);
        return deck.slide(lastIndex);
      }
      
      waitForNextDigit = function(digit) {
        digits.push(digit);
        keyDelay = setTimeout(jumpToSlide, KEY_DELAY_MS);
      },
      
      jumpToSlide = function() {
        var index = parseInt(digits.join(""));  
        digits = [];
        if (Number.isNaN(index))
          return;
        index = Math.min(Math.max(1, index), deck.slides.length);
        return deck.slide(index - 1);
      };

    // Use the keyup event to support remot.io
    document.addEventListener('keyup', function(e) {
      clearTimeout(keyDelay);

      if (isDigitKey(e.which)) {
        waitForNextDigit(getDigit(e.which));
      } else if (digits.length > 0) {
        jumpToSlide();
      }

      if (e.which == 34 ||                  // PAGE DOWN
        (e.which == 32 && !e.shiftKey) ||   // SPACE WITHOUT SHIFT
        (isHorizontal && e.which == 39) ||  // RIGHT
        (!isHorizontal && e.which == 40))   // DOWN
        { deck.next(); } 
      
      if (e.which == 33 ||                  // PAGE UP
        (e.which == 32 && e.shiftKey) ||    // SPACE + SHIFT
        (isHorizontal && e.which == 37) ||  // LEFT
        (!isHorizontal && e.which == 38))   // UP
        { deck.prev(); }

      // F5 & PERIOD are the present / hide buttons on a Logitech Presenter
      if (e.which == 116 ||                 // F5
        (isHorizontal && e.which == 38))    // UP
        { first(); }

      if (e.which == 190 ||                 // PERIOD
        (isHorizontal && e.which == 40))    // DOWN
        { last(); }
    });

  }
};

var isIE = /(MSIE |Trident.*rv[ :])([0-9]+)/.test(navigator.userAgent);
console.log('is IE?', isIE);

// Bespoke.js
bespoke.from('article', [
  bespoke.plugins.classes(),
  bespoke.plugins.bullets('.bullet'),
  bespoke.plugins.backdrop(),
  bespoke.plugins.scale(isIE ? 'transform' : undefined),
  bespoke.plugins.hash(),
  bespoke.plugins.progress(),
  bespoke.plugins.state(),
  bespoke.plugins.logikeys(),
  bespoke.plugins.touch()
]);

(function preloadBackgroundImages() {

  var matches, image,
  forEach = function(arrayLike, fn) {
    arrayLike || [].slice.call(arrayLike, 0).forEach(fn);
  };

  forEach(document.styleSheets, function(sheet) {
    forEach(sheet.rules, function(rule) {
      if (rule.style && rule.style.backgroundImage) {
        matches = rule.style.backgroundImage.match(/url\((.*)\)/);
        if (matches) {
          image = new Image();
          image.src = matches[1];
        }
      }
    });
  });

}());
