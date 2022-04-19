# tyba-backend-test

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
