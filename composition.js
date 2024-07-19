// OBJECT COMPOSITION

const barker = (state) => ({
  bark : () => console.log("Woof, I am " + state.name)
});

const murderRobotDog = (name) => {
  let state = {
    name, 
    speed: 100,
    position: 0,
  }
  return Object.assign(
    {}, 
    barker(state),
    driver(state),
    killer(state)
  )
}

murderRobotDog("sniffles").bark()



// CLASS COMPOSITION

// Define functions for each behavior

const bark = (state) => () => {
  console.log("Woof, I am " + state.name);
};

const drive = (state) => () => {
  console.log(`Driving at ${state.speed} speed. Current position: ${state.position}`);
};

const kill = () => () => {
  console.log("Target eliminated!");
};

// Define the class

class MurderRobotDog {

  constructor(name) {
    this.state = {
      name,
      speed: 100,
      position: 0,
    };

    this.bark = bark(this.state);
    this.drive = drive(this.state);
    this.kill = kill();
  }
}
