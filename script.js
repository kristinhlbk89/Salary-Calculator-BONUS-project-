const form = document.querySelector("#salary-form");

function onFormSubmit(event) {
   event.preventDefault();
   const data = new FormData(event.target);
    
    const salary = dataObject.salary;
   console.log(dataObject);
   form.reset();
}

form.addEventListener("submit", onFormSubmit);