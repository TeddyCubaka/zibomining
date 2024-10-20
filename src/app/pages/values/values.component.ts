import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef,  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HealthAndSafeComponent } from './health-and-safe/health-and-safe.component';
import { IndigenousComponent } from './indigenous/indigenous.component';
import { TrailingComponent } from './trailing/trailing.component';
import { CommunityComponent } from './community/community.component';
import { ResponsibleProductionComponent } from './responsible-production/responsible-production.component';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit, AfterViewInit {
  @ViewChild('values',  { read: ViewContainerRef })
  valueContainerRender:any;
  currentValue : string = "HEALTH";


  constructor(private router : ActivatedRoute,  ){

  }
  ngAfterViewInit(): void {
    this.router.queryParamMap.subscribe((c:ParamMap) =>{
      
      this.valueContainerRender.clear();
      this.currentValue = c.get('q')?.toUpperCase() as string;
      switch(this.currentValue){
        case 'HEALTH':
          this.valueContainerRender.createComponent(HealthAndSafeComponent);
        break;
        case 'INDIGENOUS':
          this.valueContainerRender.createComponent(IndigenousComponent);
        break;
        case 'TRAILING':
          this.valueContainerRender.createComponent(TrailingComponent);
        break;
        case 'PEOPLE':
          this.valueContainerRender.createComponent(CommunityComponent);
        break;
        case 'RESPONSIBLE':
          this.valueContainerRender.createComponent(ResponsibleProductionComponent);
        break;
      }
      console.log("paramque",c.get('q'));
     })
  }
  ngOnInit(): void {
   
  }
}
