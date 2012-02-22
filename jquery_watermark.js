/*
 * Matt Pestritto
 * https://github.com/mpestritto/jquery-input-hints
 *
 * Hints automatically added to inputs
 *   add class : input_use_hint
 *   add alt tag with hint text
 *
 *
 * make sure two classes are added to css
 *   input.input_hint { color: #888; }
 *   input.input_hint_active { color: #000; }
 *
 *  Notes:
 *   works for text, password and email input types
 *   doesn't overwrite existing classes
 *
 *  Inspiration taken from: http://www.drewnoakes.com/code/javascript/hintTextbox.html
 *   rewrite in jquery, addition of email input type, doesn't overwrite existing css classes
 */

var UseHintClass = "input_use_hint";
var HintClass = "input_hint";
var HintActiveClass = "input_hint_active";

function init_input_hints() {
  var inputs = $(':input');
  for (i=0; i<inputs.length; i++) {
    var input = $('#' + inputs[i].id)

    if (input.attr('type')!="text" && input.attr('type')!="password" && input.attr('type')!="email")
      continue;

    if (input.hasClass(UseHintClass)) {
      if (input.val()=='' && input.attr('alt')){
        input.addClass(HintClass);
        input.val(input.attr('alt'));
      };

      input.focus(function(){
        var input = $('#' + this.id);
        if (input.val()==input.attr('alt')) {
          input.val('');
          input.removeClass(HintClass);
          input.addClass(HintActiveClass);
        };
      });

      input.blur(function(){
          var input = $('#' + this.id);
          if (input.val().length==0) {
            input.val(input.attr('alt'));
            input.removeClass(HintActiveClass);
            input.addClass(HintClass);
          };
      });
    };
  };
};

$(document).ready(function () {
  init_input_hints();
});

