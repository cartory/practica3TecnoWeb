const students = document.getElementById('students')

console.log(students);

const profiles = [
    'milena', 'octavio', 'sergio'
]

profiles.forEach(profile => {
    students.innerHTML += `
    <div class="profile">
        <img src="assets/profile/${profile}.jpeg" alt="#">
    </div>
    `
})