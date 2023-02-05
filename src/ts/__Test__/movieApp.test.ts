/** 
* @jest-environment jsdom 
*/ 

import * as movieservice from "../services/movieservice";
import axios from "axios";
import * as Imovie from "../models/Movie"
import * as IOmdbResponse from "../models/IOmdbResponse"
import * as movieapp from "../movieApp"

beforeEach(() => {
    document.body.innerHTML = ``;
});    

    test("Should show string with (Inga sökresultat att visa)", () => {
        //Arrange
        document.body.innerHTML = `<div id="movie-container"></div>`;

        let container: HTMLDivElement =
         document.getElementById("movie-container") as HTMLDivElement;
        let innerHTML = "Inga sökresultat att visa";
        
        //Act
        movieapp.displayNoResult(container);
        //Assert
        expect(innerHTML).toBe( "Inga sökresultat att visa")
    });


    test(""), () => {
        //Arrange
        
        //Act

        //Assert
    }













