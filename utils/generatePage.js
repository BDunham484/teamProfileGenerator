//fucntion to generate HTML for the page
const generatePage = (data) => {
    return
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Progile Generator</title>
        </head>
        <body>
            ${data}
        </body>
    </html>
    `
}



module.exports