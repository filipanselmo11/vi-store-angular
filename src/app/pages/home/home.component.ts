import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { TextComponent } from '../../components/text/text.component';
import { ImageComponent } from '../../components/image/image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, TextComponent, ImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
