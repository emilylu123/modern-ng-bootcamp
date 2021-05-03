import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  term = '';
  url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=';

  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get('https://en.wikipedia.org/w/api.php?', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}

/*
    MediaWiki API Demos `Search` module: Search for a text or title
    api.php?action=query&list=search&srsearch=space&utf8=&format=json
*/

/*
var url = "https://en.wikipedia.org/w/api.php"
var params = {
    action: "query",
    format: "json",
    list: "search",
    srsearch: term,
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        if (response.query.search[0].title === "space"){
            console.log("Your search page 'space' exists on English Wikipedia" );
        }
    })
    .catch(function(error){console.log(error);});
*/
