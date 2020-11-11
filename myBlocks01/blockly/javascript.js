Blockly.JavaScript['digitalwrite'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');

  var code = 'digitalWrite('+value_pin+', '+dropdown_mode+');\n';
  return code;
};

Blockly.JavaScript['digitalread'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'digitalRead('+value_pin+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};