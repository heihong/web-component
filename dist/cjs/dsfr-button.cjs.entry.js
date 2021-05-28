'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8eb79917.js');

const buttonCss = ".fr-btn--primary{background-color:#000091;color:#fff;font-size:1rem;line-height:1.5rem;min-height:2.5rem;padding:0.5rem 1.5rem;outline-offset:2px;outline-width:2px}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("button", { type: "button", class: "fr-btn--primary", "aria-label": this.ariaLabelText }, index.h("slot", null)));
  }
};
Button.style = buttonCss;

exports.dsfr_button = Button;
