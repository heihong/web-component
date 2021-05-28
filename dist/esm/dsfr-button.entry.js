import { r as registerInstance, h } from './index-36bde068.js';

const buttonCss = ".fr-btn--primary{background-color:#000091;color:#fff;font-size:1rem;line-height:1.5rem;min-height:2.5rem;padding:0.5rem 1.5rem;outline-offset:2px;outline-width:2px}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", { type: "button", class: "fr-btn--primary" }, this.label));
  }
};
Button.style = buttonCss;

export { Button as dsfr_button };
