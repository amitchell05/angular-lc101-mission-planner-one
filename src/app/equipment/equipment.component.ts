import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks',
  ];

  itemBeingEdited: string = null;

  constructor() {}

  ngOnInit(): void {}

  add(item: string) {
    if (!this.equipment.includes(item)) {
      this.equipment.push(item);
    }
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(item: string, savedItem: string) {
    let index = this.equipment.indexOf(savedItem);
    this.equipment[index] = item;
    this.itemBeingEdited = null;
  }
}
