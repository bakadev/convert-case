function toTitleCase(input){
  var smallWords = /^(a|an|and|as|at|but|by|be|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
  return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase();
  });
};

function toSentenceCase(input) {
  var a = input.toLowerCase(),
    b = true,
    c = '';
  for (var d = 0; d < a.length; d++) {
    var e = a.charAt(d);
    if (/\.|\!|\?|\n|\r/.test(e)) {
        b = true;
    } else if ($.trim(e) != '' && b == true) {
        e = e.toUpperCase();
        b = false;
    }
    c += e;
  }
  c = c.replace(/ i /g, ' I ');
  return c;
}

$(function(){
  $('#toUpperCase').on('click', function(e){
    var outputText = $('#input').val().toUpperCase();
    $('#output').val(outputText);
  });
  $('#toLowerCase').on('click', function(e){
    var outputText = $('#input').val().toLowerCase();
    $('#output').val(outputText);
  });
  $('#toSentenceCase').on('click', function(e){
    var outputText = toSentenceCase($('#input').val());
    $('#output').val(outputText);
  });
  $('#toTitleCase').on('click', function(e){
    var outputText = toTitleCase($('#input').val());
    $('#output').val(outputText);
  });
});
