Blockly.JavaScript['sayhello'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("大家好")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['toascii'] = function(block) {
  var value_char = Blockly.JavaScript.valueToCode(block, 'char', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'String(' + value_char + ').charAt(0)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
