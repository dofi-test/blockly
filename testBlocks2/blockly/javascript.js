Blockly.JavaScript['sayhello'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("大家好")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['toascii'] = function(block) {
  var value_char = Blockly.JavaScript.valueToCode(block, 'char', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'String(' + value_char + ').charCodeAt(0)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['toaandc'] = function(block) {
  var dropdown_method = block.getFieldValue('method');
  var value_char = Blockly.JavaScript.valueToCode(block, 'char', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if(dropdown_method == "1") {
    code = 'String(' + value_char + ').charCodeAt(0)';
  } else if(dropdown_method == "2") {
    code = 'String.fromCharCode(' + value_char + ')';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
