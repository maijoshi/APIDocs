## Messaging

Enable patients and providers to individually and group message others.

### Create a message thread

Creates a message thread between selected users and returns a message thread ID. If message thread already exists between selected users, returns existing messaging thread ID.

#### Example request body

```json
{
  "members": ["Sally", "Neal"]
}
```

Property |  Type | Description
---|---|---
`members` | String | List of selected users to create message thread with

```endpoint
POST /messagethread
```

#### Example response

```json
{
  "id": "{message_thread_id}"
}
```

### Create a message 

Creates a new message in message thread

#### Example request body

```json
{
  "messageThreadID": "{message_thread_id}",
  "sender": "{user_id}",
  "text": "This is a new message!",
  "timestamp": 1637734361
}
```

Property |  Type | Description
---|---|---
`message_thread_id` | String | Message thread ID that new message belongs to
`sender` | String | ID of user sending the message
`text` | String | Actual text of message
`timestamp` | Number | Timestamp for message sent in terms of Unix epoch time
```endpoint
POST /message
```

#### Example response

```json
{
  "id": "{message_id}"
}
```

### Get message threads

Get all message threads for user

#### Example request body

```json
{
  "user_id": "{user_id}"
}
```

Property |  Type | Description
---|---|---
`user_id` | String | ID of user for which returning all the message threads for
```endpoint
GET /messagethreads
```

#### Example response

```json
{[
  {
    "id": "{message_thread_id}",
    "members": ["user1_id", "user2_id"],
    "messages": [{
      "sender": "user1_id",
      "text": "Text of message",
      "timestamp": 1637734361
    }],
    "mostRecentTimestamp": 1637734361,
    "readBy": ["user1_id"]
  }
]}
```

### Get messages

Get all messages in a message thread

#### Example request body

```json
{
  "message_thread_id": "{message_thread_id}"
}
```

Property |  Type | Description
---|---|---
`message_thread_id` | String | ID of message thread for which requesting all messages of
```endpoint
GET /messages
```

#### Example response

```json
{
  "members": ["user1_id", "user2_id"],
  "messages": [{
    "sender": "user1_id",
    "text": "Text of message",
    "timestamp": 1637734361
  }],
  "mostRecentTimestamp": 1637734361,
  "readBy": ["user1_id"]
}
```

### Get chattable users

Get list of users that user is allowed to message

#### Example request body

```json
{
  "user_id": "{user_id}",
  "can_message": "peerGroup"
}
```

Property |  Type | Description
---|---|---
`user_id` | String | ID of user
`can_message` | String | Name of group that patient is allowed to message, which can be one of the following options: "peerGroup", "careTeam", "peerGroupCareTeam", or "everyone"
```endpoint
GET /messages
```

#### Example response

```json
{
  "members": ["user1_id", "user2_id"]
}
```

## Scheduling

Set and view appointment schedules. Enable patients to schedule and pay for appointments.

### Set appointment schedule

Set available appointment schedule, length of appointments, and cost of appointments for a provider

#### Example request body

```json
{
  "start_time": 1637734361,
  "end_time": 1638934456,
  "appointment_length": 30,
  "paid_appointment": true,
  "cost": 7000,
  "create_video_call_link": true
}
```

Property |  Type | Description
---|---|---
`start_time` | Number | Start time of provider's availability, written in terms of Unix epoch time
`end_time` | Number | End time of provider's availability, written in terms of Unix epoch time
`appointment_length` | Number | Length in minutes of each appointment
`paid_appointment` | Bool | Whether or not the appointment is paid
`cost` | Number | (optional) Cost of appointment in cents
`create_video_call_link` | Bool | Whether or not to create a video call link for this appointment
```endpoint
POST /schedule/{provider_id}
```

#### Example response

```json
{
  "appointment_schedule_id": "appointment_schedule_id"
}
```

### Schedule appointment

Schedule an appointment. If 'paid_appointment' has been set to true for this '{schedule_id}', prompts patient to pay for the appointment before booking. If 'create_video_call_link' has been set to true for this '{schedule_id}', creates video call link for the appointment. 

#### Example request body

```json
{
  "appointment_schedule_id": "{appointment_schedule_id}",
  "start_time": 1637734361,
  "end_time": 1637745679,
}
```

Property |  Type | Description
---|---|---
`appointment_schedule_id` | String | ID of schedule booking this appointment in
`start_time` | Number | Start time of provider's availability, written in terms of Unix epoch time
`end_time` | Number | End time of provider's availability, written in terms of Unix epoch time
```endpoint
POST /schedule/appointment/{patient_id}
```

#### Example response

```json
{
  "appointment_schedule_id": "appointment_schedule_id"
}
```

### Get available appointments

Get all available appointments. Optionally filter to only see available appointments for certain providers. 

#### Example request body

```json
{
  "start_time": 1637734361,
  "end_time": 1638945679,
  "providers": ["{provider1_id}", "{provider2_id}"],
  
}
```

Property |  Type | Description
---|---|---
`start_time` | Number | Start time of time frame from which you want all available appointments, written in terms of Unix epoch time.
`end_time` | Number | End time of time frame from which you want all available appointments, written in terms of Unix epoch time.
`providers` | String array | (optional) List of providers you want to see available appointments for. By default, see available appointments for all providers. 
```endpoint
GET /schedule/available
```

#### Example response

```json
{ 
  [
    {
      "appointment_schedule_id": "{appointment_schedule_id}",
      "provider_id": "{provider_id}",
      "start_time": 1637734361,
      "end_time": 1638945679,
      "appointment_length": 30
    }
  ]
}
```

### Get booked appointments

Get all booked appointments (both past and upcoming) with URLs to starts and join the video call. Optionally filter to only see booked appointments for certain providers and/or certain patients.

#### Example request body

```json
{
  "start_time": 1637734361,
  "end_time": 1638945679,
  "providers": ["{provider1_id}", "{provider2_id}"],
  "patients": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`start_time` | Number | Start time of time frame from which you want all booked appointments, written in terms of Unix epoch time.
`end_time` | Number | End time of time frame from which you want all booked appointments, written in terms of Unix epoch time.
`providers` | String array | (optional) List of providers you want to see booked appointments for. By default, see booked appointments for all providers. 
`patients` | String array | (optional) List of patients you want to see booked appointments for. By default, see booked appointments for all providers. 
```endpoint
GET /schedule/booked
```

#### Example response

```json
{ 
  [
    {
      "appointment": "{appointment_id}",
      "provider_id": "{provider_id}",
      "patient_id": "{patient_id}",
      "start_time": 1637734361,
      "end_time": 1638945679,
      "appointment_length": 30,
      "appointment_join_url": "https://us02web.zoom.us/s/83531877803?zak=58963y896",
      "appointment_start_url": "https://us02web.zoom.us/s/83531877803?zak=7592u52fk"
    }
  ]
}
```

### Get appointment details

Get appointment details for a particular appointment id. 

No parameters.

```endpoint
GET /schedule/{appointment_id}
```

#### Example response

```json
{ 
  "provider_id": "{provider_id}",
  "patient_id": "{patient_id}",
  "start_time": 1637734361,
  "end_time": 1638945679,
  "appointment_length": 30,
  "appointment_join_url": "https://us02web.zoom.us/s/83531877803?zak=5396839"
}
```