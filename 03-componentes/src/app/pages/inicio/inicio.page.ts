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
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fab Flotante',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'GRID - rows',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite sroll',
      redirectTo: '/infinitescroll'
    },
    {
      icon: 'hammer',
      name: 'Input - Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'List - Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-four',
      name: 'List - Reorder',
      redirectTo: '/list-reoder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirectTo: '/loading'
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
