Blockly.Blocks['sayhello'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("打招呼");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['toascii'] = {
  init: function() {
    this.appendValueInput("char")
        .setCheck("String")
        .appendField("轉換 ASCII Code");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['toaandc'] = {
  init: function() {
    this.appendValueInput("char")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["轉換 ASCII Code","1"], ["ASCII 轉換成字元","2"]]), "method");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
