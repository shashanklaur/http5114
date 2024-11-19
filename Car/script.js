// Single Game Simulation
const car = Math.floor(Math.random() * 3) + 1; // Place the car randomly
const choice = Math.floor(Math.random() * 3) + 1; // Contestant's choice
let remove; // Host's removal

// Ensure 'remove' is not the same as 'car' or 'choice'
do {
    remove = Math.floor(Math.random() * 3) + 1;
} while (remove === car || remove === choice);

// Determine whether the contestant should stay or switch
const shouldSwitch = choice !== car;
const advice = shouldSwitch ? "The contestant should switch" : "The contestant should stay";

// Display single game results
document.getElementById("carResult").textContent = `The car is placed behind door ${car}`;
document.getElementById("choiceResult").textContent = `The contestant chose door ${choice}`;
document.getElementById("removeResult").textContent = `The host removes door number ${remove}`;
document.getElementById("adviceResult").textContent = advice;

// 10,000 Game Simulation
let switchCounter = 0;
let stayCounter = 0;

for (let i = 0; i < 10000; i++) {
    // Randomly assign car and contestant's choice
    const carSim = Math.floor(Math.random() * 3) + 1;
    const choiceSim = Math.floor(Math.random() * 3) + 1;

    // Determine which door the host removes
    let removeSim;
    do {
        removeSim = Math.floor(Math.random() * 3) + 1;
    } while (removeSim === carSim || removeSim === choiceSim);

    // Increment counters based on the result
    if (choiceSim !== carSim) {
        switchCounter++;
    } else {
        stayCounter++;
    }
}

// Display 10,000 game simulation results
document.getElementById("results").innerHTML = `
    <p>Total simulations: 10,000</p>
    <p>Times switching won: ${switchCounter}</p>
    <p>Times staying won: ${stayCounter}</p>
    <p>Switching wins ${(switchCounter / 10000 * 100).toFixed(2)}% of the time.</p>
    <p>Staying wins ${(stayCounter / 10000 * 100).toFixed(2)}% of the time.</p>
`;
