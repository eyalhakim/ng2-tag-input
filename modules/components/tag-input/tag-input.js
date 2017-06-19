var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, forwardRef, HostBinding, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, ContentChildren, ContentChild, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { TagInputAccessor, listen, constants } from '../../core';
import { TagInputForm, TagInputDropdown, TagComponent } from '../../components';
import { animations } from './animations';
var DragEvent = global.DragEvent;
var CUSTOM_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TagInputComponent; }),
    multi: true
};
var TagInputComponent = (function (_super) {
    __extends(TagInputComponent, _super);
    function TagInputComponent(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.separatorKeys = [];
        _this.separatorKeyCodes = [];
        _this.placeholder = constants.PLACEHOLDER;
        _this.secondaryPlaceholder = constants.SECONDARY_PLACEHOLDER;
        _this.transform = function (item) { return item; };
        _this.validators = [];
        _this.asyncValidators = [];
        _this.onlyFromAutocomplete = false;
        _this.errorMessages = {};
        _this.onTextChangeDebounce = 250;
        _this.pasteSplitPattern = ',';
        _this.blinkIfDupe = true;
        _this.removable = true;
        _this.editable = undefined;
        _this.allowDupes = false;
        _this.modelAsStrings = false;
        _this.trimTags = true;
        _this.ripple = true;
        _this.tabindex = undefined;
        _this.disabled = undefined;
        _this.dragZone = undefined;
        _this.onAdd = new EventEmitter();
        _this.onRemove = new EventEmitter();
        _this.onSelect = new EventEmitter();
        _this.onFocus = new EventEmitter();
        _this.onBlur = new EventEmitter();
        _this.onTextChange = new EventEmitter();
        _this.onPaste = new EventEmitter();
        _this.onValidationError = new EventEmitter();
        _this.onTagEdited = new EventEmitter();
        _this.isLoading = false;
        _this.isDropping = false;
        _this.isDragging = false;
        _this.listeners = (_a = {},
            _a[constants.KEYDOWN] = [],
            _a[constants.KEYUP] = [],
            _a.change = [],
            _a);
        _this.inputTextChange = new EventEmitter();
        _this.inputTextValue = '';
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = items.slice(0, index).concat([model], items.slice(index, items.length));
        };
        return _this;
        var _a;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        get: function () {
            return this.tabindex !== undefined ? '-1' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        if (this.onRemoving) {
            this.onRemoving(tag)
                .subscribe(function (model) {
                _this.removeItem(model, index);
            });
        }
        else {
            this.removeItem(tag, index);
        }
    };
    TagInputComponent.prototype.onAddingRequested = function (isFromAutocomplete, tag, index) {
        var _this = this;
        if (index === void 0) { index = undefined; }
        if (!tag) {
            return;
        }
        if (this.onAdding) {
            this.onAdding(tag)
                .subscribe(function (model) {
                _this.addItem(isFromAutocomplete, model, index);
            });
        }
        else {
            this.addItem(isFromAutocomplete, tag, index);
        }
    };
    TagInputComponent.prototype.isTagValid = function (tag, fromAutocomplete) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
        if (selectedItem && !fromAutocomplete) {
            return;
        }
        var dupe = this.findDupe(tag, fromAutocomplete);
        if (!this.allowDupes && dupe && this.blinkIfDupe) {
            var item = this.tags.find(function (_tag) {
                return _this.getItemValue(_tag.model) === _this.getItemValue(dupe);
            });
            if (!!item) {
                item.blink();
            }
        }
        var isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
        var assertions = [
            !dupe || this.allowDupes === true,
            this.maxItemsReached === false,
            ((isFromAutocomplete) || this.onlyFromAutocomplete === false)
        ];
        return assertions.filter(function (item) { return item; }).length === assertions.length;
    };
    TagInputComponent.prototype.createTag = function (model) {
        var trim = function (val, key) {
            return typeof val === 'string' ? val.trim() : val[key];
        };
        return __assign({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[this.displayBy] = this.trimTags ? trim(model, this.displayBy) : model, _a[this.identifyBy] = this.trimTags ? trim(model, this.identifyBy) : model, _a));
        var _a;
    };
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName]
            .forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        switch (constants.KEY_PRESS_ACTIONS[key]) {
            case constants.ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case constants.ACTIONS_KEYS.SWITCH_PREV:
                this.switchPrev(data.model);
                break;
            case constants.ACTIONS_KEYS.SWITCH_NEXT:
                this.switchNext(data.model);
                break;
            case constants.ACTIONS_KEYS.TAB:
                this.switchNext(data.model);
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.setInputValue = function (value) {
        var item = value ? this.transform(value) : '';
        this.getControl().setValue(item);
        return item;
    };
    TagInputComponent.prototype.getControl = function () {
        return this.inputForm.value;
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.isDragging) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
        if (displayAutocomplete && this.dropdown) {
            this.dropdown.show();
        }
    };
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var templates = this.templates;
        var template = templates ? templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return template && template !== menuTemplate;
    };
    TagInputComponent.prototype.switchNext = function (item) {
        if (this.tags.last.model === item) {
            this.focus(true);
            return;
        }
        var tags = this.tags.toArray();
        var tagIndex = tags.findIndex(function (tag) { return tag.model === item; });
        var tag = tags[tagIndex + 1];
        tag.select.call(tag);
    };
    TagInputComponent.prototype.switchPrev = function (item) {
        if (this.tags.first.model !== item) {
            var tags = this.tags.toArray();
            var tagIndex = tags.findIndex(function (tag) { return tag.model === item; });
            var tag = tags[tagIndex - 1];
            tag.select.call(tag);
        }
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        get: function () {
            return this.inputForm.value.value;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngOnInit = function () {
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(constants.MAX_ITEMS_WARNING);
        }
    };
    TagInputComponent.prototype.onDragStarted = function (event, index) {
        event.stopPropagation();
        this.isDragging = true;
        var draggedElement = this.items[index];
        var storedElement = { zone: this.dragZone, value: draggedElement };
        event.dataTransfer.setData(constants.DRAG_AND_DROP_KEY, JSON.stringify(storedElement));
        this.onRemoveRequested(draggedElement, index);
    };
    TagInputComponent.prototype.onDragOver = function (event) {
        this.isDropping = true;
        event.preventDefault();
    };
    TagInputComponent.prototype.onDragEnd = function () {
        this.isDragging = false;
        this.isDropping = false;
    };
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        this.onDragEnd();
        var data = event.dataTransfer.getData(constants.DRAG_AND_DROP_KEY);
        var droppedElement = JSON.parse(data);
        if (droppedElement.zone !== this.dragZone) {
            return;
        }
        this.onAddingRequested(false, droppedElement.value, index);
        event.preventDefault();
        event.stopPropagation();
    };
    TagInputComponent.prototype.ngAfterViewInit = function () {
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    TagInputComponent.prototype.trackBy = function (item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        if (item === void 0) { item = this.formValue; }
        if (index === void 0) { index = undefined; }
        var reset = function () {
            _this.setInputValue('');
            _this.focus(true, false);
        };
        var validationFilter = function (tag) {
            var isValid = _this.isTagValid(tag, fromAutocomplete);
            if (!isValid) {
                _this.onValidationError.emit(tag);
            }
            return isValid;
        };
        var appendItem = function (tag) {
            _this.appendTag(tag, index);
            _this.onAdd.emit(tag);
        };
        Observable
            .of(this.getItemDisplay(item))
            .map(function (display) { return _this.setInputValue(display); })
            .filter(function (display) { return _this.inputForm.form.valid && !!display; })
            .map(function (display) { return _this.createTag(item); })
            .filter(validationFilter)
            .subscribe(appendItem, undefined, reset);
    };
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        listen.call(this, constants.KEYDOWN, function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            if (hasKeyCode || hasKey) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue);
            }
        }, useSeparatorKeys);
    };
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        listen.call(this, constants.KEYDOWN, function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        });
    };
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue === '') {
                event.preventDefault();
            }
        });
    };
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, 'paste', this.onPasteCallback.bind(this));
    };
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form.valueChanges
            .debounceTime(this.onTextChangeDebounce)
            .subscribe(function () { return _this.onTextChange.emit(_this.formValue); });
    };
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            return !(_this.dropdown && _this.dropdown.isVisible) && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .filter(filterFn)
            .subscribe(function () {
            if (_this.addOnBlur) {
                _this.onAddingRequested(false, _this.formValue);
            }
            _this.setInputValue('');
        });
    };
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        return this.items
            .find(function (item) {
            return _this.getItemValue(item) === tag[identifyBy];
        });
    };
    TagInputComponent.prototype.onPasteCallback = function (data) {
        var _this = this;
        var text = data.clipboardData.getData('text/plain');
        text.split(this.pasteSplitPattern)
            .map(function (item) { return _this.createTag(item); })
            .forEach(function (item) { return _this.onAddingRequested(false, item); });
        this.onPaste.emit(text);
        setTimeout(function () { return _this.setInputValue(''); }, 0);
    };
    return TagInputComponent;
}(TagInputAccessor));
export { TagInputComponent };
TagInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                styleUrls: ['./tag-input.style.scss'],
                templateUrl: './tag-input.template.html',
                animations: animations
            },] },
];
TagInputComponent.ctorParameters = function () { return [
    { type: Renderer2, },
]; };
TagInputComponent.propDecorators = {
    'separatorKeys': [{ type: Input },],
    'separatorKeyCodes': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'secondaryPlaceholder': [{ type: Input },],
    'maxItems': [{ type: Input },],
    'transform': [{ type: Input },],
    'validators': [{ type: Input },],
    'asyncValidators': [{ type: Input },],
    'onlyFromAutocomplete': [{ type: Input },],
    'errorMessages': [{ type: Input },],
    'theme': [{ type: Input },],
    'onTextChangeDebounce': [{ type: Input },],
    'inputId': [{ type: Input },],
    'inputClass': [{ type: Input },],
    'clearOnBlur': [{ type: Input },],
    'hideForm': [{ type: Input },],
    'addOnBlur': [{ type: Input },],
    'addOnPaste': [{ type: Input },],
    'pasteSplitPattern': [{ type: Input },],
    'blinkIfDupe': [{ type: Input },],
    'removable': [{ type: Input },],
    'editable': [{ type: Input },],
    'allowDupes': [{ type: Input },],
    'modelAsStrings': [{ type: Input },],
    'trimTags': [{ type: Input },],
    'inputText': [{ type: Input },],
    'ripple': [{ type: Input },],
    'tabindex': [{ type: Input },],
    'disabled': [{ type: Input },],
    'dragZone': [{ type: Input },],
    'onRemoving': [{ type: Input },],
    'onAdding': [{ type: Input },],
    'onAdd': [{ type: Output },],
    'onRemove': [{ type: Output },],
    'onSelect': [{ type: Output },],
    'onFocus': [{ type: Output },],
    'onBlur': [{ type: Output },],
    'onTextChange': [{ type: Output },],
    'onPaste': [{ type: Output },],
    'onValidationError': [{ type: Output },],
    'onTagEdited': [{ type: Output },],
    'dropdown': [{ type: ContentChild, args: [TagInputDropdown,] },],
    'templates': [{ type: ContentChildren, args: [TemplateRef, { descendants: false },] },],
    'inputForm': [{ type: ViewChild, args: [TagInputForm,] },],
    'tags': [{ type: ViewChildren, args: [TagComponent,] },],
    'inputTextChange': [{ type: Output },],
    'tabindexAttr': [{ type: HostBinding, args: ['attr.tabindex',] },],
};
//# sourceMappingURL=tag-input.js.map