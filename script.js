const form = document.querySelector("#salary-form");

function onFormSubmit(event) {

  event.preventDefault();

  const data = new FormData(event.target);

  const dataObject = Object.fromEntries(data.entries());

  const salary = dataObject.salary;

  const state = dataObject.state;

    let taxRate;
    if (state === "Ohio") {
  taxRate = 0.05;
}
if (state === "Florida") {
  taxRate = 0.04;
}
    if (state === "California") {
  taxRate = 0.08;
    }
    
    const taxAmount = salary * taxRate;
    const takeHomePay = salary - taxAmount;
    const summary = `Your annual salary is $${salary}. After taxes, your take-home pay will be $${takeHomePay}.`;

    form.reset();
    document.querySelector("#summary").textContent = summary;
document.querySelector("#summary").style.display = "block";
    
  console.log(dataObject);

}

form.addEventListener("submit", onFormSubmit);