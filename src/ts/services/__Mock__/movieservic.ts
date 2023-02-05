/** 
* @jest-enviroment jsdom 
*/ 


import { IMovie } from "../../models/Movie";





export let movies:IMovie[] = [
    {
    Title: "Nyckel till friheten",
    imdbID: "tt0111161",
    Type: "Drama",
    Poster: "..",
    Year: "1994"
    },
    {
    Title: "Gudfadern",
    imdbID: "tt0068646",
    Type: "Crime, Drama",
    Poster: "..",
    Year: "1972"
    },
    {
    Title: "The Dark Knight",
    imdbID: "tt0468569",
    Type: "Action, Crime, Drama",
    Poster: "..",
    Year: "2008"
    },
    {
    Title: "Gudfadern del II",
    imdbID: "tt007156",
    Type: "Crime, Drama",
    Poster: "..",
    Year: "1974"
    }

];  

export async function getData (SearchText: string): Promise<IMovie[]> {
    return new Promise((resolve, reject)=>{
        if (SearchText !== "error") {
        resolve(movies);
      } else {
        reject ([]);
      }
    }); 
}