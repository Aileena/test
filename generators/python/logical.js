'use strict';

goog.provide('Blockly.Python.logical');

goog.require('Blockly.Python');

Blockly.Python['controls_logical_and'] = function(block) {
  var order = Blockly.Python.ORDER_LOGICAL_AND;
  var code = '';
  if(block.numberOfChildren)
  {

    var value_name;

    for(var i = 1; i <= block.numberOfChildren -1; i++)
    {

      value_name = Blockly.Python.valueToCode(block, 'AND' + i, Blockly.Python.ORDER_ATOMIC);
      code += value_name + ' && ';
    }
    value_name = Blockly.Python.valueToCode(block, 'AND' + block.numberOfChildren, Blockly.Python.ORDER_ATOMIC);
    code += value_name;
  }
  return [code, order];
};