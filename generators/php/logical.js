'use strict';

goog.provide('Blockly.PHP.logical');

goog.require('Blockly.PHP');

Blockly.PHP['controls_logical_and'] = function(block) {
  var order = Blockly.PHP.ORDER_LOGICAL_AND;
  var code = '';
  if(block.numberOfChildren)
  {

    var value_name;

    for(var i = 1; i <= block.numberOfChildren -1; i++)
    {

      value_name = Blockly.PHP.valueToCode(block, 'AND' + i, Blockly.PHP.ORDER_ATOMIC);
      code += value_name + ' && ';
    }
    value_name = Blockly.PHP.valueToCode(block, 'AND' + block.numberOfChildren, Blockly.PHP.ORDER_ATOMIC);
    code += value_name;
  }
  return [code, order];
};