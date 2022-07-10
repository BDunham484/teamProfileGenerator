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
        </head>
        <body>
            employee name: ${data.name}
            employee id: ${data.id}
            employee email: ${data.email}
            office number: ${data.officeNumber}
            role: ${data.role}
        </body>
    </html>
    `
}


// console.log(generatePage('This is the webpage'));

module.exports = generatePage