import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent  implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4'];
  public barChartType = 'bar';
  public barChartLegend = true;

  constructor(private socketServices: SocketService) {
    this.socketServices.emmit_obt();
  }

  public barChartData: any[] = [
    { data: [65, 59, 80, 40], label: 'Si' },
    { data: [28, 48, 40, 34], label: 'No' }
  ];

  ngOnInit() {
    this.socketServices.geter().subscribe((data: any) => {
      this.barChartData = data;
      console.log(data);
    });
    this.socketServices.getData().subscribe((data: any) => {
     console.log(data);
     this.barChartData = data;
    });
  }



}
