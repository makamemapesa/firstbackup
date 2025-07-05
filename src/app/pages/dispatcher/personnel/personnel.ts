import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Driver {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  licenseNumber: string;
  status: 'ACTIVE' | 'INACTIVE' | 'ON_PROGRESS';
  latitude?: number;
  longitude?: number;
}

@Component({
  selector: 'app-personnel',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './personnel.html',
  styleUrls: ['./personnel.css']
})
export class PersonnelComponent {
  drivers: Driver[] = [
    {
      id: 1,
      firstName: 'Ali',
      middleName: 'Haji',
      lastName: 'Bakari',
      email: 'ali@example.com',
      phoneNumber: '1234567890',
      licenseNumber: 'LIC001',
      status: 'ACTIVE'
    },
    {
      id: 2,
      firstName: 'Fatma',
      middleName: 'Omar',
      lastName: 'Khamis',
      email: 'fatma@example.com',
      phoneNumber: '0987654321',
      licenseNumber: 'LIC002',
      status: 'ON_PROGRESS'
    }
  ];

  newDriver: Driver = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    licenseNumber: '',
    status: 'ACTIVE'
  };

  addDriver() {
    const newId = this.drivers.length > 0 ? Math.max(...this.drivers.map(d => d.id || 0)) + 1 : 1;
    this.drivers.push({ ...this.newDriver, id: newId });
    this.resetNewDriver();
  }

  deleteDriver(id: number) {
    this.drivers = this.drivers.filter(driver => driver.id !== id);
  }

  private resetNewDriver() {
    this.newDriver = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      licenseNumber: '',
      status: 'ACTIVE'
    };
  }
}
