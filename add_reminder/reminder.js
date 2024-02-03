var form = document.getElementById('form')
        form.addEventListener('submit', function (event) {

            var name = document.getElementById('text').value
            console.log(name)

            var date = document.getElementById('date').value
            console.log(date)

            var reminder = document.getElementById('reminder').value
            console.log(reminder)

            var email = document.getElementById('email').value
            console.log(email)
            document.getElementById('form').reset();


        })
