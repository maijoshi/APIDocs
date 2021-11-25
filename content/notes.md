## Care Plans

Create, view, and complete care plan tasks. 

### Create care plan task 

Create care plan task for patient.

#### Example request body

```json
{
  "task": "Schedule an appointment with the endocronologist",
  "details": "Blood sugar levels are looking a bit higher than normal. Let's get an appointment scheduled to proactively debug the problem.",
  "patient_id": "{patient_id}",
  "created_by": "{user_id}",
  "assigned_to": "{user_id}",
  "visible_to": ["{user1_id}", "{user2_id}"],
  "due_date": 1637735467
}
```

Property |  Type | Description
---|---|---
`task` | String | Name of care plan task
`details` | String | Details of task
`patient_id` | String | ID of patient care plan task is for
`created_by` | String | ID of creator of care plan task
`assigned_to` | String | ID of who task is assigned to 
`visible_to` | String | List of user IDs who can see this task
`due_date` | Number | Due date for task, written in Unix epoch time
```endpoint
POST /carePlan
```

#### Example response

```json
{
  "id": "{care_plan_task_id}"
}
```

### View care plan

View all care plan tasks. Optionally, filter by which patient task is for and who task is visible to. By default, returns all care plan tasks. 

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}", "{patient2_id}"],
  "visible_to_ids": ["{user1_id}", "{user2_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of IDs of patients for whom you want to see care plan tasks for. By default, you see care plan tasks for all patients. 
`visible_to_ids` | String array | (optional) List of IDs of users for whom the returned  care plan tasks are visible to. By default, you see care plan tasks for everyone, no matter who those tasks are visible to.
```endpoint
GET /carePlan
```

#### Example response

```json
{
    [
        {
            "id": "{care_plan_task_id}",
            "task": "Schedule an appointment with the endocronologist",
            "details": "Blood sugar levels are looking a bit higher than normal. Let's get an appointment scheduled to proactively debug the problem.",
            "patient_id": "{patient_id}",
            "created_by": "{user_id}",
            "created_at": 1637712345,
            "assigned_to": "{user_id}",
            "visible_to": ["{user1_id}", "{user2_id}"],
            "due_date": 1637735467,
            "completed": true,
            "completed_on": 1637735765
        }
    ]
}
```

### Complete care plan task 

Mark a care plan task as completed.

#### Example request body

```json
{
  "id": "{care_plan_task_id}",
}
```

Property |  Type | Description
---|---|---
`id` | String | ID of care plan task you want to mark as complete

```endpoint
POST /carePlan/complete
```

#### Example response

```json
{
  "completed_on": 1637735765
}
```

## Notes

Create and view notes. 

### Create note

Create care plan task for patient.

#### Example request body

```json
{
  "note": "Patient's blood sugar levels have been dropping.",
  "patient_id": "{patient_id}",
  "created_by": "{user_id}",
  "visible_to": ["{user1_id}", "{user2_id}"],
}
```

Property |  Type | Description
---|---|---
`note` | String | Text of note
`patient_id` | String | ID of note is for
`created_by` | String | ID of writer of note
`visible_to` | String | List of user IDs who can see this note
```endpoint
POST /note
```

#### Example response

```json
{
  "id": "{note_id}"
}
```

### View notes

View all notes. Optionally, filter by which patient note is for and who note is visible to. By default, returns all notes. 

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}", "{patient2_id}"],
  "visible_to_ids": ["{user1_id}", "{user2_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of IDs of patients for whom you want to see notes for. By default, you see notes for all patients. 
`visible_to_ids` | String array | (optional) List of IDs of users for whom the returned  notes are visible to. By default, you see notes for everyone, no matter who those tasks are visible to.
```endpoint
GET /note
```

#### Example response

```json
{
    [
        {
            "id": "{note_id}",
            "note": "Patient's blood sugar levels have been dropping.",
            "patient_id": "{patient_id}",
            "created_by": "{user_id}",
            "created_at": 1637712345,
            "visible_to": ["{user1_id}", "{user2_id}"]
        }
    ]
}
```