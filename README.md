### Tech Stack

- BE: Laravel 9 PHP 8.1.10 - https://laravel.com/
- FE: ReactJS Node v16.18.0 - https://reactjs.org/

## Setup

Backend
1. Install composer
```
cd be
composer install
```

2. Create an `.env` file and Generate Key

```
cp .env.example .env
php artisan key:generate
```

3. Fill up the necessary information inside `.env` file

4. Generate migration 
```
php artisan migrate
```

5. Start server
```
php artisan serve
```

Frontend
1. Install npm
```
cd fe
npm install
```

2. Start server
```
npm start
```

## Documentation

- ERD - https://app.diagrams.net/#G1S7miTJuAYyzkp146efPDfzQotFFSnENK
- Postman APIs - https://web.postman.co/workspace/6c35ebcb-5426-4bb9-8e91-bb40a0579d7a

## Notes


