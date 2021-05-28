import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const buttonCss = ".fr-btn--primary{background-color:#000091;color:#fff;font-size:1rem;line-height:1.5rem;min-height:2.5rem;padding:0.5rem 1.5rem;outline-offset:2px;outline-width:2px}";

const Button = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("button", { type: "button", class: "fr-btn--primary", "aria-label": this.ariaLabelText }, h("slot", null)));
  }
  static get style() { return buttonCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const DsfrButton = /*@__PURE__*/proxyCustomElement(Button, [1,"dsfr-button",{"ariaLabelText":[1,"aria-label-text"]}]);
const MyComponent = /*@__PURE__*/proxyCustomElement(MyComponent$1, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      DsfrButton,
  MyComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { DsfrButton, MyComponent, defineCustomElements };
