import { Component, Prop, h } from '@stencil/core';
export class Button {
  render() {
    return (h("button", { type: "button", class: "fr-btn--primary", "aria-label": this.ariaLabelText },
      h("slot", null)));
  }
  static get is() { return "dsfr-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "ariaLabelText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "aria-label-text",
      "reflect": false
    }
  }; }
}
