var form = document.getElementById('form')

        form.addEventListener('submit', function (event) {
            event.preventDefault()

            var name = document.getElementById('birthdate').value
            console.log(name)

            var date = document.getElementById('currentdate').value
            console.log(date)
            document.getElementById("form").reset();
        })

    
