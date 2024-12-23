import { Component } from '@angular/core';
import { CreateDeckComponent } from '../create-deck/create-deck.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-deck-page',
  standalone: true,
  imports: [CreateDeckComponent,RouterLink],
  templateUrl: './deck-page.component.html',
  styleUrl: './deck-page.component.css'
})
export class DeckPageComponent {
  //these decks needed to be filled after api Integeration
  // publicDeck: { id: string; title: string; createdBy: string; Likes: number }[] = [];
  // favDecks:  { id: string; title: string; createdBy: string; Likes: number }[] = [];
  
  // below dummy data data is for frontend testing 
  publicDeck = [
  { id: "1", title: "Basics of TypeScript", createdBy: "Alice", Likes: 120 },
  { id: "2", title: "Advanced JavaScript", createdBy: "Bob", Likes: 450 },
  { id: "3", title: "React 101", createdBy: "Charlie", Likes: 300 },
  { id: "4", title: "Node.js Crash Course", createdBy: "Diana", Likes: 280 },
  { id: "5", title: "Data Structures", createdBy: "Eve", Likes: 560 },
  { id: "6", title: "Algorithms Simplified", createdBy: "Frank", Likes: 700 },
  { id: "7", title: "Python for Beginners", createdBy: "Grace", Likes: 200 },
  { id: "8", title: "Cloud Computing Fundamentals", createdBy: "Hank", Likes: 150 },
  { id: "9", title: "Frontend Mastery", createdBy: "Alice", Likes: 320 },
  { id: "10", title: "Backend Best Practices", createdBy: "Bob", Likes: 390 },
];
favDecks= [
    { title: "Basics of TypeScript", createdBy: "Alice", Likes: 120 },
    { title: "Advanced JavaScript", createdBy: "Bob", Likes: 450 },
    { title: "React 101", createdBy: "Charlie", Likes: 300 },
    { title: "Node.js Crash Course", createdBy: "Diana", Likes: 280 },
    { title: "Algorithms Simplified", createdBy: "Frank", Likes: 700 },
]

  // Toggle states
  showAllPublic: boolean = false;
  showAllFav: boolean = false;
  isModalVisible: boolean = false; 
  isSuccess:boolean| null = null;
  savedDeck: { title: string }[] = []; 


  // Methods to get displayed decks
   getDisplayedPublicDecks() {
    return this.showAllPublic ? this.publicDeck : this.publicDeck.slice(0, 4);
  }

  getDisplayedFavDecks() {
    return this.showAllFav ? this.favDecks : this.favDecks.slice(0, 4);
  }

  // Toggle methods
  togglePublicDecks() {
    if (this.publicDeck.length > 4) {
      this.showAllPublic = !this.showAllPublic;
    }
  }

  toggleFavDecks() {
    if (this.favDecks.length > 4) {
      this.showAllFav = !this.showAllFav;
    }
  }
  toggleOverlay(): void {
    this. isModalVisible= !this.isModalVisible;
  }
  
  getDeckFormData(data: { title: string}): void {
    setTimeout(() => {
      this.isSuccess=true;
      if(this.isSuccess){
        // Append new deck to the savedDeck array
        const newDeck = {
          id:"400",
          title: data.title,
          createdBy: 'John Doe', // Assuming the current user is the creator
          Likes: 0 // New decks start with 0 likes
      };
      // Add the new deck at the top of the publicDeck array
      this.publicDeck.unshift(newDeck);
      }
      else{
        this.isSuccess=false;
      }
    }, 2000);  
  }
  
}
