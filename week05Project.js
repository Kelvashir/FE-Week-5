//Created a player class with player name and weapon as properties
class Player {
  constructor(playerName, weapon) {
    this.playerName = playerName;
    this.weapon = weapon;
  }
}

//Created a team class with team name and an empty array as properties
class Team {
  constructor(teamName) {
    this.teamName = teamName;
    this.players = [];
  }
}

//Created a menu class that will let a user know what they can do with our program
class Menu {
  constructor() {
    this.teams = [];
    this.selectedTeam = null;
  }
  //The method that will "run" our program and run other methods depending on user input
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createTeam();
          break;
        case "2":
          this.viewTeamMembers();
          break;
        case "3":
          this.deleteTeam();
          break;
        case "4":
          this.displayTeams();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert(`Thanks for playing!!`);
  }
  //Initial menu options
  showMainMenuOptions() {
    return prompt(`
    0) Exit
    1) Create New Team
    2) View Team Members
    3) Delete Team
    4) Display Teams
    `);
  }
  //Team menu options
  showTeamMenuOptions(teamInfo) {
    return prompt(`
    0) Return to previous menu
    1) Create New Player
    2) Delete Existing Player
    ---------------------------
    ${teamInfo}
    `);
  }
  //Method to create a team name
  createTeam() {
    let name = prompt("Enter name for new team:");
    this.teams.push(new Team(name));
  }
  //Method to veiw the members of a team
  viewTeamMembers() {
    alert(`These are the available teams to view players from:`);
    this.displayTeams();

    let index = prompt("Enter the number of the team you wish to view:");
    if (index > -1 && index < this.teams.length) {
      this.selectedTeam = this.teams[index];
      let description = "Team Name: " + this.selectedTeam.teamName + "\n";

      for (let i = 0; i < this.selectedTeam.players.length; i++) {
        description +=
          i +
          ") " +
          this.selectedTeam.players[i].playerName +
          " - " +
          this.selectedTeam.players[i].weapon +
          "\n";
      }

      let selection = this.showTeamMenuOptions(description);
      switch (selection) {
        case "1":
          this.createPlayer();
          break;
        case "2":
          this.deletePlayer();
      }
    }
  }
  //Method to create a player
  createPlayer() {
    let playerName = prompt("Enter name for new player:");
    let defensiveUnit = prompt("Enter choice of weapon:");
    this.selectedTeam.players.push(new Player(playerName, defensiveUnit));
  }
  //Method to delete a player
  deletePlayer() {
    let index = prompt("Enter the number of the player you want to delete:");
    if (index > -1 && index < this.selectedTeam.players.length) {
      this.selectedTeam.players.splice(index, 1);
    }
  }
  //Method to delete a team
  deleteTeam() {
    let index = prompt("Enter the number of the team you want to delete:");
    if (index > -1 && index < this.teams.length) {
      this.teams.splice(index, 1);
    }
  }
  //Method to display the existing teams
  displayTeams() {
    let teamString = "";
    for (let i = 0; i < this.teams.length; i++) {
      teamString += i + ") " + this.teams[i].teamName + "\n";
    }
    alert(teamString);
  }
}

let menu = new Menu();
menu.start();
