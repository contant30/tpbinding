import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root',
})

export class Searchmovie {

  //constucteur
  constructor(private http:HttpClient){}

  //methode de recherche
    search(action:any,title:string,year:number=0):void {

      //initialisation des variables
      let results={};

      //condition pour l'année
      let y = year? `&y=${year}`:'';

      // Requête de type get vers l'API OMDb
      this.http.get(`http://www.omdbapi.com/?apikey=b267f2ad&t=${title}${y}&plot=full`)
      .subscribe(
        (response)=>{
         action(response) 
        }
      )
    }

  
  
}
