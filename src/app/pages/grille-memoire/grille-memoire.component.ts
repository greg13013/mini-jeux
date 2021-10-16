import { Component, OnInit } from '@angular/core';
import {interval, timer} from 'rxjs';

@Component({
  selector: 'app-grille-memoire',
  templateUrl: './grille-memoire.component.html',
  styleUrls: ['./grille-memoire.component.scss']
})
export class GrilleMemoireComponent implements OnInit {

  loader: boolean = false;
  start: boolean = false;

  level: number = 0;
  clicSouris: number = 0;
  tabResultat: any[] = [];
  tabTampon: any[] = [];
  tabUtilisateur: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getRandomNumber(min: number, max: number){
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(number);
    return number;
  }

  startPartie(){
    this.start = true;
    this.clicSouris = 0;
    this.level++;
    this.tabUtilisateur = [];
    this.tabResultat = [];
    this.loader = true;



    if (document.getElementById('containerSquare')!.classList.contains('failLevel')){
      document.getElementById('containerSquare')!.classList.remove('failLevel');
    }
    const loader = interval(1000).subscribe((valeur) => {
      // document.getElementById(this.getRandomNumber(0, 8).toString())!.style.backgroundColor = 'white';
      for(let i = 0; i < 9; i++){
        document.getElementById(i.toString())!.setAttribute('class', 'square');
      }

      if (document.getElementById('containerSquare')!.classList.contains('levelSuivant')){
        document.getElementById('containerSquare')!.classList.remove('levelSuivant');
      }

      console.log('level-1 : ', this.level-1);
      console.log('tabResultat length : ', this.tabResultat.length);
      console.log('tabTampon length : ', this.tabTampon.length);
      console.log('valeur : ', valeur);

      let chiffreRandom = '';
      if (this.level-1 !== this.tabResultat.length){

        chiffreRandom = this.tabTampon[valeur];
        this.blocBlanc(chiffreRandom);
        // this.tabResultat.push(this.tabTampon[valeur]);

        console.log('--------- REMAKE --------');
      } else {
        chiffreRandom = this.getRandomNumber(0, 8).toString();
        // this.tabResultat.push(chiffreRandom);
        this.tabTampon.push(chiffreRandom);
        this.blocBlanc(chiffreRandom);
      }

      this.tabResultat.push(chiffreRandom);

      console.log('tabResultat : ', this.tabResultat);
      console.log('tabTampon : ', this.tabTampon);
      if (valeur === this.level-1){

        loader.unsubscribe();
        // timer(1000, 0).subscribe((timer) => {
        //   document.getElementById(chiffreRandom)!.setAttribute('class', 'square');
        // });
      }
    });
  }

  blocBlanc(id: string){
    console.log('id bloc : ', id);
    document.getElementById(id)!.setAttribute('class', 'square bg-white');
    let timeer = timer(500, 0).subscribe((timer) => {
      console.log('timer : ', timer);
      document.getElementById(id)!.setAttribute('class', 'square');
      timeer.unsubscribe();
    });
  }

  idBloc(id: string){
    this.clicSouris++;
    this.tabUtilisateur.push(id);
    console.log(document.getElementById(id));
    console.log('tabUtilisateur : ', this.tabUtilisateur);

    if (this.tabResultat[this.clicSouris-1] === this.tabUtilisateur[this.clicSouris-1]){
      console.log('ok');
      if (this.tabResultat.length === this.tabUtilisateur.length){
        document.getElementById('containerSquare')!.classList.add('levelSuivant');

        this.startPartie();
      }
    } else {
      document.getElementById('containerSquare')!.classList.add('failLevel');
      this.start = false;
      this.level = 0;
      this.tabResultat = [];
      this.tabTampon = [];
    }
  }

}
