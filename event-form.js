"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var wft_data_1 = require('modules/wft-data/wft-data');
var modal_service_1 = require('modules/modal/modal-service');
var EventForm = (function () {
    function EventForm(data, modal) {
        var _this = this;
        this.data = data;
        this.modal = modal;
        this.evFrm = new forms_1.FormGroup({
            EventName: new forms_1.FormControl(''),
            StartTime: new forms_1.FormControl(''),
            EndTime: new forms_1.FormControl(''),
            Location: new forms_1.FormControl('')
        });
        this.saveEvent = function (obj) {
            _this.data.saveEvent(obj).subscribe(function (x) { console.log(x); });
        };
        this.data = data;
    }
    EventForm.prototype.ngOnInit = function () {
        var _this = this;
        this.evFrm.valueChanges.subscribe(function (x) { _this.output = x; });
        console.log("evFrm: ", this.evFrm);
    };
    EventForm = __decorate([
        core_1.Component({
            selector: 'event-form',
            template: "\n\t\t<form [formGroup]=\"evFrm\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Event Name\" [formControl]=\"evFrm.controls.EventName\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Start Time\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"End Time\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Location\">\n\t\t\t{{output | json}}\n\t\t</form>\n\t"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof wft_data_1.WFTDataService !== 'undefined' && wft_data_1.WFTDataService) === 'function' && _a) || Object, (typeof (_b = typeof modal_service_1.ModalService !== 'undefined' && modal_service_1.ModalService) === 'function' && _b) || Object])
    ], EventForm);
    return EventForm;
    var _a, _b;
}());
exports.EventForm = EventForm;
//# sourceMappingURL=event-form.js.map