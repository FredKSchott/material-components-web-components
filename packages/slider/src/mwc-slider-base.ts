/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

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
import {addHasRemoveClass, classMap, EventType, FormElement, html, observer, property, query, SpecificEventListener, TemplateResult} from '@material/mwc-base/form-element.js';
import {MDCSliderAdapter} from '@material/slider/adapter.js';
import MDCSliderFoundation from '@material/slider/foundation.js';
import {repeat} from 'lit-html/directives/repeat.js';

const {INPUT_EVENT, CHANGE_EVENT} = MDCSliderFoundation.strings;

export class SliderBase extends FormElement {
  protected mdcFoundation!: MDCSliderFoundation;

  protected readonly mdcFoundationClass = MDCSliderFoundation;

  @query('.mdc-slider') protected mdcRoot!: HTMLElement;

  @query('.mdc-slider') protected formElement!: HTMLElement;

  @query('.mdc-slider__thumb-container') protected thumbContainer!: HTMLElement;

  @query('.mdc-slider__track') protected trackElement!: HTMLElement;

  @query('.mdc-slider__pin-value-marker') protected pinMarker!: HTMLElement;

  @query('.mdc-slider__track-marker-container')
  protected trackMarkerContainer!: HTMLElement;

  @property({type: Number})
  @observer(function(this: SliderBase, value: number) {
    this.mdcFoundation.setValue(value);
  })
  value = 0;

  @property({type: Number})
  @observer(function(this: SliderBase, value: number) {
    this.mdcFoundation.setMin(value);
  })
  min = 0;

  @property({type: Number})
  @observer(function(this: SliderBase, value: number) {
    this.mdcFoundation.setMax(value);
  })
  max = 100;

  @property({type: Number})
  @observer(function(this: SliderBase, value: number) {
    this.mdcFoundation.setStep(value);
  })
  step = 0;

  @property({type: Boolean, reflect: true})
  @observer(function(this: SliderBase, value: boolean) {
    this.mdcFoundation.setDisabled(value);
  })
  disabled = false;

  @property({type: Boolean, reflect: true}) discrete = false;

  @property({type: Boolean, reflect: true})
  @observer(function(this: SliderBase) {
    this.mdcFoundation.setupTrackMarker();
  })
  markers = false;

  @property({type: Number}) private _numMarkers = 0;

  // TODO(sorvell) #css: needs a default width
  protected render() {
    const {value, min, max, step, disabled, discrete, markers, _numMarkers} =
        this;
    const hostClassInfo = {
      'mdc-slider--discrete': discrete,
      'mdc-slider--display-markers': markers && discrete,
    };

    let markersTemplate: TemplateResult|string = '';

    if (discrete && markers) {
      const markerEls = repeat(
          new Array(_numMarkers),
          () => html`<div class="mdc-slider__track-marker"></div>`);

      markersTemplate = html`
        <div class="mdc-slider__track-marker-container">
          ${markerEls}
        </div>`;
    }
    return html`
      <div class="mdc-slider ${classMap(hostClassInfo)}"
           tabindex="0" role="slider"
           aria-valuemin="${min}" aria-valuemax="${max}"
           aria-valuenow="${value}" aria-disabled="${disabled}"
           data-step="${step}">
      <div class="mdc-slider__track-container">
        <div class="mdc-slider__track"></div>
        ${markersTemplate}
      </div>
      <div class="mdc-slider__thumb-container">
        <!-- TODO: use cache() directive -->
        ${
        discrete ? html`<div class="mdc-slider__pin">
          <span class="mdc-slider__pin-value-marker"></span>
        </div>` :
                   ''}
        <svg class="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875"></circle>
        </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`;
  }

  protected createAdapter(): MDCSliderAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      getAttribute: (name: string) => this.mdcRoot.getAttribute(name),
      setAttribute: (name: string, value: string) =>
          this.mdcRoot.setAttribute(name, value),
      removeAttribute: (name: string) => this.mdcRoot.removeAttribute(name),
      computeBoundingRect: () => this.mdcRoot.getBoundingClientRect(),
      getTabIndex: () => this.mdcRoot.tabIndex,
      registerInteractionHandler:
          <K extends EventType>(type: K, handler: SpecificEventListener<K>) =>
              this.mdcRoot.addEventListener(type, handler),
      deregisterInteractionHandler:
          <K extends EventType>(type: K, handler: SpecificEventListener<K>) =>
              this.mdcRoot.removeEventListener(type, handler),
      registerThumbContainerInteractionHandler:
          <K extends EventType>(type: K, handler: SpecificEventListener<K>) =>
              this.thumbContainer.addEventListener(type, handler),
      deregisterThumbContainerInteractionHandler:
          <K extends EventType>(type: K, handler: SpecificEventListener<K>) =>
              this.thumbContainer.removeEventListener(type, handler),
      registerBodyInteractionHandler:
          <K extends EventType>(type: K, handler: SpecificEventListener<K>) =>
              document.body.addEventListener(type, handler),
      deregisterBodyInteractionHandler:
          <K extends EventType>(type: K, handler: SpecificEventListener<K>) =>
              document.body.removeEventListener(type, handler),
      registerResizeHandler: (handler: SpecificEventListener<'resize'>) =>
          window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler: SpecificEventListener<'resize'>) =>
          window.removeEventListener('resize', handler),
      notifyInput: () => {
        const value = this.mdcFoundation.getValue();
        if (value !== this.value) {
          this.value = value;
          this.dispatchEvent(new CustomEvent(
              INPUT_EVENT, {detail: this, bubbles: true, cancelable: true}));
        }
      },
      notifyChange: () => {
        this.dispatchEvent(new CustomEvent(
            CHANGE_EVENT, {detail: this, bubbles: true, cancelable: true}));
      },
      setThumbContainerStyleProperty: (propertyName: string, value: string) =>
          this.thumbContainer.style.setProperty(propertyName, value),
      setTrackStyleProperty: (propertyName: string, value: string) =>
          this.trackElement.style.setProperty(propertyName, value),
      setMarkerValue: (value: number) => this.pinMarker.innerText =
          value.toString(),
      appendTrackMarkers: (numMarkers: number) => this._numMarkers = numMarkers,
      removeTrackMarkers: () => {},
      setLastTrackMarkersStyleProperty: (propertyName: string, value: string) =>
          // We remove and append new nodes, thus, the last track marker must be
          // dynamically found.
      (this.mdcRoot.querySelector('.mdc-slider__track-marker:last-child') as
       HTMLElement)
          .style.setProperty(propertyName, value),
      isRTL: () => getComputedStyle(this.mdcRoot).direction === 'rtl',
    };
  }

  layout() {
    this.mdcFoundation.layout();
  }
}
