# Project: API for chattr

successful api calls return `success: true` and any needed data

unsuccessful api calls return `success: false` and any needed data

## End-point: getAllUsers
**Route to get all users.**

This route returns a json object with user password as a hash and success as true if users were returned succesfully, it would be marked false otherwise.

``` json
{
    "success": true,
    "message": [
        {
            "id": 5,
            "username": "SuperUser",
            "email": "aberrocal@testmail.com",
            "password": "hash would be here",
            "firstname": "Andrea",
            "lastname": "Berrocal"
        },
        {
            "id": 15,
            "username": "TestUser",
            "email": "test@testmail.com",
            "password": "hash would be here",
            "firstname": "TestName",
            "lastname": "TestLast"
        }
    ]
}

```
### Method: GET
>```
>{{URL}}/api/users
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getUserById
**Route to get user by Id**

_Must pass an id as parameter_

Example of successful call

``` json
{
    "success": true,
    "message": [
        {
            "id": 5,
            "username": "SuperUser",
            "email": "aberrocal@testmail.com",
            "password": "hash would be here",
            "firstname": "Andrea",
            "lastname": "Berrocal"
        }
    ]
}

```
### Method: GET
>```
>{{URL}}/api/users/id/5
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getUserByUserName
**Route to get user by username**

_Must pass an username as parameter_

Example of successful call

``` json
{
    "success": true,
    "message": {
        "id": 5,
        "username": "SuperUser",
        "email": "aberrocal@testmail.com",
        "password": "hash would be here",
        "firstname": "Andrea",
        "lastname": "Berrocal"
    }
}

```
### Method: GET
>```
>{{URL}}/api/users/username/SuperUser
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: register
**register route**

Must pass in all required fields. See example below:

``` json
{
  "username": "TestUser",
  "firstname": "TestName",
  "lastname": "TestLast",
  "email": "test@testmail.com",
  "password": "test3000"
}
```
### Method: POST
>```
>{{URL}}/api/register
>```
### Body (**raw**)

```json
{
    "username": "TestUser",
    "firstname": "TestName",
    "lastname" : "TestLast",
    "email": "test@testmail.com",
    "password": "test3000"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login
**Login route**

Must pass in a username and password in json format

``` json
{
  "username": "Test",
  "password": "TestPassword"
}

```
### Method: POST
>```
>{{URL}}/api/login
>```
### Body (**raw**)

```json
{
    "username": "SuperUser",
    "password": "password3000"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleteUserById-Admin
**Route to delete user by Id only admin users can use this route**

_must pass id as parameter_

successful call example:

``` json
{
    "success": true,
    "message": "user with id: 14 has been deleted"
}

```

unsuccessful call due to not being admin user:

``` json
{
    "success": false,
    "message": "You are not authorized, not an admin"
}

```
### Method: DELETE
>```
>{{URL}}/api/users/admin/id/17
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{USER_TOKEN}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleteUserByUserName
**Route to delete user by username - user can only delete their own account**

_must pass username as parameter_

successful call example:

``` json
{
    "success": true,
    "message": "TestUser has been deleted"
}

```

unsuccessful call because authenticated user does not match user to delete:

``` json
{
    "success": false,
    "message": "Not authorized to access"
}

```
### Method: DELETE
>```
>{{URL}}/api/users/username/TestUser
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{USER_TOKEN}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getMessagesFromUsername
This route is protected, of a user is not logged in with token, then messages will not be returned.  
If all checks pass then any messages sent by user logged in or received by user logged in will be returned.

Example of successful api call:

``` json
{
    "success": true,
    "message": "[{\"id\":2343253342,\"user\":\"HarryPotter\",\"sentTo\":\"SuperUser\",\"message\":\"Hey what's up\",\"date\":\"2023-01-03\",\"sent\":true,\"delivered\":true,\"deliveredAt\":\"10:53\"},{\"id\":462436346,\"user\":\"SuperUser\",\"sentTo\":\"Voldemort\",\"message\":\"Nothing\",\"date\":\"2023-01-03\",\"sent\":true,\"delivered\":true,\"deliveredAt\":\"10:57\"},{\"id\":958679764,\"user\":\"SuperUser\",\"sentTo\":\"Voldemort\",\"message\":\"okayyy then\",\"date\":\"2023-01-03\",\"sent\":true,\"delivered\":true,\"deliveredAt\":\"10:56\"}]"
}

```

Example of api call if bearer token is not present:

``` json
{
    "success": false,
    "message": "Not authorized to access"
}

```
### Method: GET
>```
>{{URL}}/api/messages
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{USER_TOKEN}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: editMessageById
### Method: PUT
>```
>{{URL}}/api/messages/id/462436346
>```
### Body (**raw**)

```json
{"message": "This is an edited message"}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{USER_TOKEN}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleteMessageById
Route to delete a message by id.  
User can only delete a message they sent, user must be authenticated.

sample json of deleted message:  

``` json
{
    "success": true,
    "message": "The message: 'Nothing' by user: 'SuperUser' with id: '462436346' has been deleted"
}

```
### Method: DELETE
>```
>{{URL}}/api/messages/id/462436346
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{USER_TOKEN}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetAllMessagesAdmin
Route to get all message in app  
Only admin users can use this route, user must be authenticated

Sample response of failed api call if user is authenticated but is not admin:

``` json
{
    "success": false,
    "message": "You are not authorized, not an admin"
}

```

Sample response of successful api call:

``` json
{
    "success": true,
    "message": "[{\"id\":2343253342,\"user\":\"HarryPotter\",\"sentTo\":\"SuperUser\",\"message\":\"Hey what's up\",\"date\":\"2023-01-03\",\"sent\":true,\"delivered\":true,\"deliveredAt\":\"10:53\"},{\"id\":462436346,\"user\":\"SuperUser\",\"sentTo\":\"Voldemort\",\"message\":\"Nothing\",\"date\":\"2023-01-03\",\"sent\":true,\"delivered\":true,\"deliveredAt\":\"10:57\"},{\"id\":958679764,\"user\":\"SuperUser\",\"sentTo\":\"Voldemort\",\"message\":\"okayyy then\",\"date\":\"2023-01-03\",\"sent\":true,\"delivered\":true,\"deliveredAt\":\"10:56\"},{\"id\":134543646,\"user\":\"HarryP\",\"sentTo\":\"Voldemort\",\"message\":\"okayyy then\",\"date\":\"2023-01-03\",\"sent\":true,\"delivered\":true,\"deliveredAt\":\"10:56\"}]"
}

```
### Method: GET
>```
>{{URL}}/api/messages/admin
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|{{USER_TOKEN}}|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
