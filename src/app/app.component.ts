import { Component } from '@angular/core';
import { JSONPath } from 'jsonpath-plus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonpath-training';

  pathExpression: string = '';

  inputSample = `{
    "store": {
      "book": [
        {
          "category": "reference",
          "author": "Nigel Rees",
          "title": "Sayings of the Century",
          "price": 8.95
        },
        {
          "category": "fiction",
          "author": "Evelyn Waugh",
          "title": "Sword of Honour",
          "price": 12.99
        },
        {
          "category": "fiction",
          "author": "Herman Melville",
          "title": "Moby Dick",
          "isbn": "0-553-21311-3",
          "price": 8.99
        },
        {
          "category": "fiction",
          "author": "J. R. R. Tolkien",
          "title": "The Lord of the Rings",
          "isbn": "0-395-19395-8",
          "price": 22.99
        }
      ],
      "bicycle": {
        "color": "red",
        "price": 19.95
      }
    }
  }`;

  resultText: string;

  setResultText(value) {
    let arrayResult = JSONPath({ path: this.pathExpression, wrap: false, json: JSON.parse(this.inputSample) });
    // this.resultText = '';

    // arrayResult.forEach(element => {
    //   this.resultText += JSON.stringify(element) + "\n";
      
    // });
    console.log( 'array type:', typeof arrayResult);
    this.resultText = arrayResult || 'Sem resultados para a expressão.';
  }


  testExpression(event) {
    this.pathExpression = event.target.value ?? '$..';
    this.setResultText(this.pathExpression);
  }



}
