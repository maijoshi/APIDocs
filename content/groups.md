## Care Teams

Create, update, and view patient care teams. 

### Create care team

Create a care team for a patient

#### Example request body

```json
{
  "patient_id": "{patient_id}",
  "care_team": [
    {
        "id": "{provider1_id}",
        "role": "Coach"
    }, 
    {
        "id": "{provider2_id}",
        "role": "Endocronologist"
    }
  ]
}
```

Property |  Type | Description
---|---|---
`patient_id` | String | ID of patient creating a care team for
`id` | String | ID of care team member 
`role` | String | Role of care team member
```endpoint
POST /careTeam
```

#### Example response

```json
{
  "id": "{care_team_id}"
}
```

### Update care team

Update care team for a patient

#### Example request body

```json
{
  "id": "{care_team_id}",
  "care_team": [
    {
        "id": "{provider1_id}",
        "role": "Coach"
    }, 
    {
        "id": "{provider2_id}",
        "role": "Endocronologist"
    }
  ]
}
```

Property |  Type | Description
---|---|---
`id` | String | Care team ID
`care_team/id` | String | ID of care team member 
`care_team/role` | String | Role of care team member
```endpoint
PATCH /careTeam
```

#### Example response

```json
{
  "id": "{care_team_id}"
}
```

### View care teams

View all care teams. Optionally, filter list based on patient or members in the care team.

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}", "{patient2_id}"],
  "care_team_member_ids": ["{provider1_id}", "{provider2_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of IDs of patients for whom you want to see care teams for. By default, you see care teams for all patients. 
`care_team_member_ids` | String array | (optional) List of care team members for whom you want to see the care teams they are a part of. By default, you see care teams for with any care team members. 
```endpoint
GET /careTeam
```

#### Example response

```json
{
    [
        "id": "{care_team_id}",
        "care_team": [
        {
            "id": "{provider1_id}",
            "role": "Coach"
        }, 
        {
            "id": "{provider2_id}",
            "role": "Endocronologist"
        }
        ]
    ]
}
```

## Peer groups

Create, update, and view patient peer groups. 

### Create care team

Create a peer group

#### Example request body

```json
{
  "peer_group": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`peer_group` | String array | List of IDs of peer group members
```endpoint
POST /peerGroup
```

#### Example response

```json
{
  "id": "{peer_group_id}"
}
```

### Update peer group

Update a peer group

#### Example request body

```json
{
  "id": "{peer_group_id}",
  "peer_group": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`id` | String | Peer group ID
`peer_group` | String array | List of IDs of peer group members
```endpoint
PATCH /peerGroup
```

#### Example response

```json
{
  "id": "{peer_group_id}"
}
```

### View peer groups

View all peer groups. Optionally, filter list based on members of the peer group.

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}", "{patient2_id}"],
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of IDs of patients for whom you want to see peer groups for. By default, you see peer groups for all patients. 
```endpoint
GET /peerGroup
```

#### Example response

```json
{
    [
        "id": "{peer_group_id}",
        "peer_group": ["{patient1_id}", "{patient2_id}"]
    ]
}
```