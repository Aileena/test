'use strict';

goog.provide('Blockly.Dart.logical');

goog.require('Blockly.Dart');

Blockly.Dart['controls_logical_and'] = function(block) {
  var order = Blockly.Dart.ORDER_LOGICAL_AND;
  var code = '';
  if(block.numberOfChildren)
  {

    var value_name;

    for(var i = 1; i <= block.numberOfChildren -1; i++)
    {

      value_name = Blockly.Dart.valueToCode(block, 'AND' + i, Blockly.Dart.ORDER_ATOMIC);
      code += value_name + ' && ';
    }
    value_name = Blockly.Dart.valueToCode(block, 'AND' + block.numberOfChildren, Blockly.Dart.ORDER_ATOMIC);
    code += value_name;
  }
  return [code, order];
};