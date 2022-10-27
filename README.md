# Using Sequelize as an Object Relational Mapper

## About
- Includes:
    
    - Model MySQL table :heavy_check_mark:
    - Populate table with data :heavy_check_mark:
    - Query MySQL db :heavy_check_mark:
    - Frontend UI (incoming) :hammer:
  
## How to use the project
- Instance of a local host database connection, running in MySQL
  - Generally runs on:
    - localhost:3306
    - 127.0.0.1
    
- [database.js](https://github.com/JasonHitching/sequelize-orm-mysql/blob/main/api/server/config/database.js) has placeholders to input:
  - `yourSchemaName` - MySQL schema name
  - Local instance MySQL:
    - `yourUsername` - Your MySQL username ('root' unless changed when starting connection)
    - `yourPassword` - Your MySQL password (whatever you set up when configuring)
- `npm install` to install all required packages
 
If all initial setup is completed, executing `node booking-model.js` from within the `api\sequelize\models\booking-model.js` directory will execute the program.
