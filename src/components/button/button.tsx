import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsfr-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() ariaLabelText: string;

  render() {
    return (
      <button type="button" class="fr-btn--primary" aria-label={this.ariaLabelText}>
        <slot />
      </button>
    );
  }
}
