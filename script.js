//State
const freelancers = [
    {name: "Alice", occupation: "Writer", price: 30},
    {name: "Bob", occupation: "Teacher", price: 50}
];

const newFreelancers = [
    {name: "Alice", occupation: "Writer", price: 30},
    {name: "Bob", occupation: "Teacher", price: 50},
    {name: "Catherine", occupation: "Nurse", price: 60},
    {name: "Dollas", occupation: "Artist", price: 40},
    {name: "Elon", occupation: "Chef", price: 10},
    {name: "Francis", occupation: "Doctor", price: 90},
    {name: "Grace", occupation: "Engineer", price: 20},
    {name: "Hallen", occupation: "Programmer", price: 70},
    {name: "Ida", occupation: "Gardener", price: 10},
    {name: "Jack", occupation: "Driver", price: 30},
    {name: "Kelly", occupation: "Composer", price: 50},
];

const maxFreelancers = 10;

//render - Update the DOM to reflect the current state
function render() {
    const freelancerList = document.querySelector("#freelancersList");
    const averagePrice = document.querySelector("#averagePrice");

    const cards = freelancers.map((freelancer)=>{
        const card = document.createElement("div");
        card.classList.add("freelancer");
        card.innerHTML=`
        <p>Name: ${freelancer.name}</p>
        <p>Occupation: ${freelancer.occupation}</p>
        <p>Start Price: ${freelancer.price}</p>
        `;

        return card;
    });

    freelancerList.replaceChildren(...cards);

    averagePrice.textContent =`$${calculateAverage()}`;
}
render();//Initial render

//calculate average price
function calculateAverage() {
    const total = freelancers.reduce((sum, freelancer)=> sum+freelancer.price,0);
    return freelancers.length>0? (total/freelancers.length).toFixed(2) : 0.00;
}

//add random freelancer
function addFreelancer() {
    const newFreelancer = newFreelancers[Math.floor(Math.random()*newFreelancers.length)];

    //A check to ensure the freelancer is not already in the freelancers array.
    if (!freelancers.some(f => f.name === newFreelancer.name)) {
        freelancers.push(newFreelancer);
    }

    render();

    if(freelancers.length>=maxFreelancers) clearInterval(freelanceInterval);
}

//set interval function
const freelanceInterval = setInterval(addFreelancer,1000);




