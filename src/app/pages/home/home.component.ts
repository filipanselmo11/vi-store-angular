import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { TextComponent } from '../../components/text/text.component';
import { ImageComponent } from '../../components/image/image.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, TextComponent, ImageComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  primeiroTitulo = 'Calça de todos os tipos';
  primeiroSrc = '../../../assets/imagens/calca.png';
  primeiroAlt = 'Calça';
  primeiroTextTitle = 'Por apenas R$ 19,00';
  primeiroParagrafo = `
    Aqui tem um texto explicativo
    falando sobre esse benefício
    em detalhes
  `;
  segundoTitulo = 'Camisa mais vendidas';
  segundoSrc = '../../../assets/imagens/camisa.png';
  segundoAlt = 'Camisa';
  segundoTextTitle = 'Por apenas R$ 59,90';
  segundoParagrafo = `
    Aqui tem um texto explicativo
    falando sobre esse benefício
    em detalhes
  `;
  terceiroTitulo = 'Vestidos lindos';
  terceiroSrc = '../../../assets/imagens/calca.png';
  terceiroAlt = 'Vestido';
  terceiroTextTitle = 'Por apenas R$ 99,90';
  terceiroParagrafo = `
    Aqui tem um texto explicativo
    falando sobre esse benefício
    em detalhes
  `;
}
