/** 
* @jest-environment jsdom 
*/ 

import { movieSort } from "../functions";
import { movies } from "../services/__Mock__/movieservic";

beforeEach(() => {
    document.body.innerHTML = ``;

});    


test("Sort A-Z", () => {
    //Arrange
    let mymovies = movies;
    //Act
    movieSort(mymovies, true);
    //Assert
    expect(mymovies.length).toBe(4);
    expect(mymovies[0].Title).toBe("Gudfadern");
});


test("Sort Z-A", () => {
    //Arrange
    let mymovies = movies;

    //Act
    movieSort(mymovies, false);

    //Assert
    expect(mymovies.length).toBe(4);
    expect(mymovies[0].Title).toBe("The Dark Knight");
});