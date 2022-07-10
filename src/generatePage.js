//fucntion to generate HTML for the page
const generatePage = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    </head>

    <body>
        <header>
            <nav class="navbar bg-dark bg-gradient">
                <div class="container-fluid justify-content-center">
                    <span class="navbar-brand mb-0 py-5 h1 fs-1 text-light text-center">Team Profile</span>
                </div>
            </nav>
        </header>
        <main>
            <div class="container d-flex justify-content-center">
                <ul class="d-flex flex-row">
                    <li>
                        <div class="card m-4" style="width: 18rem;">
                            <div class="card-header">
                                ${data.role}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Name: ${data.name}</li>
                                <li class="list-group-item">ID: ${data.id}</li>
                                <li class="list-group-item">Email: ${data.email}</li>
                                <li class="list-group-item">Office #: ${data.officeNumber}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"></script>
    </body>
    </body>

    </html>
    `
}


// console.log(generatePage('This is the webpage'));

module.exports = generatePage