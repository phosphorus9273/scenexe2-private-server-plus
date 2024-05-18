How to run the server on a machine.
Nodejs must be installed.

download the server files and put them in the desired location

with openssl run "openssl req -new -newkey rsa:4096 -days 9999 -nodes -x509 -subj "/CN=localhost /O=AbsentPopcorn33" -keyout secret.key -out secret.cer" to create a certificate to run the server on your machine. the certificate WILL show as not secure

in a terminal run 'npm i' to install the required packages

now run 'node 'server.js'

if your running the server on your local machine goto https://127.0.0.1:3000 otherwise find the ip of the server and goto https://<ServerIP>:3000

if you cant connect check the http site if its there edit the MainScenexe2.js and change the 2nd occurance of http to https
