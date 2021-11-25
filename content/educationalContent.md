## Courses

Create and view courses. View analytics on course completion rates. 

### Create course

Create a course. Optionally, specify which patients can view the course. By default, everyone can view all courses. 

#### Example request body

```json
{
  "course_name": "Nutrition 101",
  "course_weeks": [
    {
        "name": "Week 1",
        "course_sections": [
            {
                "name": "Introduction to Nutrition",
                "course_lectures": [
                    {
                        "name": "Foods to Eat",
                        "type": "Video",
                        "url": "www.youtube.com/foodToEat"
                    }
                ]
            }
        ]
    }
  ],
  "viewable_to_everyone": false,
  "viewable_to": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`course_name` | String | Course name
`course_weeks/name` | String | Course week name
`course_weeks/course_sections/name` | String | Course section name
`course_weeks/course_sections/course_lectures/name` | String | Course lecture name
`course_weeks/course_sections/course_lectures/type` | String | Course lecture type options are "Article", "Video", and "Quiz")
`course_weeks/course_sections/course_lectures/url` | String | Course lecture url
`viewable_to_everyone` | Bool | Whether or not the course is viewable to all patients
`viewable_to` | String array | (optional) If the course is not viewable to all patients, which patients the course is viewable to
```endpoint
POST /course
```

#### Example response

```json
{
  "id": "{course_id}"
}
```

### View courses

View all courses. Optionally, filter courses by which are visible to specified patients.

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) Filter list of courses to only those visible to this list specified patient IDs. By default, all courses visible at any patient are returned.
```endpoint
GET /course
```

#### Example response

```json
{
    [
        "course_id": "{course_id}",
        "course_name": "Nutrition 101",
        "course_weeks": [
        {
            "id": "{course_week_id}",
            "name": "Week 1",
            "course_sections": [
                {
                    "id": "{course_section_id}",
                    "name": "Introduction to Nutrition",
                    "course_lectures": [
                        {
                            "id": "{course_lecture_id}",
                            "name": "Foods to Eat",
                            "type": "Video",
                            "url": "www.youtube.com/foodToEat",
                            "viewed_by": ["{patient1_id}", "{patient2_id}"],
                        }
                    ]
                }
            ]
        }
        ],
        "viewable_to_everyone": false,
        "viewable_to": ["{patient1_id}", "{patient2_id}"]
    ]
}
```

### View course

View a specific course.

No parameters.

```endpoint
GET /course/{course_id}
```

#### Example response

```json
{
  "course_id": "{course_id}",
  "course_name": "Nutrition 101",
  "course_weeks": [
    {
        "id": "{course_week_id}",
        "name": "Week 1",
        "course_sections": [
            {
                "id": "{course_section_id}",
                "name": "Introduction to Nutrition",
                "course_lectures": [
                    {
                        "id": "{course_lecture_id}",
                        "name": "Foods to Eat",
                        "type": "Video",
                        "url": "www.youtube.com/foodToEat",
                        "readBy": ["{patient1_id}", "{patient2_id}"]
                    }
                ]
            }
        ]
    }
  ],
  "viewable_to_everyone": false,
  "viewable_to": ["{patient1_id}", "{patient2_id}"]
}
```

## Resources

Create and view resources. View analytics on resource read rates. 

### Create resource

Create a resource. Optionally, specify which patients can view the resource. By default, everyone can view all resources. 

#### Example request body

```json
{
  "name": "Nutrition 101",
  "type": "Video",
  "url": "www.youtube.com/foodToEat",
  "viewable_to_everyone": false,
  "viewable_to": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`name` | String | Resource name
`type` | String | Resource type (options are "Article", "Video", and "Quiz")
`url` | String | Resource url
`viewable_to_everyone` | Bool | Whether or not the resource is viewable to all patients
`viewable_to` | String array | (optional) If the resource is not viewable to all patients, which patients the resource is viewable to
```endpoint
POST /resource
```

#### Example response

```json
{
  "id": "{resource_id}"
}
```

### View resources

View all resources. Optionally, filter resources by which are visible to specified patients.

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}", "{patient2_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) Filter list of resources to only those visible to this list specified patient IDs. By default, all resources visible at any patient are returned.
```endpoint
GET /resource
```

#### Example response

```json
{
    [
        {
            "id": "{resource_id}",
            "name": "Nutrition 101",
            "type": "Video",
            "url": "www.youtube.com/foodToEat",
            "viewed_by": ["{patient1_id}", "{patient2_id}"],
            "viewable_to_everyone": false,
            "viewable_to": ["{patient1_id}", "{patient2_id}"]
        }
    ]
}
```

### View resource

View a specific resource.

No parameters.

```endpoint
GET /resource/{resource_id}
```

#### Example response

```json
{
    "name": "Nutrition 101",
    "type": "Video",
    "url": "www.youtube.com/foodToEat",
    "viewed_by": ["{patient1_id}", "{patient2_id}"],
    "viewable_to_everyone": false,
    "viewable_to": ["{patient1_id}", "{patient2_id}"]
}
```