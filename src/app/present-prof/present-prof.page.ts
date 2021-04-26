import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present-prof',
  templateUrl: './present-prof.page.html',
  styleUrls: ['./present-prof.page.scss'],
})
export class PresentProfPage implements OnInit {

  selectedSlide : any;
  SliderOptions = {
    initialSlide: 0,
    sliderPerView: 1,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      },
  };

  constructor() { }

  ngOnInit() {
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

}
