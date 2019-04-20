import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards = [
    {
      name: 'SEO',
      enlace: '#seo',
      colorIcon: 'icon icon-shape icon-shape-primary rounded-circle mb-4',
      subname: '(Search Engine Optimization)',
      icon: 'ni ni-world',
      icon2: '',
      title: 'text-primary text-uppercase',
      parrafo: 'text-primary',
      color: 'btn btn-primary mt-4',
      info: 'El posicionamiento en buscadores u optimización de motores de búsqueda es el proceso de mejorar la visibilidad de un sitio web en los resultados orgánicos de los diferentes buscadores.'
    },
    {
      name: 'marketing digital',
      enlace: '#marketing',
      colorIcon: 'icon icon-shape icon-shape-success rounded-circle mb-4',
      subname: '',
      icon: 'fa fa-bullhorn',
      icon2: '',
      title: 'text-success text-uppercase',
      parrafo: 'text-success',
      color: 'btn btn-success mt-4',
      info: 'El marketing digital es la aplicación de las estrategias de comercialización llevadas a cabo en los medios digitales. Todas las técnicas del mundo off-line son imitadas y traducidas a un nuevo mundo, el mundo online.'
    },
    {
      name: 'Diseño web y apps moviles',
      enlace: '#web',
      colorIcon: 'icon icon-shape icon-shape-warning rounded-circle mb-4',
      subname: '',
      icon: 'ni ni-laptop',
      icon2: 'ni ni-mobile-button',
      title: 'text-warning text-uppercase',
      parrafo: 'text-warning',
      color: 'btn btn-warning mt-4',
      info: 'No es ningún secreto el que las aplicaciones aumentan la fidelización y permiten transmitir a los consumidores los valores de la compañía mientras se entretienen y se lo pasan bien. Por eso es tan importante el desarrollo de apps para las empresas y sus clientes .'
    }
    //,
    // {
    //   name: 'Consultoria IT',
    //   colorIcon: 'icon icon-shape icon-shape-warning rounded-circle mb-4',
    //   subname: '',
    //   icon: 'ni ni-laptop',
    //   icon2: 'ni ni-mobile-button',
    //   title: 'text-warning text-uppercase',
    //   parrafo: 'text-warning',
    //   color: 'btn btn-warning mt-4',
    //   info: 'No es ningún secreto el que las aplicaciones aumentan la fidelización y permiten transmitir a los consumidores los valores de la compañía mientras se entretienen y se lo pasan bien. Por eso es tan importante el desarrollo de apps para las empresas y sus clientes .'
    // }
  ]
  constructor() { }

  ngOnInit() {
  }

}
