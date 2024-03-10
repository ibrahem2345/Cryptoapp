import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../../services/apicalls.service';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-getbalance',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './getbalance.component.html',
  styleUrl: './getbalance.component.scss'
})
export class GetbalanceComponent implements OnInit{
  form: FormGroup  ;
  public balanceOfAddress: string = "";

  constructor(private formBuilder: FormBuilder, private apicalls: ApicallsService) { 
    this.form = this.formBuilder.group({
      address: ['', [Validators.required, Validators.pattern('^0x.*$')]]
    });
  }
   ngOnInit(): void {

  }

    onSubmit() : void {
      if (this.form?.valid) {
        const address = this.form.get('address')?.value;
        this.apicalls.getTokenBalance(address).then((result) => {
          this.balanceOfAddress = result;
        }).catch((error)=>{
          this.balanceOfAddress = "There was an error please check the account wallet";
        });
      }
    }
  

 }

