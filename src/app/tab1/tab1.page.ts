import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class Tab1Page {
  wah = 0;
  balance: number = 0;

  constructor() {
    this.loadBalance();
  }

  addToBalance(amount: number) {
    this.balance += amount;
    this.clearInput();
    localStorage.setItem("myBalance", `${this.balance}`);
  }
  deductFromBalance(amount: number) {
    this.balance -= amount;
    this.clearInput();
    localStorage.setItem("myBalance", `${this.balance}`);
  }
  clearInput() {
    this.wah = 0;
  }
  loadBalance() {
    const balanceLocal = localStorage.getItem("myBalance");
    if (balanceLocal === null) {
      return;
    }
    try {
      const parsedBalance = Number(balanceLocal);
      this.balance = parsedBalance;
    } catch (error) {
      console.error(error);
      localStorage.removeItem("myBalance");
    }
  }
}
