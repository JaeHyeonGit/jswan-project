document.addEventListener('DOMContentLoaded', function() {
    fetch('/static/person.json')
	.then(response => response.json())
        .then(data => {
            data.forEach(person => {
                if (person.이름 === "장시영") {
                    const imageDiv = document.querySelector('.e87_587');
                    
                    let imageUrl = person.사진[person.상태]; 
                    imageDiv.style.backgroundImage = `url('${imageUrl}')`;
                }
                if (person.이름 === "최명근") {
                    const imageDiv = document.querySelector('.e87_588');

                    let imageUrl = person.사진[person.상태];
                    imageDiv.style.backgroundImage = `url('${imageUrl}')`;
                }

            });
        })
        .catch(error => console.error('Error loading or processing person data:', error));
});


