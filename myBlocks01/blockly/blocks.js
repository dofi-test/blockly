Blockly.Blocks['digitalwrite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.digitalWrite);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("(");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([["HIGH","1"], ["LOW","0"]]), "mode")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("digitalWrite(pin, value)");
    this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/");
  }
};

Blockly.Blocks['digitalread'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.digitalRead);
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip("digitalRead(pin)");
    this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/");
  }
};