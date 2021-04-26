import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

  currentAppearence: number = 0;
  interval: number;
  appearences: string[] = ["Estudante cria empresa e desenvolve alternativas\nde ensino por meio de jogos",
                           "Play for the planet: The favela youth redesigning gaming from Brazil’s north-east",
                           "Primeira startup incubada no Porto Digital de Recife com alunos do Ensino Médio",
                           "Startup embarcada no Porto Digital ganha reconhecimento internacional"];
  appearenceFrom: string[] = ["Em Bom Dia PE",
                              "Em Pionners Post",
                              "Em NE 10",
                              "Em Folha PE"];
  appearenceImg: string[] = ["../../assets/Aparicoes/fotobomdiape.png",
                              "../../assets/Aparicoes/fotopionnerspost.jpg",
                              "../../assets/Aparicoes/fotone10.jpg",
                              "../../assets/Aparicoes/Fotofolhape.jpg"];

  ngOnInit() {
    this.currentAppearence = 0;
    console.log(this.currentAppearence);
    this.interval = self.setInterval(() => {
      document.getElementById('appearenceBtn' + this.currentAppearence.toString()).classList.remove('checked');
      this.currentAppearence += (this.currentAppearence == 3) ? -3 : 1;
      document.getElementById('appearenceBtn' + this.currentAppearence.toString()).classList.add('checked');
    }, 10000);
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
}
