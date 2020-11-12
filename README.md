## my1st-repo
Welcome to doob's historical first repository!

## What is it about?
To demonstrate **CRUD** (i.e. **C**reate, **R**ead, **U**pdate, and **D**elete) operations on a **mySQL database**.

## Any prerequisite installations?
Yes, git clone this repository and execute the installations as follows:

  1. git clone https://github.com/doobs-pc3/my1st-repo.git
  2. npm init  // to initiate a Node project
  3. npm install --save mysql express body-parser // modules required for the demo
  
## How to connect and run?
1. execute the following on your terminal:

   node server.js

2. call:
   #### GET USERS
   - curl http://localhost:8000/user

   #### GET USER
   - curl http://localhost:8000/user/:userid { userid between 1 and 99 }
   
   #### POST NEW USER
   - body (raw) (JSON)
    {
        "idcard": 86996999,
        "firstname": "Donald",
        "lastname": "Trump",
        "gender": "male",
        "dob": "1937-11-04",
        "phone": 7939076890,
        "email": "trump@whitehouse.com",
        "address1": "765 Battersea Road",
        "address2": "Kingsway Square",
        "postcode": "E2Y"
    }
    
    #### PUT USER
    - path variable: userid
    - body (raw) (JSON)
    {
    "email": "trump@home.com"
    }
    
    #### DELETE USER
    - path variable: userid
    
## Any Documentation?
Yes, click [here](https://web.postman.co/collections/13192159-56fddb78-9a6e-4cd6-89ff-325562747471?version=latest&workspace=66250a7e-e719-4b37-b89a-74b2505d70dc) and voila!
