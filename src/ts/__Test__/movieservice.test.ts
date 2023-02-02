/** 
* @jest-enviroment jsdom 
*/ 

import * as movieservice from "../services/movieservice";
import axios from "axios";
import * as Imovie from "../models/Movie"
import * as IOmdbResponse from "../models/IOmdbResponse"

jest.mock("./../services/movieservice.ts");

beforeEach(() => {
    document.body.innerHTML = ``;






});
