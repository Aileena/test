'use strict';

goog.provide('Blockly.Blocks.logical');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.logical.HUE = 105;

Blockly.Blocks['controls_logical_and'] = {
  init: function() {
    /* this.appendValueInput("AND0")
        .setCheck(["Boolean", "Array"])
        .appendField("condition0"); */
	this.appendDummyInput().appendField('AND');
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.logical.HUE);
    this.setTooltip('');
	this.setMutator(new Blockly.Mutator(['controls_condition_block']));
	this.numberOfChildren = 0;
  },
  mutationToDom: function()
  {
	  if(!this.numberOfChildren)
	  {
		  return null;
	  }
	  var container = document.createElement('mutation');
	  if(this.numberOfChildren)
	  {
		  container.setAttribute('children', this.numberOfChildren);
	  }
	  return container;
  },
  domToMutation: function(xmlElement)
  {
	  this.numberOfChildren = parseInt(xmlElement.getAttribute('children'), 10) || 0;
	  for(var i = 1; i <= this.numberOfChildren; i++)
	  {
		  this.appendValueInput('AND' + i)
			  .setCheck('Boolean')
			  .appendField('and');
	  }
  },
  decompose: function(workspace)
  {
	  var containerBlock = Blockly.Block.obtain(workspace, 'controls_and_tooltip');
	  containerBlock.initSvg();
	  var connection = containerBlock.getInput('STACK').connection;
	  for(var i = 1; i <= this.numberOfChildren; i++)
	  {
		  var conditionBlock = Blockly.Block.obtain(workspace, 'controls_condition_block');
		  conditionBlock.initSvg();
		  connection.connect(conditionBlock.previousConnection);
		  connection = conditionBlock.nextConnection;
	  }
	  return containerBlock;
  },
  compose: function(containerBlock)
  {
	  for(var i = this.numberOfChildren; i > 0; i--)
	  {
		  this.removeInput('AND' + i);
	  }
	  this.numberOfChildren = 0;
	  var clauseBlock = containerBlock.getInputTargetBlock('STACK');
	  while(clauseBlock)
	  {
		  this.numberOfChildren++;
		  var andInput = this.appendValueInput('AND' + this.numberOfChildren)
							.setCheck('Boolean')
							.appendField('condition' + this.numberOfChildren);
		  if(clauseBlock.valueConnection_)
		  {
			  andInput.connection.connect(clauseBlock.valueConnection_);
		  }
		  clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
	  }
  },
  saveConnections: function(containerBlock)
  {
	  var clauseBlock = containerBlock.getInputTargetBlock('STACK');
	  var i = 1;
	  while(clauseBlock)
	  {
		  var andInput = this.getInput('AND' + i);
		  clauseBlock.valueConnection_ = andInput && andInput.connection.targetConnection;
		  i++;
		  clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
	  }
  }
};

Blockly.Blocks['controls_and_tooltip'] = 
{
	init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField('AND');
    this.appendStatementInput('STACK');
    this.setTooltip('multiple and control');
    this.contextMenu = false;
	}
};
Blockly.Blocks['controls_condition_block'] = 
{
	init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField('condition');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('conditionalStatement');
    this.contextMenu = false;
	}
};