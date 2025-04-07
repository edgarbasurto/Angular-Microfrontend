import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//define the team interface
interface Team {
  name: string;
  id: number;
  description: string;
  members?: Member[];

}

interface Member {
  name: string;
  id: number;
}


@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
//agregar teams, selectTeam(team), falta description
  // Define a property to hold the teams
  teams: Team[] = [
    { name: 'Team 1', id: 1, description: 'Description 1', members: [
      { name: 'Member 1', id: 1 },
      { name: 'Member 2', id: 2 },
      { name: 'Member 3', id: 3 },
      { name: 'Member 4', id: 4 },
      { name: 'Member 5', id: 5 }
    ] },
    { name: 'Team 2', id: 2, description: 'Description 2' },
    { name: 'Team 3', id: 3, description: 'Description 3' },
    { name: 'Team 4', id: 4, description: 'Description 4' },    
    { name: 'Team 5', id: 5, description: 'Description 5' },
    { name: 'Team 6', id: 6, description: 'Description 6' },
    { name: 'Team 7', id: 7, description: 'Description 7' },
    { name: 'Team 8', id: 8, description: 'Description 8' },
    { name: 'Team 9', id: 9, description: 'Description 9' },
    { name: 'Team 10', id: 10, description: 'Description 10' }
  ];
 
  goBack() {
    window.history.back();
  }
  // Method to add a new team
  addTeam(name: string, id: number, description: string) {
    this.teams.push({ name, id, description });
  }

  // Define a property to hold the selected team
  selectedTeam: Team | null = null;
  // Method to select a team
  selectTeam(team: Team) {
    this.selectedTeam = team;
  }
  // Method to get the selected team
  getSelectedTeam() {
    return this.selectedTeam;
  }
  // Method to clear the selected team
  clearSelectedTeam() {
    this.selectedTeam = null;
  }
  // Method to get the teams
  getTeams() {
    return this.teams;
  }
  // Method to get the last team
  getLastTeam() {
    return this.teams[this.teams.length - 1];
  }
  // Method to get the first team
  getFirstTeam() {
    return this.teams[0];
  }
  // Method to get the team by id
  getTeamById(id: number) {
    return this.teams.find(team => team.id === id);
  }
  // Method to get the team by name
  getTeamByName(name: string) {
    return this.teams.find(team => team.name === name);
  }
  // Method to get the team by id and name
  getTeamByIdAndName(id: number, name: string) {
    return this.teams.find(team => team.id === id && team.name === name);
  }
  // Method to get the team by id or name
  getTeamByIdOrName(id: number, name: string) {
    return this.teams.find(team => team.id === id || team.name === name);
  }
  // Method to get the team by id and name or id
  getTeamByIdAndNameOrId(id: number, name: string) {
    return this.teams.find(team => team.id === id && team.name === name || team.id === id);
  }
  // Method to get the team by id or name and id
  getTeamByIdOrNameAndId(id: number, name: string) {
    return this.teams.find(team => team.id === id || team.name === name && team.id === id);
  }
  // Method to get the team by id and name or id and name
  getTeamByIdAndNameOrIdAndName(id: number, name: string) {
    return this.teams.find(team => team.id === id && team.name === name || team.id === id && team.name === name);
  }

}
