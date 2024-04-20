# bonk!

### Follow the steps to open:

1. `clone` repo:
  ```
  git clone https://github.com/friedavocadoes/Bonk/
  ```
  >[!TIP]
  > or download latest `pre-release` *(on the right)*

2. Open `Bonk`:
  ```
  cd Bonk
  ```
   
  >[!NOTE]
  >If you downloaded `zip`, then extract → open folder → open a terminal window in the directory.<br>
  >*As an alternative to terminal, it is recommended to open the directory in [VScode](https://code.visualstudio.com/download).*

3. Install dependencies:
  ```
   npm i
  ```
  
5. Run development server:
  ```
  npm run dev
  ```


## Required Dependencies

Since **package.json** is included, use `npm i` in root directory to install all node dependencies at once.

<br>
Others<br>    
  
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [NodeJS](https://nodejs.org/en/download)


## Setting up MongoDB

1. Download [MongoDB](https://www.mongodb.com/docs/manual/installation/)
>[!TIP]
>I would recommend following [this GFG page](https://www.geeksforgeeks.org/how-to-install-mongodb-on-windows/) for proper installation and setup.
<br>


2. Open **MongoDBCompass**.

   
<br>


3. On the splashscreen, you will see **New Connection** and a **URI** below it.
   <br>
   <br>
   By default MongoDB uses `mongodb://localhost:27017` so make sure its that and then click **Connect**.

<br>

### Good to go, now Login and SignUp works!

>[!TIP]
>Try Signing Up and watch the **db model** `finder` being updated as you sign up.

<br>



>[!CAUTION]
>Do not clone `testonly` branch.
