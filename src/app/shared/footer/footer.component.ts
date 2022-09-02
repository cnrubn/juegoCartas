import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  arrayRedes: Redes[] = [
    {
      nombre: 'Portfolio',
      logo: '<i class="fa-solid fa-address-card"></i>',
      url: 'https://cnrubn.github.io/index.html'
    },
    {
      nombre: 'Linkedin',
      logo: '<i class="fa-brands fa-linkedin"></i>',
      url: 'https://www.linkedin.com/in/carrionweb/'
    },
    {
      nombre: 'Github',
      logo: '<i class="fa-brands fa-github"></i>',
      url: 'https://github.com/cnrubn'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
