## Notifications

Set, cancel, and view one-time or recurring notifications for patients. 

### Create notification

Set one-time or recurring notifications. Optionally, list specific patients notification should go to. By default, all notification go to all patients. 

#### Example request body

```json
{
  "title": "Meds",
  "subtitle": "Time to take your medication!",
  "repeats": false,
  "year": 2021,
  "month": 12,
  "day": 23,
  "hour": 8,
  "minute": 0,
  "viewable_to_everyone": false,
  "viewable_to": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`title` | String | Title of notification
`subtitle` | String | Subtitle of notification
`repeats` | Bool | Whether or not the notification repeats
`repeat_cadence` | String | If repeats is true, how often the notification repeats (options are: "monthly", "weekly", and "daily")
`year` | Number | If notification is sent only once, which year it's sent in
`month` | Number | If notification is sent only once, which month it's sent in
`weekday` | Number | If notification is sent weekly, which weekday the notification is sent
`day` | Number | If notification is sent only once or repeats monthly, which day the notification is sent
`hour` | Number | Which hour the notification is sent
`minute` | Number | Which minute the notification is sent
`viewable_to_everyone` | Bool | Whether or not the notification is viewable to all patients
`viewable_to` | String array | If the notification is not viewable to all patients, which patients the notification is viewable to
```endpoint
POST /notifications
```

#### Example response

```json
{
  "id": "{notification_id}"
}
```

### Cancel notification

Cancel one-time or recurring notifications. Optionally, list specific patients notification should be cancelled for. By default, notification is cancelled for all patients. 

#### Example request body

```json
{
  "id": "{notification_id}",
  "patient_ids": ["{patient1_id}"]
}
```

Property |  Type | Description
---|---|---
`id` | String | Notification ID
`patient_ids` | String array | (optional) List of patient IDs for whom the notification is going to be cancelled for.  By default, notification is cancelled for all patients.  
```endpoint
POST /notifications/cancel
```

#### Example response

```json
{
  "id": "{notification_id}"
}
```

### Get active notifications

Get all active notification. Optionally, filter notifications based on patients. 

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of patient IDs for whom you want to retrieve all active notifications for.  By default, all active notifications for all patients are returned. 
```endpoint
GET /notifications/active
```

#### Example response

```json
{
  [
      {
        "title": "Meds",
        "subtitle": "Time to take your medication!",
        "created_at": 1637712345,
        "repeats": false,
        "year": 2021,
        "month": 12,
        "day": 23,
        "hour": 8,
        "minute": 0,
        "viewable_to_everyone": false,
        "viewable_to": ["{patient1_id}", "{patient2_id}"]
      }
  ]
}
```

### Get cancelled notifications

Get all cancelled notification. Optionally, filter notifications based on patients. 

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of patient IDs for whom you want to retrieve all cancelled notifications for.  By default, all cancelled notifications for all patients are returned. 
```endpoint
GET /notifications/cancelled
```

#### Example response

```json
{
  [
      {
        "title": "Meds",
        "subtitle": "Time to take your medication!",
        "created_at": 1637712345,
        "repeats": false,
        "year": 2021,
        "month": 12,
        "day": 23,
        "hour": 8,
        "minute": 0,
        "viewable_to_everyone": false,
        "viewable_to": ["{patient1_id}", "{patient2_id}"]
      }
  ]
}
```