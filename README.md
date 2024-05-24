How to run the server on a machine.
Nodejs must be installed.

1. download setup.js and put it in the desired location

run 'node "setup.js"'

then in a terminal run 'npm i' to install the required packages

once done run 'node "Server.js"'
if your running the server on your local machine goto https://127.0.0.1:3000 otherwise find the ip of the server and goto https://ServerIP:3000
On first run the server will need a restart to create the certificate
the web adress will show as not secure
if you have your own you can specify the certificates to use in the options

If Running on Glitch or other hosting sites you might need to add 'Security: "http"' to the options to run the Server