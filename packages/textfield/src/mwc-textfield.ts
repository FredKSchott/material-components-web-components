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

import {customElement} from '@material/mwc-base/form-element.js';
import {TextFieldBase} from './mwc-textfield-base.js';
import {style} from './mwc-textfield-css.js';

export {TextFieldType} from './mwc-textfield-base.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-textfield': TextField;
  }
}

@customElement('mwc-textfield')
export class TextField extends TextFieldBase {
  static styles = style;
}
