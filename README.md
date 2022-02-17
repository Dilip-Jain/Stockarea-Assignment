## Laravel Installation
Installation Step - https://laravel.com/docs/8.x


## Nodejs and NPM Installation
Install from - https://nodejs.org/en/download/
- Make sure npm env variable exists.


## XAMPP Installation
Install from - https://www.apachefriends.org/index.html
- Install Apache.
- Install MySQL.


## Steps
- Clone code repo to htdocs folder created in XAMPP folder (where XAMPP is installed).
- Open XAMPP and start Apache and MySQL
- Using PHPMyAdmin, create a database named: warehouse
- Open CMD or Powershell or any other command line interface.
- Enter command to install required modules
    - npm install 
    - composer install
    - php artisan migrate --path=/database/migrations/2022_02_06_052435_create_warehouses_table.php
    - php artisan db:seed --class=WarehouseSeeder
- After all dependency installation run command
    - npm run dev
    - php artisan serve
- Open Chrome or any other modern browser and open the link given on command line, which looks like http://127.0.0.1:8000/


Stockarea Assignment

**[Dilip Jain](linkedin.com/in/dilipkjain/)**
