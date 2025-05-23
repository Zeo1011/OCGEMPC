import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewApplicationComponent } from '../view-application/view-application.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-for-releasing',
  standalone: false,
  templateUrl: './for-releasing.component.html',
  styleUrl: './for-releasing.component.scss'
})
export class ForReleasingComponent {
  selectedMaker = 'all';
  searchQuery = '';
  itemsPerPage = 10;
  currentPage = 1;

  viewLoan() {
    this.dialog.open(ViewApplicationComponent);
  }

  constructor(private dialog: MatDialog) {}

  // sample data
  users = [
    { name: 'Andrea Louise Castillo', address: '421 Magnolia St., Pasig City, Metro Manila', amount: '11,000', schedule: 'May 16, 2025', status: 'for release' },
    { name: 'John Michael Santos', address: '12 Kalayaan Ave., Quezon City', amount: '11,000', schedule: 'May 16, 2025', status: 'for release' },
    { name: 'Maria Isabella Reyes', address: '89 D. Tuazon St., Manila', amount: '11,000', schedule:  'May 16, 2025', status: 'for release' },
    { name: 'Carlos Emmanuel Cruz', address: '5 Boni Ave., Mandaluyong City', amount: '11,000', schedule: 'May 16, 2025', status: 'for release' },
    { name: 'Katrina Mae De Leon', address: '76 Lopez Jaena St., San Juan', amount: '11,000', schedule: 'May 16, 2025', status: 'for release' },
    { name: 'Katrina Mae De Leon', address: '76 Lopez Jaena St., San Juan', amount: '11,000', schedule: 'May 16, 2025', status: 'for release' },
    { name: 'Katrina Mae De Leon', address: '76 Lopez Jaena St., San Juan', amount: '11,000', schedule: 'May 16, 2025', status: 'for release' }
  ];

  filteredUsers = [...this.users];

  get totalItems() {
    return this.filteredUsers.length;
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalItems);
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedUsers() {
    return this.filteredUsers.slice(this.startIndex, this.endIndex);
  }

  applyFilters() {
    const query = this.searchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(query)
    );
    this.currentPage = 1;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goToPreviousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
  }
}
