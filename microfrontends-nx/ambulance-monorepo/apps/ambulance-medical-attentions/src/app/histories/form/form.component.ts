import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { GroupComponent } from '../../../../../../libs/ui/src/lib/group/group.component';
import {
  controlFormGroups,
  optionsFormGroup,
} from '../../../../../../libs/ui/src/lib/group/types/option-form-group';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, GroupComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formGroup: FormGroup;
  formGeneral: FormGroup;
  formMedicalAttention: FormGroup;

  generalOptions: optionsFormGroup = [
    {
      name: 'request',
      controls: [
        {
          name: 'requestDate',
          errorMessage: 'Request date is required',
          label: 'Request date',
          required: true,
          type: 'DATE',
        },
        {
          name: 'historyNumber',
          errorMessage: 'History number is required',
          label: 'History number',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'company',
          errorMessage: 'Company is required',
          label: 'Company',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'contractName',
          errorMessage: 'Contract name is required',
          label: 'Contract name',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'operatorName',
          errorMessage: 'Operator name is required',
          label: 'Operator name',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'authorizationCode',
          errorMessage: 'Authorization code is required',
          label: 'Authorization code',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'policyNumber',
          errorMessage: 'Policy number is required',
          label: 'Policy number',
          required: true,
          type: 'TEXT',
        },
      ],
    },
    {
      name: 'patient',
      controls: [
        {
          name: 'firstname',
          errorMessage: 'First name is required',
          label: 'First name',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'lastname',
          errorMessage: 'Last name is required',
          label: 'Last name',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'phoneNumber',
          errorMessage: 'Phone number is required',
          label: 'Phone number',
          required: true,
          type: 'TEXT',
        },
      ],
    },
    {
      name: 'location',
      controls: [
        {
          name: 'district',
          errorMessage: 'District is required',
          label: 'District',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'address',
          errorMessage: 'Address is required',
          label: 'Address',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'reference',
          errorMessage: 'Reference is required',
          label: 'Reference',
          required: true,
          type: 'TEXT',
        },
      ],
    },
  ];

  medicalAttentionOptions: optionsFormGroup = [
    {
      name: 'mainData',
      controls: [
        {
          name: 'attentionDate',
          errorMessage: 'Attention date is required',
          label: 'Attention date',
          required: true,
          type: 'DATE',
        },
        {
          name: 'urgencyType',
          errorMessage: 'Urgency type is required',
          label: 'Urgency type',
          required: true,
          type: 'SELECT',
          options: [
            { value: '1', label: 'Urgent' },
            { value: '2', label: 'Not urgent' },
            { value: '3', label: 'Normal' },
          ],
        },
      ],
    },
    {
      name: 'medicalOfficers',
      controls: [
        {
          name: 'medicName',
          errorMessage: 'Medic name is required',
          label: 'Medic name',
          required: true,
          type: 'TEXT',
        },
        {
          name: 'nurseName',
          errorMessage: 'Nurse name is required',
          label: 'Nurse name',
          required: true,
          type: 'TEXT',
        },
      ],
    },
  ];

  formGeneralRequest: FormGroup;
  formGeneralPatient: FormGroup;
  formGeneralLocation: FormGroup;
  formMedicalAttentionMainData: FormGroup;
  formMedicalAttentionMedicalOfficers: FormGroup;

  controlsGeneralRequest: controlFormGroups;
  controlsGeneralPatient: controlFormGroups;
  controlsGeneralLocation: controlFormGroups;
  controlsMedicalAttentionMainData: controlFormGroups;
  controlsMedicalAttentionMedicalOfficers: controlFormGroups;

  controlValues: Record<string, any> = {};

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      general: fb.group({
        request: fb.group({
          requestDate: [null, Validators.required],
          historyNumber: [null, Validators.required],
          company: [null, Validators.required],
          contractName: [null, Validators.required],
          operatorName: [null, Validators.required],
          authorizationCode: [null, Validators.required],
          policyNumber: [null, Validators.required],
        }),
        patient: fb.group({
          firstname: [null, Validators.required],
          lastname: [null, Validators.required],
          phoneNumber: [null, Validators.required],
        }),
        location: fb.group({
          district: [null, Validators.required],
          address: [null, Validators.required],
          reference: [null, Validators.required],
        }),
      }),
      medicalAttention: fb.group({
        mainData: fb.group({
          attentionDate: [null, Validators.required],
          urgencyType: [null, Validators.required],
        }),
        medicalOfficers: fb.group({
          medicName: [null, Validators.required],
          nurseName: [null, Validators.required],
        }),
      }),
    });
    this.formGeneral = this.formGroup.get('general') as FormGroup;
    this.formMedicalAttention = this.formGroup.get(
      'medicalAttention'
    ) as FormGroup;

    this.formGeneralRequest = this.formGeneral.get('request') as FormGroup;
    this.formGeneralPatient = this.formGeneral.get('patient') as FormGroup;
    this.formGeneralLocation = this.formGeneral.get('location') as FormGroup;
    this.formMedicalAttentionMainData = this.formMedicalAttention.get(
      'mainData'
    ) as FormGroup;
    this.formMedicalAttentionMedicalOfficers = this.formMedicalAttention.get(
      'medicalOfficers'
    ) as FormGroup;

    this.controlsGeneralRequest = this.generalOptions[0].controls;
    this.controlsGeneralPatient = this.generalOptions[1].controls;
    this.controlsGeneralLocation = this.generalOptions[2].controls;
    this.controlsMedicalAttentionMainData =
      this.medicalAttentionOptions[0].controls;
    this.controlsMedicalAttentionMedicalOfficers =
      this.medicalAttentionOptions[1].controls;

    this.formGroup.valueChanges.subscribe((value) => {
      this.controlValues = value;
    });
  }
}
