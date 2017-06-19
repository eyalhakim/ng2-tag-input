import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TagInputModule } from 'modules';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
function getItems() {
    return ['Javascript', 'Typescript'];
}
var validators = [Validators.minLength(3), function (control) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }
        return null;
    }];
var BasicTagInputComponent = (function () {
    function BasicTagInputComponent() {
        this.items = getItems();
    }
    return BasicTagInputComponent;
}());
export { BasicTagInputComponent };
BasicTagInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\"></tag-input>"
            },] },
];
BasicTagInputComponent.ctorParameters = function () { return []; };
var TagInputComponentWithOutputs = (function () {
    function TagInputComponentWithOutputs() {
        this.items = getItems();
        this.validators = validators;
    }
    TagInputComponentWithOutputs.prototype.onAdd = function () { };
    TagInputComponentWithOutputs.prototype.onRemove = function () { };
    return TagInputComponentWithOutputs;
}());
export { TagInputComponentWithOutputs };
TagInputComponentWithOutputs.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input\n                  [(ngModel)]=\"items\"\n                  (onRemove)=\"onRemove($event)\"\n                  (onAdd)=\"onAdd($event)\">\n              </tag-input>"
            },] },
];
TagInputComponentWithOutputs.ctorParameters = function () { return []; };
var TagInputComponentTagsAsObjects = (function () {
    function TagInputComponentTagsAsObjects() {
        this.items = [{ value: 0, display: 'React' }, { value: 1, display: 'Angular' }];
    }
    return TagInputComponentTagsAsObjects;
}());
export { TagInputComponentTagsAsObjects };
TagInputComponentTagsAsObjects.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\"></tag-input>"
            },] },
];
TagInputComponentTagsAsObjects.ctorParameters = function () { return []; };
var TagInputComponentCustomTagsAsObjects = (function () {
    function TagInputComponentCustomTagsAsObjects() {
        this.items = [{ id: 0, name: 'React' }, { id: 1, name: 'Angular' }];
    }
    return TagInputComponentCustomTagsAsObjects;
}());
export { TagInputComponentCustomTagsAsObjects };
TagInputComponentCustomTagsAsObjects.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\"></tag-input>"
            },] },
];
TagInputComponentCustomTagsAsObjects.ctorParameters = function () { return []; };
var TagInputComponentWithValidation = (function () {
    function TagInputComponentWithValidation() {
        this.items = getItems();
        this.validators = validators;
    }
    TagInputComponentWithValidation.prototype.onAdd = function () { };
    TagInputComponentWithValidation.prototype.onRemove = function () { };
    return TagInputComponentWithValidation;
}());
export { TagInputComponentWithValidation };
TagInputComponentWithValidation.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input\n                  [(ngModel)]=\"items\"\n                  [validators]=\"validators\"\n                  (onRemove)=\"onRemove($event)\"\n                  (onAdd)=\"onAdd($event)\">\n              </tag-input>"
            },] },
];
TagInputComponentWithValidation.ctorParameters = function () { return []; };
var TagInputComponentWithTransformer = (function () {
    function TagInputComponentWithTransformer() {
        this.items = getItems();
        this.validators = validators.splice(0, 1);
    }
    TagInputComponentWithTransformer.prototype.addPrefix = function (item) {
        return "prefix: " + item;
    };
    return TagInputComponentWithTransformer;
}());
export { TagInputComponentWithTransformer };
TagInputComponentWithTransformer.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\"\n                          [validators]=\"validators\"\n                          [transform]=\"addPrefix\">\n                         </tag-input>"
            },] },
];
TagInputComponentWithTransformer.ctorParameters = function () { return []; };
var TagInputComponentWithPlaceholder = (function () {
    function TagInputComponentWithPlaceholder() {
        this.items = getItems();
    }
    return TagInputComponentWithPlaceholder;
}());
export { TagInputComponentWithPlaceholder };
TagInputComponentWithPlaceholder.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\" [placeholder]=\"'New Tag'\"></tag-input>"
            },] },
];
TagInputComponentWithPlaceholder.ctorParameters = function () { return []; };
var TagInputComponentWithMaxItems = (function () {
    function TagInputComponentWithMaxItems() {
        this.items = getItems();
    }
    return TagInputComponentWithMaxItems;
}());
export { TagInputComponentWithMaxItems };
TagInputComponentWithMaxItems.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\" [maxItems]=\"2\"></tag-input>"
            },] },
];
TagInputComponentWithMaxItems.ctorParameters = function () { return []; };
var TagInputComponentWithAutocomplete = (function () {
    function TagInputComponentWithAutocomplete() {
        this.items = getItems();
    }
    return TagInputComponentWithAutocomplete;
}());
export { TagInputComponentWithAutocomplete };
TagInputComponentWithAutocomplete.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\">\n                    <tag-input-dropdown [autocompleteItems]=\"['item1', 'item2', 'itam3']\"></tag-input-dropdown>\n               </tag-input>"
            },] },
];
TagInputComponentWithAutocomplete.ctorParameters = function () { return []; };
var TagInputComponentWithTemplate = (function () {
    function TagInputComponentWithTemplate() {
        this.items = getItems();
    }
    return TagInputComponentWithTemplate;
}());
export { TagInputComponentWithTemplate };
TagInputComponentWithTemplate.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\">\n                    <ng-template let-item=\"item\">\n                        <span class=\"custom-class\">\n                            item: {{ item }}\n                        </span>\n\n                        <span (click)=\"input.removeItem(item)\" class=\"ng2-tag__remove-button\">\n                            x\n                        </span>\n                    </ng-template>\n                </tag-input>"
            },] },
];
TagInputComponentWithTemplate.ctorParameters = function () { return []; };
var TagInputComponentWithOnlyAutocomplete = (function () {
    function TagInputComponentWithOnlyAutocomplete() {
        this.items = getItems();
    }
    return TagInputComponentWithOnlyAutocomplete;
}());
export { TagInputComponentWithOnlyAutocomplete };
TagInputComponentWithOnlyAutocomplete.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\"\n                           [onlyFromAutocomplete]=\"true\">\n                   <tag-input-dropdown [autocompleteItems]=\"['item1', 'item2', 'itam3']\"></tag-input-dropdown>\n               </tag-input>"
            },] },
];
TagInputComponentWithOnlyAutocomplete.ctorParameters = function () { return []; };
var TagInputComponentWithModelAsStrings = (function () {
    function TagInputComponentWithModelAsStrings() {
        this.items = getItems();
    }
    return TagInputComponentWithModelAsStrings;
}());
export { TagInputComponentWithModelAsStrings };
TagInputComponentWithModelAsStrings.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\" [modelAsStrings]=\"true\"></tag-input>"
            },] },
];
TagInputComponentWithModelAsStrings.ctorParameters = function () { return []; };
var TagInputComponentWithAddOnBlur = (function () {
    function TagInputComponentWithAddOnBlur() {
        this.items = getItems();
    }
    return TagInputComponentWithAddOnBlur;
}());
export { TagInputComponentWithAddOnBlur };
TagInputComponentWithAddOnBlur.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\" [addOnBlur]=\"true\">\n                   <tag-input-dropdown [autocompleteItems]=\"['item1', 'item2', 'itam3']\"></tag-input-dropdown>\n               </tag-input>"
            },] },
];
TagInputComponentWithAddOnBlur.ctorParameters = function () { return []; };
var TagInputComponentWithHooks = (function () {
    function TagInputComponentWithHooks() {
        this.items = getItems();
    }
    TagInputComponentWithHooks.prototype.onAdding = function (tag) {
        return;
    };
    TagInputComponentWithHooks.prototype.onRemoving = function (tag) {
        return;
    };
    return TagInputComponentWithHooks;
}());
export { TagInputComponentWithHooks };
TagInputComponentWithHooks.decorators = [
    { type: Component, args: [{
                selector: 'test-app',
                template: "<tag-input [(ngModel)]=\"items\" \n                          [onRemoving]=\"onRemoving\"\n                          [onAdding]=\"onAdding\"></tag-input>"
            },] },
];
TagInputComponentWithHooks.ctorParameters = function () { return []; };
var COMPONENTS = [
    BasicTagInputComponent,
    TagInputComponentWithPlaceholder,
    TagInputComponentWithOutputs,
    TagInputComponentWithTransformer,
    TagInputComponentWithValidation,
    TagInputComponentWithMaxItems,
    TagInputComponentWithTemplate,
    TagInputComponentWithAutocomplete,
    TagInputComponentWithOnlyAutocomplete,
    TagInputComponentTagsAsObjects,
    TagInputComponentCustomTagsAsObjects,
    TagInputComponentWithModelAsStrings,
    TagInputComponentWithAddOnBlur,
    TagInputComponentWithHooks
];
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
export { TestModule };
TestModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, TagInputModule],
                declarations: COMPONENTS.slice(),
                exports: COMPONENTS.slice()
            },] },
];
TestModule.ctorParameters = function () { return []; };
//# sourceMappingURL=testing-helpers.js.map