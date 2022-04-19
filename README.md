# tyba-backend-test

# Table of Contents
**[POST: Registro](#post-registro)**<br>
**[POST: Login](#post-login)**<br>
**[POST: Lista de restaurantes cercanos para usuario logueado](#post-lista-de-restaurantes-cercanos-para-usuario-logueado)**<br>
**[GET: Historial de transacciones del usuario logueado](#get-historial-de-transacciones-del-usuario-logueado)**<br>
**[GET: Log out](#get-log-out)**<br>

<br>

## Comandos para probar Aplicación
1. Desde el directorio raíz correr el container con Mongodb
    - docker-compose -f compose.yaml up

2. Para correr la API-REST
- npm install
- pegar el .env recibido por correo en el directorio raíz
- npm run dev

3. Realizar pruebas de los endpoints desde POSTMAN o similar
    - BaseUrl: http://localhost:3000

*Se puede abrir la consola de Mongo Express en http://localhost:8080/ para revisar los datos en appDB.

<br>

## API REST endpoints

### POST: Registro
#### Request data
- Path: /registro
- Body: 
  - Example POST request body (JSON)
```JSON
{
    "username": "julio",
    "password": "pass",
    "gender": "Male",
    "age": 12,
    "country": "Colombia",
    "transactions" : []
}
```

<br>

### POST: Login
#### Request data
- Path: /login
- Body: 
  - Example POST request body (JSON)
```JSON
{
    "username": "julio",
    "password": "pass"
}
```

<br>

### POST: Lista de restaurantes cercanos para usuario logueado
#### Request data
- Path: /getNearbyRestaurants
- Body: 
  - Example POST request body (JSON)
```JSON
{
    "lat": 4.713912,
    "lon": -74.030023
}
```

<br>

### GET: Historial de transacciones del usuario logueado
#### Request data
- Path: /getTransactionsHistory


<br>

### GET: Log out
#### Request data
- Path: /logout
