import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsfr-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() label: string;

  render() {
    return (
      <button type="button" class="fr-btn--primary">
        {this.label}
      </button>
    );
  }
}
