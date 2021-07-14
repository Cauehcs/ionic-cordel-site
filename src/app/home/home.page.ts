import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

  SliderOptions = {
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      },
  };
  DepoimentosSliderOptions = {
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: '3%',
    speed: 800,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      },
  };
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
  currentAppearence: number = 0;
  interval: number;
  appearences: string[] = ["Estudante cria empresa e desenvolve alternativas\nde ensino por meio de jogos",
                           "Play for the planet: The favela youth redesigning gaming from Brazil’s north-east",
                           "Primeira startup incubada no Porto Digital de Recife com alunos do Ensino Médio",
                           "Startup embarcada no Porto Digital ganha reconhecimento internacional"];
  appearenceFrom: string[] = ["Bom Dia PE",
                              "Pionners Post",
                              "NE 10",
                              "Folha PE"];
  appearenceImg: string[] = ["../../assets/Aparicoes/fotobomdiape.png",
                              "../../assets/Aparicoes/fotopionnerspost.jpg",
                              "../../assets/Aparicoes/fotone10.jpg",
                              "../../assets/Aparicoes/Fotofolhape.jpg"];
  currentHeaderClass = 'headerTop';
  headerIsOpened = false;

  ngOnInit() {
    this.currentAppearence = 0;
    console.log(this.currentAppearence);
    // this.interval = self.setInterval(() => {
    //   console.log(document.getElementById('appContent').getScrollElement());
    // }, 1000);
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

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  changeApparition(index: number){
    clearInterval(this.interval);
    document.getElementById('appearenceBtn' + this.currentAppearence.toString()).classList.remove('checked');
    this.currentAppearence = index;
    document.getElementById('appearenceBtn' + this.currentAppearence.toString()).classList.add('checked');
    this.interval = self.setInterval(() => {
      document.getElementById('appearenceBtn' + this.currentAppearence.toString()).classList.remove('checked');
      this.currentAppearence += (this.currentAppearence == 3) ? -3 : 1;
      document.getElementById('appearenceBtn' + this.currentAppearence.toString()).classList.add('checked');
    }, 10000);
  }

  openHeader(){
    if(this.headerIsOpened)
      document.getElementById('SiteHeader').classList.remove('headerOpened');
    else
      document.getElementById('SiteHeader').classList.add('headerOpened');
    this.headerIsOpened = !this.headerIsOpened;
  }
}
