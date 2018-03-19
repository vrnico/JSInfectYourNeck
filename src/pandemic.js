export class Country{

  constructor(pop, pov, cli, tra) {
    this.pop = pop;
    this.infectedPop = 0;
    this.pov = pov;
    this.cli = cli;
    this.tra = tra;
    this.sci = false;
    this.infected = false;
    this.consumed = false;
  }

  setInfected(disease) {
    let interval = setInterval(() => {
      this.infectedPop += 1000 / this.pov;
      if (this.infectedPop >= this.pop/2) {
        disease.RandomEvent()
      } else if (this.infectedPop >= this.pop) {
        this.consumed = true;
        clearInterval(interval);
      }
    }, 1000 * disease.infect);
  }

  infection(disease) {
    if (this.infected === true) {
      setInfected(disease)
    }
  }
}

export function randCountries() {
  let array = [];
  for (i=0; i <= 23; i++){
    pop = (Math.floor(Math.random()*6)+1);
    pov = (Math.floor(Math.random()*10)+1);
    cli = (Math.floor(Math.random()*10)+1);
    tra = (Math.floor(Math.random()*10)+1);

    newCountry = new Country(pop, pov, cli, tra);
    array.push(newCountry);
  }
  return array;
}

export class Disease{

  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.infect = 0;
    this.dist = 0;
    this.resist = 0;
    this.evolvePoints = 0;
  }

  setStats() {
    if (this.type === "Fungal") {
      this.infect = 6;
      this.dist = 4;
      this.resist = 6;
    } else if (this.type === "Bactierial"){
      this.infect = 6;
      this.dist = 6;
      this.resist = 4;
    } else if (this.type === "Viral"){
      this.infect = 4;
      this.dist = 4;
      this.resist = 8;
    } else if (this.type === "Parasitic"){
      this.infect = 4;
      this.dist = 8;
      this.resist = 4;
  }

  //  RandomEvent() {
  //   let event = Math.floor(Math.random()*2)
  //   if (event === 0) {
  //
  //   } else if (event === 1) {
  //
  //   }
  // }
  //
  // infectUp() {
  //   this.infect++;
  // }
  //
  // distUp(){
  //   this.dist++;
  // }
  //
  // resistUp(){
  //   this.resist++;
  // }
  }
}
