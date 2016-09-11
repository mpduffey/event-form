import {Component, OnInit}																from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder}	from '@angular/forms';
import {WFTDataService}																		from 'modules/wft-data/wft-data';
import {ModalService}																			from 'modules/modal/modal-service';

@Component({
	selector:				'event-form',
	template:				`
		<form [formGroup]="evFrm">
			<input type="text" class="form-control" placeholder="Event Name" [formControl]="evFrm.controls.EventName">
			<input type="text" class="form-control" placeholder="Start Time">
			<input type="text" class="form-control" placeholder="End Time">
			<input type="text" class="form-control" placeholder="Location">
			{{output | json}}
		</form>
	`
})

export class EventForm implements OnInit {
	evFrm = new FormGroup({
		EventName: new FormControl(''),
		StartTime: new FormControl(''),
		EndTime: new FormControl(''),
		Location: new FormControl('')
	});

	constructor(private data: WFTDataService, private modal: ModalService) {
		this.data = data;
	}
	ngOnInit() {
		this.evFrm.valueChanges.subscribe(x => this.output = x;);
		console.log("evFrm: ", this.evFrm);
	}
	saveEvent = (obj) => {
		this.data.saveEvent(obj).subscribe(x => console.log(x););
	}
}