'use strict';

goog.provide('Blockly.Lua.logical');

goog.require('Blockly.Lua');

Blockly.Lua['controls_logical_and'] = function(block) {
  var order = Blockly.Lua.ORDER_LOGICAL_AND;
  var code = '';
  if(block.numberOfChildren)
  {

    var value_name;

    for(var i = 1; i <= block.numberOfChildren -1; i++)
    {

      value_name = Blockly.Lua.valueToCode(block, 'AND' + i, Blockly.Lua.ORDER_ATOMIC);
      code += value_name + ' && ';
    }
    value_name = Blockly.Lua.valueToCode(block, 'AND' + block.numberOfChildren, Blockly.Lua.ORDER_ATOMIC);
    code += value_name;
  }
  return [code, order];
};