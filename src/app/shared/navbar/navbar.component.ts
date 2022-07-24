import { Component, OnInit,HostListener   } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   asd : number = 0;

  constructor() { 
    
    document.addEventListener('scroll', () => {
      this.prueba();
    })

  }

  ngOnInit(): void {
    
    
  }

  prueba(): void {
    this.asd = document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop);
    //document.body.scrollTop ver que onda
    //https://stackoverflow.com/questions/7435843/window-top-document-body-scrolltop-not-working-in-chrome-or-firefox
  }
  
 

}
