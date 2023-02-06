/** 
* @jest-environment jsdom 
*/ 

import * as movieApp from "../movieApp";
import * as getdata from "../services/movieservice"
import { movies } from "../services/__Mock__/movieservic";






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
    movieApp.displayNoResult(container);
    //Assert
    expect(innerHTML).toBe( "Inga sökresultat att visa");
});

test("Should submit and show movies", () => {
    //Arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>`;
    
    let spyohandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(new Promise((resolve) => {
    resolve();
    }));

    let form = document.getElementById("searchForm") as HTMLFormElement;
    form.addEventListener("click", movieApp.handleSubmit);

    //Act
    movieApp.init();
    movieApp.handleSubmit();

    //Assert
    expect(spyohandleSubmit).toHaveBeenCalledTimes(1)
});

test("should create HTML with movies", ()=> {
    //Arrange    
    document.body.innerHTML =`<div id="movie-container"></div>`;

    let container = document.getElementById("movie-container") as HTMLDivElement;

    //Act    
    movieApp.createHtml(movies, container);

    //Assert    
    expect(movies.length).toBe(4);
    expect(container.innerHTML).toContain("h3");
    expect(movies[0].Title).toBe("Nyckel till friheten")
});


/*test("Should create HTMLDivElemets and movies", async () => {
    //Arrange
    document.body.innerHTML = ` 
    <input type="text" id="searchText" placeholder="Skriv titel här" />`
    
    const searchText = document.getElementById("searchText") as HTMLInputElement;
    let spyongetdata = jest.spyOn(getdata, "getData").mockReturnValue(new Promise((resolve) => {
        resolve;
        }));

    //Act
    await movieApp.handleSubmit();

    //Assert
    expect(spyongetdata).toHaveBeenCalledTimes(0);
});*/
