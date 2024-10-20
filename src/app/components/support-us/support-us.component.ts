import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from 'src/app/counter-service.service';
declare var Odometer: any;
@Component({
  selector: 'app-support-us',
  templateUrl: './support-us.component.html',
  styleUrls: ['./support-us.component.css']
})
export class SupportUsComponent implements OnInit {

  constructor(private counterServ: CounterServiceService) {

  }


  ngOnInit(): void {
    var el = document.querySelector('.odometer');
    var od = new Odometer({
      el: el,
      value: 0,
      theme: 'car'
    });
    setTimeout(() => {

      this.counterServ.getCounter().subscribe(res => {
        od.update((parseInt(res.data.counter+"" ) + 6700));
        this.counterServ.initCounter().subscribe(d => {
          od.update((parseInt(d.data.counter+"") + 6700));
        })
      })


    }, 1000);
  }

}
