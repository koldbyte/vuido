import libui from 'libui-node'

import { Widget } from './widget'

export class CheckBox extends Widget {
  _getDefaultAttributes() {
    return {
      ...super._getDefaultAttributes(),
      checked: false,
      value: 'text'
    };
  }

  _createWidget() {
    this.widget = new libui.UiCheckbox();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if ( this.attributes.value != '' )
      this.widget.text = this.attributes.value;
    if ( this.attributes.checked )
      this.widget.checked = true;
  }

  _setWidgetAttribute( key, value ) {
    if ( key == 'value' ) {
      if ( this.widget.text != value )
        this.widget.text = value;
    } else if ( key == 'checked' ) {
        this.widget.checked = true;
    } else {
        super._setWidgetAttribute( key, value );
    }
  }

  _setWidgetHandler( event, handler ) {
    if ( event == 'toggle' || event == 'input') {
      this.widget.onToggled( () => {
        handler( this.widget.checked );
      } );
    } else {
      super._setWidgetHandler( event, handler );
    }
  }

  _setWidgetText( text ) {
    this.widget.text = text;
  }

}
