import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Component[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Component {
  icon: string;
  name: string;
  redirectTo: string;
}
