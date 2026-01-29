import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../../model/product';
import { LocalStorageService } from '../../../injproducts';

@Component({
  selector: 'app-product-get',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './product-get.html',
  styleUrl: './product-get.css',
})
export class ProductGetComponent implements OnInit {
  products = signal<Product[]>([]);

  constructor(private lss:  LocalStorageService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products.set(this.lss.getItem('products') || []);
  }

  onEdit(id: number): void {
    // Navigation via RouterModule déjà importé
  }

  onDelete(id: number): void {
    if (confirm('Supprimer ce produit ?')) {
      const currentProducts = this.products();
      const updated = currentProducts.filter(p => p.id !== id);
      this.lss.setItem('products', updated);
      this.products.set(updated);
    }
  }

  addProduct(): void {
    // Pour bouton ajouter
  }
}
