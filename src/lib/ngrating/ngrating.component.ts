import { Component, Input } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ngrating',
  standalone: true,
  imports: [NgIf,NgFor,CommonModule],
  templateUrl: './ngrating.component.html',
  styleUrl: './ngrating.component.css'
})
export class NgratingComponent {


  @Input() rating: number = 0;
  @Input() color!:any;
  @Input() size!:any;
  @Input() backgroundStarColor!:any;
  @Input() showCount:any | false;


 


  get ratingPercent(): number {
    return (this.rating / 5) * 100;
  }
}
