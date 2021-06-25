import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.page.html',
  styleUrls: ['./venda.page.scss'],
})
export class VendaPage implements OnInit {

  BannerSliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      },
  };
  currentHeaderClass = 'headerTop';

  constructor() { }

  ngOnInit() {
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
}
