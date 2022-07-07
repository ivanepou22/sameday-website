# Same-Day API


### Installation
1. Clone the repository

```bash
server/~$ npm install -g yarn # install yarn
server/~$ yarn install # install dependencies
server/~$ mv .env.example .env # move .env.example to .env
server/~$ yarn dev # start the development server
```

### TODOs
- [x] create models
     - [x] User Model
     - [x] Token Model
     - [x] Appointment Model
     - [x] Doctor Model
     - [x] Orders Model
     - [x] Patients Model
     - [x] Engagement Log Model
     - [x] Services Model

- [x] create controllers
     - [x] User Controller
     - [x] Token Controller
     - [x] Appointment Controller
     - [x] Doctor Controller
     - [x] Orders Controller
     - [x] Patients Controller
     - [x] Engagement Log Controller
     - [x] Services Controller

- [x] create Services
    - [x] User Service
    - [x] Auth Service
    - [x] Token Service
    - [x] Appointment Service
    - [x] Doctor Service
    - [x] Orders Service
    - [x] Patients Service
    - [x] Engagement Log Service
    - [x] Services Service


### Endpoints
| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | /api/v1/users | Get all users |
| POST   | /api/v1/users | Create a new user |
| GET    | /api/v1/users/:id | Get a user by id |
| PUT    | /api/v1/users/:id | Update a user by id |
| DELETE | /api/v1/users/:id | Delete a user by id |
| GET    | /api/v1/services | Get all services |
| POST   | /api/v1/services | Create a new service |
| GET    | /api/v1/services/:id | Get a service by id |
| PUT    | /api/v1/services/:id | Update a service by id |
| DELETE | /api/v1/services/:id | Delete a service by id |
| GET    | /api/v1/doctors | Get all doctors |
| POST   | /api/v1/doctors | Create a new doctor |
| GET    | /api/v1/doctors/:id | Get a doctor by id |
| PUT    | /api/v1/doctors/:id | Update a doctor by id |
| DELETE | /api/v1/doctors/:id | Delete a doctor by id |
| GET    | /api/v1/appointments | Get all appointments |
| POST   | /api/v1/appointments | Create a new appointment |
| GET    | /api/v1/appointments/:id | Get an appointment by id |
| PUT    | /api/v1/appointments/:id | Update an appointment by id |
| DELETE | /api/v1/appointments/:id | Delete an appointment by id |
| GET    | /api/v1/orders | Get all orders |
| POST   | /api/v1/orders | Create a new order |
| GET    | /api/v1/orders/:id | Get an order by id |
| PUT    | /api/v1/orders/:id | Update an order by id |
| DELETE | /api/v1/orders/:id | Delete an order by id |
| GET    | /api/v1/patients | Get all patients |
| POST   | /api/v1/patients | Create a new patient |
| GET    | /api/v1/patients/:id | Get a patient by id |
| PUT    | /api/v1/patients/:id | Update a patient by id |
| DELETE | /api/v1/patients/:id | Delete a patient by id |
| GET    | /api/v1/logs | Get all engagement logs |
| POST   | /api/v1/logs | Create a new engagement log |
| GET    | /api/v1/logs/:id | Get an engagement log by id |
| PUT    | /api/v1/logs/:id | Update an engagement log by id |
| DELETE | /api/v1/logs/:id | Delete an engagement log by id |
| POST   | /api/v1/auth/login | Login a user |
| POST   | /api/v1/auth/register | Register a user |
| POST   | /api/v1/auth/logout | Logout a user |
| POST   | /api/v1/auth/refresh | Refresh a user's token |

### Bugs
For any bugs, please raise an issue on [GitHub](https://github.com/ivanepou/sameday-website)


### Contributing
For any contributions, please raise an issue on [GitHub](https://github.com/ivanepou/sameday-website) or create a pull request.


### License
This project is licensed under the MIT license.


