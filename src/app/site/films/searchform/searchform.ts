import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Searchmovie } from '../services/searchmovie';
import { FormValidators } from '../form-validators';
import { NgIf } from '@angular/common';
import { ListDirective } from "../directives/list";

@Component({
  selector: 'app-searchform',
  imports: [ReactiveFormsModule, FormsModule, NgIf, ListDirective],
  templateUrl: './searchform.html',
  styleUrl: './searchform.css',
})

export class Searchform implements OnInit {

  //declaration du formulaire
  searchForm : FormGroup = new FormGroup({});
  //declaration des champs du formulaire
  title: FormControl =new FormControl({});
  year: FormControl =new FormControl({});
  results:any;
  errors:string="";

  //declaration du service
  constructor(private fb:FormBuilder, private searchmovie:Searchmovie) { }

  //methode d'initialisation
ngOnInit() {

  //declaration des patterns pour title et year
  let titlePattern = '[a-zA-Z0-9,\.]+';
  let yearPattern = '[0-9]{4}';

  //initialisation du formulaire
  this.title = this.fb.control('',[Validators.required,Validators.maxLength(30),Validators.pattern(titlePattern)]);
  this.year = this.fb.control('2018',[Validators.pattern(yearPattern),FormValidators.integerBetween(1900,2022)]); 

  this.searchForm = this.fb.group({
    title:this.title,
    year:this.year
  })
}

//methode de recherche
startSearch() {

  let title = this.title.valid ? this.title.value : null;
  let year = this.year.valid ? this.year.value : null;
  let that = this;
  
  //declaration de la fonction action
  let action = (data:any)=>{

    console.log(data);
    if(data['Error']) {
      that.errors= data['Error'];
      that.results='';
    }
    else{
      that.errors='';
      that.results=data;
    }
  }


  if(title)
    this.searchmovie.search(action,title,year)
  else
    this.errors = 'Titre obligatoire'
  }
}

