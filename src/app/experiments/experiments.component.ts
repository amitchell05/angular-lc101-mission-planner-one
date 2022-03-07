import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css'],
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density',
  ];

  experimentBeingEdited: string = null;

  constructor() {}

  ngOnInit(): void {}

  add(experiment: string) {
    if (!this.experiments.includes(experiment)) {
      this.experiments.push(experiment);
    }
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(experiment: string, savedItem: string) {
    let index = this.experiments.indexOf(savedItem);
    this.experiments[index] = experiment;
    this.experimentBeingEdited = null;
  }
}
