import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostShowPage } from './post-show.page';

describe('PostShowPage', () => {
  let component: PostShowPage;
  let fixture: ComponentFixture<PostShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
