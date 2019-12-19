# enroll-service

## Routes

### register new ennrollment

**_Request_**
`POST /enrollment`

```json
{
    "description": "description",
    "start_date": "start_date",
    "end_date": "end_date"
}
```

**_Response_**
`201 Created`

```json
```

### get enrollment by id

**_request_**
`GET /enrollment/:id`

```
```

**_response**
`200 OK`

```json
[
    {
        "id": "id",
        "description": "discription",
        "end_date": "end_date",
        "begin_date": "begin_date" ,
        "pay_id": "pay_id"
    }
]
```

### get all enrollments

`GET /enrollment/:id`

```
```


**_response**
`200 OK`

```json
[
    {
        "id": "id",
        "description": "discription",
        "end_date": "end_date",
        "begin_date": "begin_date" ,
        "pay_id": "pay_id"
    }
]
```

### update enrollement

#### update everything

**_request_**

`PUT /enrollment/:id`

```json
{
    "description": "description",
    "start_date": "start_date",
    "end_date": "end_date"
}

```

**_response_**
`200 OK, row modified`

#### update description

**_request_**

`PUT /enrollment-description/:id`

```json
{
    "description": "description"
}

```

**_response_**
`200 OK, row modified`

#### update start_date

**_request_**

`PUT /enrollment-begin/:id`

```json
{
    "start_date": "start_date"
}

```

**_response_**
`200 OK, row modified`

#### update end_date

**_request_**

`PUT /enrollment-end/:id`

```json
{
    "end_date": "end_date"
}

```

**_response_**
`200 OK, row modified`

## remarks

- `pay-id` is a property added for a feature that is not yet implemented
- `start_date` and `end_date` are unix timestamps
