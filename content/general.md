## User Data

Pull user data. 

### Get user name

Get user's first and last name.

#### Example request body

```json
{
  "id": "{user_id}"
}
```

Property |  Type | Description
---|---|---
`id` | String | User's ID
```endpoint
GET /user/name
```

#### Example response

```json
{
  "first_name": "Sally",
  "last_name": "Chen"
}
```

### Get user profile picture

Get user's profile picture.

#### Example request body

```json
{
  "id": "{user_id}"
}
```

Property |  Type | Description
---|---|---
`id` | String | User's ID
```endpoint
GET /user/profilePicture
```

#### Example response

```json
{
  "image_url": "gs://cloudstorage.com/89gsgs989",
}
```

### Get data

Get all data. Optionally, filtered returned data by user or by type of data (e.g. demographics, notes, etc.).

```json
{
  "patient_ids": ["{patient1_id}", "{patient2_id}"],
  "types": ["prescriptions", "demographics"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) Filter returned data by user. By default, all data associated with any user is returned.
`types` | String array | (optional) Filter returned data by type. By default, all data associated with any type is returned. Options are: 'demographics', 'messages', 'schedules', 'payments', 'health_records', 'care_plans', 'notes', 'surveys', 'care_teams', 'peer_groups', 'courses', 'resources', 'notifications', and 'prescriptions'.


