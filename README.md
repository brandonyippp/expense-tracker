# expense-tracker

- Expense Tracker (expense-tracker) is an easy-to-use application to track your expenses! This application is built with:
  - ReactJS (front-end)
  - Node.js Express (back-end)
  - Redux
  - MongoDB (Cloud Atlas)

## Usage

- !!! Type 'npm install' in both expense-tracker/server and expense-tracker/client to install any needed dependencies !!!

- Create a .env file in expense-tracker/server with lines similar to the provided .env.example file (refer to **_ INFORMATION REGARDING .env FILE _** below)

- Given that this application also uses MongoDB (specifically Cloud Atlas) as its respective database, you will have to either:

  - Create a new account: https://account.mongodb.com/account/register
  - Login to a pre-existing account: https://account.mongodb.com/account/login

  - Once you have a MongoDB account, proceed to:

    - Create a Cluster (free is fine) and wait for it to finish creating (assuming you don't have one created already)

    - Click (under the SECURITY tab on the left-hand side) Database Access

      - Add a new user by clicking the 'ADD NEW DATABASE USER' button on the rightmost side
        - Enter a username ((e.g.) firstName-lastName_root) and password (auto-generated recommended)
        - Ensure that 'Read and write to any database' is selected from the menu for user permissions

    - Click (under the same SECURITY tab) Network Access

      - Add a new IP address by clicking the 'ADD IP ADDRESS' button on the rightmost side
        - Click the Add Current IP Address button and click Confirm

    **_ INFORMATION REGARDING .env FILE _**

    - Return to the Clusters tab and click the 'CONNECT' button under the Cluster name
      - Proceed with the 'Connect your application' option
        - Copy the provided connection string
          - Replace <password> with the password from above steps (don't include '<' or '>')
            - Paste this connection string into your .env file as follows:
              CONNECTION_URL = <connection string> (don't include '<' or '>')
              - PASTE 'PORT = 5000' as well on a new line into the .env file (or whichever PORT you prefer, so long as it's different from the PORT that the front-end is running on)

  - Client-side (located in expense-tracker/client) is set to run on PORT: 3000
  - Server-side is set to run on PORT: 5000 or whichever port specified in the newly-created (by you!) .env file, assigned as PORT = <Your desired PORT here>

- With all of that setup, you're now ready to use the expense-tracker! Load up http://localhost:3000/ (or whichever PORT you've assigned) to begin using the application.
  - Type 'npm start' for both expense-tracker/client and expense-tracker/server to load both front-end and back-end. You're now good to go!

## Used Dependencies

- @material-ui for:

  - TableContainer from @material-ui/core/TableContainer
  - Backdrop from @material-ui/core/Backdrop
  - { makeStyles } from @material-ui/core/styles
  - TableHead from @material-ui/core/TableHead
  - TableBody from @material-ui/core/TableBody
  - TableCell from @material-ui/core/TableCell
  - TableRow from @material-ui/core/TableRow
  - Button from @material-ui/core/Button
  - Table from @material-ui/core/Table
  - Paper from @material-ui/core/Paper
  - Modal from @material-ui/core/Modal
  - Fade from @material-ui/core/Fade
  - FormHelperText from @material-ui/core/FormHelperText
  - FormControl from @material-ui/core/FormControl
  - InputLabel from @material-ui/core/InputLabel
  - Input from @material-ui/core/Input
  - Select from @material-ui/core/Select
  - MenuItem from @material-ui/core/MenuItem
  - DeleteIcon from @material-ui/icons/Delete

- axios

- react-minimal-pie-chart

- styled-components

- redux

- react-toastify
