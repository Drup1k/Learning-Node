const fs = require("fs")
const path = require("path")
const os = require("os")
const clientDir = path.join(__dirname, 'client');
const directories = ['mainPage', 'contactPage', 'aboutPage', 'blogPage'];

if (!fs.existsSync(clientDir)){
    fs.mkdirSync(clientDir);
}

const operatingSystem = os.type();
const osInfoText = `This is being run on a ${operatingSystem} computer!`;
// declare structure
const pageDetails = {
    mainPage: { title: "Client Page", bgColor: "#FFD700"},
    contactPage: { title: "Contact Page", bgColor: "#FF69B4"},
    aboutPage: { title: "About Page", bgColor: "#00BFFF"},
    blogPage: { title: "Blog Page", bgColor: "#32CD32"}
};
// for each directory create 2 file's with desired content
directories.forEach(dirName => {
    const dirPath = path.join(clientDir, dirName);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageDetails[dirName].title}</title>
    </head>
    <body>
        <h1 style="text-align: center;">${pageDetails[dirName].title}</h1>
    </body>
    </html>`;

const cssContent = `
    body {
        background-color: ${pageDetails[dirName].bgColor};
    }`;

fs.writeFileSync(path.join(dirPath, 'index.html'), htmlContent);
fs.writeFileSync(path.join(dirPath, 'style.css'), cssContent);

});
// add txt file with os information writen in it
fs.writeFileSync(path.join(clientDir, 'info.txt'), osInfoText)