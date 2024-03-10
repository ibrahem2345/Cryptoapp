import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GetbalanceComponent } from './getbalance.component';
import { ApicallsService } from '../../services/apicalls.service';

describe('GetbalanceComponent', () => {
  let component: GetbalanceComponent;
  let fixture: ComponentFixture<GetbalanceComponent>;
  let apicallsServiceSpy: jasmine.SpyObj<ApicallsService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApicallsService', ['getTokenBalance']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ApicallsService, useValue: spy }
      ],
    });

    fixture = TestBed.createComponent(GetbalanceComponent);
    component = fixture.componentInstance;
    apicallsServiceSpy = TestBed.inject(ApicallsService) as jasmine.SpyObj<ApicallsService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });




  it('should not call API when form is invalid', () => {
    component.form.setValue({ address: 'invalidAddress' });

    component.onSubmit();

    expect(apicallsServiceSpy.getTokenBalance).not.toHaveBeenCalled();
  });
});
