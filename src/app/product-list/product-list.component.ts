import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 books = [
  {
    id: "001",
    author: "Chinua Achebe",
    country: "Nigeria",
    image: "../../assets/images/1.png",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
    quantity : 20
  },
  {
    id: "002",
    author: "Hans Christian Andersen",
    country: "Denmark",
    image: "../../assets/images/2.png",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
    quantity : 0
  },
  {
    id: "003",
    author: "Dante Alighieri",
    country: "Italy",
    image: "../../assets/images/3.png",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
    quantity : 7
  },
  {
    id: "004",
    author: "Maureen Gallery Kovacs",
    country: "Sumer and Akkadian Empire",
    image: "../../assets/images/4.png",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
    quantity : 20
  },
  {
    id: "005",
    author: "Graham Ricardo",
    country: "Achaemenid Empire",
    image: "../../assets/images/5.png",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
    quantity : 34
  },
  {
    id: "006",
    author: "Hanan Al-Shaykh",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    image: "../../assets/images/6.png",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
    quantity : 54
  },
  {
    id: "007",
    author: "Robert Cook",
    country: "Iceland",
    image: "../../assets/images/7.png",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    pages: 384,
    title: "Nj\u00e1l's Saga",
    year: 1350,
    quantity :5
  },
  {
    id: "008",
    author: "Jane Austen",
    country: "United Kingdom",
    image: "../../assets/images/8.png",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
    quantity : 2
  },
  {
    id: "009",
    author: "Honor\u00e9 de Balzac",
    country: "France",
    image: "../../assets/images/9.png",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    pages: 443,
    title: "Le P\u00e8re Goriot",
    year: 1835,
    quantity : 46
  },
  {
    id: "010",
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    image: "../../assets/images/10.png",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    pages: 256,
    title: "Molloy, Malone Die",
    year: 1952,
    quantity : 67
  },
 ]
 renderedBooks= this.books;
 inStockBooks = this.books.filter(book => book.quantity>0)
 outStockBooks = this.books.filter(book => book.quantity==0)
 filterView = (event) => {
   alert("salam")
  if(event.value == "all"){
    this.renderedBooks=this.books;

  }
  else if(event.value == "inStock"){
    this.renderedBooks=this.inStockBooks;

  }
  else if(event.value == "outStock"){
    this.renderedBooks=this.outStockBooks;

  }
 }
}
