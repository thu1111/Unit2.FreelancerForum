const people =[
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

const freelancers = [
    {name: "Alice", occupation: "Writer", price: 30},
    {name: "Bob", occupation: "Teacher", price: 50},
];

function addRandomFreelancers() {
    const freelancer = people[Math.floor(Math.random()*people.length)];
    freelancers.push(freelancer);
}

function calculateAverage() {
    const total = freelancers.reduce((sum,freelancer)=> sum+freelancer.price, 0);
    return (total/freelancers.length).toFixed(2);
}


function render() {
    const freelancerContainer = document.querySelector("#freelancerList");
    const averagePriceContainer = document.querySelector("#averagePrice");

    const cards = freelancers.map((freelancer)=>{
        const card = document.createElement("div");
        card.classList.add("freelancerCard");
        card.innerHTML = `
        <p>Name: ${freelancer.name}</p>
        <p>Occupation: ${freelancer.occupation}</p>
        <p>Starting Price: $${freelancer.price}</p>
        `;
        
        return card;
    });

    freelancerContainer.replaceChildren(...cards);

    averagePriceContainer.textContent = `The average starting price is: $${calculateAverage()}`;
}

setInterval(()=>{
    addRandomFreelancers();
    render();
},3000);

render();