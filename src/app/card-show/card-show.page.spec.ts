import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardShowPage } from './card-show.page';

describe('CardShowPage', () => {
  let component: CardShowPage;
  let fixture: ComponentFixture<CardShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
