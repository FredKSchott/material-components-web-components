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
import {LitElement, html, css} from 'lit-element/lit-element.js';
import {style as listStyle} from './style/mwc-list-item-css.js';

class DemoView extends LitElement {
  static get styles() {
    return [
      listStyle,
      css`
        header {
          background-color: #6200ee;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 4;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 8px 12px;
          box-sizing: border-box;
          font-family: "Roboto Mono", monospace;
          -webkit-font-smoothing: antialiased;
          font-size: 1.25rem;
          line-height: 2rem;
          letter-spacing: 0.02em;
          color: white;
          min-height: 64px;
          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }

        .demo-catalog-logo {
          height: 48px;
          width: 48px;
          display: inline-block;
          padding: 12px;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
        }

        .demo-list {
          margin-top: 64px;
        }

        .demo-catalog-list-icon {
          margin: 0 24px 0 12px;
        }

        .demo-heading {
          margin-left: 8px;
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <span class="demo-catalog-logo">
          <img src="https://material-components-web.appspot.com/images/ic_component_24px_white.svg">
        </span>
        <span class="demo-heading">Material Web Components Catalog</span>
      </header>
      <div class="demo-list">
        <div role="list" class="mdc-list mdc-list--two-line">
          <a role="listitem" class="mdc-list-item" href="button.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_button_24px.svg"></span>
            <span class="mdc-list-item__text">
              Button
              <span class="mdc-list-item__secondary-text">Raised and flat buttons</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="fab.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_button_24px.svg"></span>
            <span class="mdc-list-item__text">
              Floating action button
              <span class="mdc-list-item__secondary-text">The primary action in an application</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="checkbox.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_selection_control_24px.svg"></span>
            <span class="mdc-list-item__text">
              Checkbox
              <span class="mdc-list-item__secondary-text">Multi-selection controls</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="drawer.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></span>
            <span class="mdc-list-item__text">
              Drawer
              <span class="mdc-list-item__secondary-text">Multi-selection controls</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="formfield.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_text_field_24px.svg"></span>
            <span class="mdc-list-item__text">
              Form field
              <span class="mdc-list-item__secondary-text">Layout form fields with labels</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="icon.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></span>
            <span class="mdc-list-item__text">
              Icon
              <span class="mdc-list-item__secondary-text">Material design icons</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="icon-button.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></span>
            <span class="mdc-list-item__text">
              Icon Button
              <span class="mdc-list-item__secondary-text">Icon buttons allow users to take actions, and make choices, with a single tap.</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="icon-button-toggle.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></span>
            <span class="mdc-list-item__text">
              Icon Button Toggle
              <span class="mdc-list-item__secondary-text">Toggling icon states</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="linear-progress.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_progress_activity.svg"></span>
            <span class="mdc-list-item__text">
              Linear Progress
              <span class="mdc-list-item__secondary-text">Fills from 0% to 100%, represented by bars</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="radio.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_radio_button_24px.svg"></span>
            <span class="mdc-list-item__text">
              Radio buttons
              <span class="mdc-list-item__secondary-text">Single selection controls</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="ripple.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_ripple_24px.svg"></span>
            <span class="mdc-list-item__text">
              Ripple
              <span class="mdc-list-item__secondary-text">Touch ripple</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="slider.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/slider.svg"></span>
            <span class="mdc-list-item__text">
              Slider
              <span class="mdc-list-item__secondary-text">Range controls</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="snackbar.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_toast_24px.svg"></span>
            <span class="mdc-list-item__text">
              Snackbar
              <span class="mdc-list-item__secondary-text">Transient messages</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="switch.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_switch_24px.svg"></span>
            <span class="mdc-list-item__text">
              Switch
              <span class="mdc-list-item__secondary-text">On off switches</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="tabs.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_tabs_24px.svg"></span>
            <span class="mdc-list-item__text">
              Tabs
              <span class="mdc-list-item__secondary-text">Tabs with support for icon and text labels</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="textfield.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_text_field_24px.svg"></span>
            <span class="mdc-list-item__text">
              Text field
              <span class="mdc-list-item__secondary-text">Single and multiline text fields</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="textarea.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_text_field_24px.svg"></span>
            <span class="mdc-list-item__text">
              Text area
              <span class="mdc-list-item__secondary-text">Single and multiline text areas</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="top-app-bar.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></span>
            <span class="mdc-list-item__text">
              Top App Bar
              <span class="mdc-list-item__secondary-text">Top App Bars are a container for items such as application title, navigation icon, and action items.</span>
            </span>
          </a>
          <a role="listitem" class="mdc-list-item" href="top-app-bar-fixed.html">
            <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></span>
            <span class="mdc-list-item__text">
              Top App Bar Fixed
              <span class="mdc-list-item__secondary-text">Top App Bars are a container for items such as application title, navigation icon, and action items.</span>
            </span>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('demo-view', DemoView);