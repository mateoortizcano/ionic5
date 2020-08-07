import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Componentt[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Button',
      redirectTo: '/buttons'
    },
    {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componentt {
  icon: string;
  name: string;
  redirectTo: string;
}
