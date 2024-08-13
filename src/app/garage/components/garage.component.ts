import { Component } from '@angular/core';
import { GarageService } from '../services/garage.service';

export interface Car {
  id?: number;
  brand: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss'
})

export class GarageComponent {

  showForm = false; 
  newCar: Car = {brand: '', model: '', year: 0};
  cars: Car[] = [];

  constructor(private garageService: GarageService) {}

  ngOnInit(): void {
    this.showForm = window.localStorage.getItem('showForm') === 'true'; 
  }

  addCar() {
    this.cars.push({ ...this.newCar, id: this.cars.length + 1 });
    
    this.garageService.sendCarData(this.newCar).subscribe(response => {
      console.log('Данные отправлены на сервер:', response);
    }, error => {
      console.error('Ошибка при отправке данных:', error);
    });

    this.newCar = { brand: '', model: '', year: 0 };
    window.localStorage.setItem('showForm', 'false'); // Скрываем форму после добавления автомобиля
  }

  toggleForm() {   // Создаем метод для переключения формы
    this.showForm = !this.showForm;
    window.localStorage.setItem('showForm', this.showForm.toString());   // Сохраняем значение в localStorage
  }

}

