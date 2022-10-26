# Using Sequelize as an Object Relational Mapper

## About
- Uses Sequelize ORM to:
  - Model MySQL table
  - Query MySQL db
  
## How to use the project
- Instance of a local host database connection, running in MySQL
  - Generally runs on:
    - localhost:3306
    - 127.0.0.1
    
- [database.js](https://github.com/JasonHitching/sequelize-orm-mysql/blob/main/api/server/config/database.js) has placeholders to input:
  - MySQL schema name
  - Local instance MySQL:
    - username ('root' unless changed when starting connection)
    - password (whatever you set up when configuring)
  
- Once all the initial setup is complete executing `node booking-model.js from within 'api\sequelize\models\booking-model.js' will execute the program.
