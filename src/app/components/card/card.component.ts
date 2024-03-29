import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() textTitle: string = '';
  @Input() paragrafo: string = '';


}
