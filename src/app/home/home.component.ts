import { Component, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    const value = 1234567.89; // Votre valeur monétaire
    const formattedValue = formatCurrency(value, 'fr-FR',"$");
  
  console.log(formattedValue); 
  }


  


}
