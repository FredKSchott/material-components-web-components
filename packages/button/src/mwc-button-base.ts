/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {classMap, html, LitElement, property} from '@material/mwc-base/base-element';
import {ripple} from '@material/mwc-ripple/ripple-directive.js';

export class ButtonBase extends LitElement {
  @property({type: Boolean}) raised = false;

  @property({type: Boolean}) unelevated = false;

  @property({type: Boolean}) outlined = false;

  @property({type: Boolean}) dense = false;

  @property({type: Boolean, reflect: true}) disabled = false;

  @property({type: Boolean}) trailingIcon = false;

  @property() icon = '';

  @property() label = '';

  protected createRenderRoot() {
    return this.attachShadow({mode: 'open', delegatesFocus: true});
  }

  protected render() {
    const classes = {
      'mdc-button--raised': this.raised,
      'mdc-button--unelevated': this.unelevated,
      'mdc-button--outlined': this.outlined,
      'mdc-button--dense': this.dense,
    };
    const mdcButtonIcon =
        html`<span class="material-icons mdc-button__icon">${this.icon}</span>`;
    return html`
      <button .ripple="${ripple({
      unbounded: false
    })}"
          class="mdc-button ${classMap(classes)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}">
        ${this.icon && !this.trailingIcon ? mdcButtonIcon : ''}
        <span class="mdc-button__label">${this.label}</span>
        ${this.icon && this.trailingIcon ? mdcButtonIcon : ''}
        <slot></slot>
      </button>`;
  }
}
