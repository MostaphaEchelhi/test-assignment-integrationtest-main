import { IMovie } from "../../models/Movie";




let movies:IMovie[] = [
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

];  jest.mock("axios", () => ({                             
    get: async (url: string) => {
        return new Promise ((resolve, reject) => {
            if (!url.endsWith("error")) {
                resolve (movies);
            }
            else {
                reject([]);
            }
        });
    }
}));

