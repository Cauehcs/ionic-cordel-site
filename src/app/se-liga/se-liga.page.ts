import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-liga',
  templateUrl: './se-liga.page.html',
  styleUrls: ['./se-liga.page.scss'],
})
export class SeLigaPage implements OnInit {

  currentHeaderClass = 'headerTop';
  headerIsOpened = false;
  lastDay = new Date(2021,8,4);
  daysLeft: number;
  daysLeftText;

  constructor() {
  }

  ngOnInit() {
    let today = new Date();
    var dd = parseInt(String(today.getDate()).padStart(2, '0'));
    var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));
    today = new Date(today.getFullYear(), mm, dd);
    var diff =(today.getTime() - this.lastDay.getTime()) / (1000 * 60 * 60 * 24);
    this.daysLeft = Math.abs(Math.round(diff));
    console.log(this.daysLeft);
    this.daysLeftText = (this.daysLeft === 0) ? 'Acaba hoje!' : (this.daysLeft === 1) ? 'Resta apenas 1 dia' : `Restam: ${this.daysLeft} dias`;
  }

  async changeHeader(event){
    if (this.currentHeaderClass === 'headerSolid'){
      return;
    }
    this.currentHeaderClass = 'headerSolid';
  }
  async normalizeHeader(event){
    const scrollElement = await event.target.getScrollElement();
    if (scrollElement.scrollTop === 0){
      this.currentHeaderClass = 'headerTop';
    }
  }
  openHeader(){
    if(this.headerIsOpened)
      document.getElementById('SiteHeader').classList.remove('headerOpened');
    else
      document.getElementById('SiteHeader').classList.add('headerOpened');
    this.headerIsOpened = !this.headerIsOpened;
  }
}
