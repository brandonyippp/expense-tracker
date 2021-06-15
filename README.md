# expense-tracker

- Expense Tracker (expense-tracker) is an easy-to-use application to track your expenses! This application is built with:
  - ReactJS (front-end)
  - Node.js Express (back-end)
  - Redux
  - MongoDB (Cloud Atlas)

## Usage

- Create a .env file expense-tracker/server with lines similar to the provided .env.example file.

  - Client-side (located in expense-tracker/client) is set to run on PORT: 3000
  - Server-side is set to run on PORT: 5000 or whichever port specified in the newly-created (by you!) .env file, assigned as PORT = <Your desired PORT here>

- Given that this application also uses MongoDB (specifically Cloud Atlas) as its respective database, you will have to either:

  - Create a new account: https://account.mongodb.com/account/register
  - Login to a pre-existing account: https://account.mongodb.com/account/login

- Once you have created a MongoDB account, proceed to:

  - Create a Cluster (free is fine) and wait for it to finish creating
  - Click (under the SECURITY tab on the left-hand side) Database Access

    - Add a new user by clicking the button on the right-most side
      - Enter a username ((e.g.) firstName-lastName_root) and password
      - Ensure that the user is able to Read and write to any database

  - Click (under the same SECURITY tab) Network Access

    - Add a new IP address by clicking the button on the right-most side
      - Click the Add Current IP Address button and click Confirm

  - Return to the Clusters tab and click CONNECT under the Cluster name
    - Proceed with the Connect your application option
      - Copy paste the provided connection string
        - Replace <password> with the password from above steps (no '<' and/or '>')
          - Paste this connection string into your .env file as follows:
            CONNECTION_URL = <connection string> (Don't include '<' and/or '>')

- With all of that setup, you're now ready to use the expense-tracker! Load up http://localhost:3000/ (or whichever PORT you've assigned) to begin using the application.
  - Type 'npm start' for both expense-tracker/client and expense-tracker/server to load both front-end and back-end. You're now good to go!
  -!!! Type 'npm install' in both expense-tracker/server and expense-tracker/client to install any needed dependencies !!!

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
