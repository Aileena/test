'use strict';

goog.provide('Blockly.JavaScript.logical');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['controls_logical_and'] = function(block) {
  var order = Blockly.JavaScript.ORDER_LOGICAL_AND;
  var code = '';
  if(block.numberOfChildren)
  {

    var value_name;

    for(var i = 1; i <= block.numberOfChildren -1; i++)
    {

      value_name = Blockly.JavaScript.valueToCode(block, 'AND' + i, Blockly.JavaScript.ORDER_ATOMIC);
      code += value_name + ' && ';
    }
    value_name = Blockly.JavaScript.valueToCode(block, 'AND' + block.numberOfChildren, Blockly.JavaScript.ORDER_ATOMIC);
    code += value_name;
  }
  return [code, order];
};