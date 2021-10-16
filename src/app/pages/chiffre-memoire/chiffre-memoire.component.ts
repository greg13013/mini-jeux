import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {interval, Observable, Subscription} from 'rxjs';
import {Resultat} from '../../models/resultat';

@Component({
  selector: 'app-chiffre-memoire',
  templateUrl: './chiffre-memoire.component.html',
  styleUrls: ['./chiffre-memoire.component.scss']
})
export class ChiffreMemoireComponent implements OnInit {

  start: boolean = false;
  form: FormGroup;

  loader: boolean = false;
  temp: number = 0;

  level: number = 0;
  tabResultat: Array<string> = [];
  tabUtilisateur: Resultat[] = new Array<Resultat>();

  afficherResultat: boolean = false;
  gagner: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      chiffre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getRandomNumber(min: number, max: number){
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(number);
    return number;
  }

  loaderInterval(){
    this.loader = true;
    const loader = interval(25).subscribe((valeur) => {
      // console.log(valeur);
      this.temp += 1;
      if (this.temp === 100) {
        loader.unsubscribe();
        this.loader = false;
      }
    });
  }

  startGame(){
    this.level++;
    this.temp = 0;
    this.start = true;
    this.gagner = false;
    this.afficherResultat = false;
    // this.tabResultat = [];
    // this.tabUtilisateur = [];

    let chiffreRandom: string = '';

    for (let i = 0; i < this.level; i++){
      if (i >= 1){
        chiffreRandom += this.getRandomNumber(0, 9).toString();
      } else {
        chiffreRandom = this.getRandomNumber(0, 9).toString();
      }

    }



    this.tabResultat.push(chiffreRandom);
    this.loaderInterval();
  }

  reset(){
    this.level = 0;
    this.tabResultat = [];
    this.tabUtilisateur = [];
    this.startGame();
  }


  submit(){

    if (this.form.valid){

      this.tabUtilisateur.push({chiffre: this.form.value['chiffre'], correct: false});


      console.log('longueur chaine : ', this.tabResultat[this.level-1].length);

      for (let i = 0; i < this.tabResultat[this.level-1].length; i++){
        if(this.tabResultat[this.level-1][i] === this.tabUtilisateur[this.level-1].chiffre![i]){
          if (i === this.level-1){
            this.tabUtilisateur[this.level-1].correct = true;
          }
        }
      }

      console.log('resultat : ', this.tabResultat);
      console.log('resultat utilisateur : ', this.tabUtilisateur);

      if (this.form.value['chiffre'] === this.tabResultat[this.level - 1]){
        this.gagner = true;
        console.log('gagné');
      }
      this.form.reset();
      this.afficherResultat = true;

    }
  }

}
