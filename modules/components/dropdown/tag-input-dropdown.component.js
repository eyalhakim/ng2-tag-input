var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Component, ViewChild, forwardRef, Inject, TemplateRef, ContentChildren, Input, HostListener } from '@angular/core';
import { Ng2Dropdown } from 'ng2-material-dropdown';
import { TagInputComponent } from '../../components';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
var TagInputDropdown = (function () {
    function TagInputDropdown(tagInput) {
        var _this = this;
        this.tagInput = tagInput;
        this.offset = '50 0';
        this.focusFirstElement = false;
        this.showDropdownIfEmpty = false;
        this.minimumTextLength = 1;
        this.displayBy = 'display';
        this.identifyBy = 'value';
        this.matchingFn = function (value, target) {
            var targetValue = target[_this.displayBy].toString();
            return targetValue && targetValue
                .toLowerCase()
                .indexOf(value.toLowerCase()) >= 0;
        };
        this.appendToBody = true;
        this.items = [];
        this._autocompleteItems = [];
        this.show = function () {
            var value = _this.tagInput.inputForm.value.value.trim();
            var position = _this.tagInput.inputForm.getElementPosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var hasMinimumText = value.length >= _this.minimumTextLength;
            var assertions = [
                hasItems,
                _this.isVisible === false,
                hasMinimumText
            ];
            var showDropdown = (assertions.filter(function (item) { return item; }).length === assertions.length) ||
                showDropdownIfEmpty;
            var hideDropdown = _this.isVisible && (!hasItems || !hasMinimumText);
            _this.setItems(items);
            if (showDropdown && !_this.isVisible) {
                _this.dropdown.show(position);
            }
            else if (hideDropdown) {
                _this.dropdown.hide();
            }
        };
        this.requestAdding = function (item) {
            if (!item) {
                return;
            }
            var model = _this.createTagModel(item);
            _this.tagInput.onAddingRequested(true, model);
            _this.dropdown.hide();
        };
        this.resetItems = function () {
            _this.items = [];
        };
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            _this.autocompleteObservable(text)
                .subscribe(function (data) {
                _this.setLoadingState(false)
                    .populateItems(data)
                    .show();
            }, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
                var _a;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked()
            .subscribe(this.requestAdding);
        this.onHide()
            .subscribe(this.resetItems);
        this.tagInput.inputForm.onKeyup
            .subscribe(this.show);
        if (this.autocompleteObservable) {
            this.tagInput
                .onTextChange
                .filter(function (text) { return text.trim().length >= _this.minimumTextLength; })
                .subscribe(this.getItemsFromObservable);
        }
    };
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.createTagModel = function (item) {
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return __assign({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
        var _a;
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        return this.autocompleteItems.filter(function (item) {
            var hasValue = _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && hasValue === false;
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_a = {},
                _a[_this.displayBy] = item,
                _a[_this.identifyBy] = item,
                _a) : item;
            var _a;
        });
        return this;
    };
    TagInputDropdown.prototype.setLoadingState = function (state) {
        this.tagInput.isLoading = state;
        return this;
    };
    return TagInputDropdown;
}());
export { TagInputDropdown };
TagInputDropdown.decorators = [
    { type: Component, args: [{
                selector: 'tag-input-dropdown',
                templateUrl: './tag-input-dropdown.template.html'
            },] },
];
TagInputDropdown.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return TagInputComponent; }),] },] },
]; };
TagInputDropdown.propDecorators = {
    'dropdown': [{ type: ViewChild, args: [Ng2Dropdown,] },],
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
    'offset': [{ type: Input },],
    'focusFirstElement': [{ type: Input },],
    'showDropdownIfEmpty': [{ type: Input },],
    'autocompleteObservable': [{ type: Input },],
    'minimumTextLength': [{ type: Input },],
    'limitItemsTo': [{ type: Input },],
    'displayBy': [{ type: Input },],
    'identifyBy': [{ type: Input },],
    'matchingFn': [{ type: Input },],
    'appendToBody': [{ type: Input },],
    'autocompleteItems': [{ type: Input },],
    'scrollListener': [{ type: HostListener, args: ['window:scroll',] },],
};
//# sourceMappingURL=tag-input-dropdown.component.js.map