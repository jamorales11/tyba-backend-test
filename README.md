# tyba-backend-test

# Table of Contents
**[POST: Registro](#post-registro)**<br>
**[POST: Login](#post-login)**<br>
**[POST: Lista de restaurantes cercanos para usuario logueado](#post-lista-de-restaurantes-cercanos-para-usuario-logueado)**<br>
**[GET: Historial de transacciones del usuario logueado](#get-historial-de-transacciones-del-usuario-logueado)**<br>
**[GET: Log out](#get-log-out)**<br>

## API REST endpoints

BaseUrl: localhost:3000

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



### GET: Historial de transacciones del usuario logueado
#### Request data
- Path: /getTransactionsHistory




### GET: Log out
#### Request data
- Path: /logout
