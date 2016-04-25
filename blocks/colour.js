'use strict';

goog.provide('Blockly.Blocks.colour');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.colour.HUE = 20;

Blockly.Blocks['colour_picker'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_colour",
          "name": "COLOUR",
          "colour": "#ff0000"
        }
      ],
      "output": "Colour",
      "colour": Blockly.Blocks.colour.HUE,
      "helpUrl": Blockly.Msg.COLOUR_PICKER_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    // Colour block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.tooltip) || Blockly.Msg.COLOUR_PICKER_TOOLTIP;
    });
  }
};

Blockly.Blocks['colour_random'] = {
  /**
   * Block for random colour.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COLOUR_RANDOM_TITLE,
      "output": "Colour",
      "colour": Blockly.Blocks.colour.HUE,
      "tooltip": Blockly.Msg.COLOUR_RANDOM_TOOLTIP,
      "helpUrl": Blockly.Msg.COLOUR_RANDOM_HELPURL
    });
  }
};

Blockly.Blocks['colour_rgb'] = {
  /**
   * Block for composing a colour from RGB components.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput('RED')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_RGB_TITLE)
        .appendField(Blockly.Msg.COLOUR_RGB_RED);
    this.appendValueInput('GREEN')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_RGB_GREEN);
    this.appendValueInput('BLUE')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_RGB_BLUE);
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP);
  }
};

Blockly.Blocks['colour_blend'] = {
  /**
   * Block for blending two colours together.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput('COLOUR1')
        .setCheck('Colour')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_BLEND_TITLE)
        .appendField(Blockly.Msg.COLOUR_BLEND_COLOUR1);
    this.appendValueInput('COLOUR2')
        .setCheck('Colour')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_BLEND_COLOUR2);
    this.appendValueInput('RATIO')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_BLEND_RATIO);
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP);
  }
};
