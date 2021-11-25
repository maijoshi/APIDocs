## Surveys

Create, complete, and view results to surveys. 

### Create a survey

Create a survey with conditional branching and logic jumps. Optionally, specify which patients survey should be sent to. By default, survey is sent to all patients. 

#### Example request body

```json
{
  "name": "Intake Form",
  "questions": [
      {
          "title": "What medications are you currently taking?",
          "question_type": "Multiselect",
          "allow_other_option": true,
          "allow_custom_entry": true,
          "items": ["Metformin"],
          "tag": "medications",
          "logic": [
              {
                "if": {
                    "condition": "is",
                    "choice": "Metformin"
                },
                "then": {
                    "action": "show",
                    "show": "Metformin is a.."
                }
              }
          ]
      }
  ],
  "visible_to_everyone": false,
  "visible_to": ["{patient1_id}"]
}
```

Property |  Type | Description
---|---|---
`name` | String | Name of survey
`questions/title` | String | Title of survey question
`questions/question_type` | String | Type of survey question (options are "Short Answer", "Number", "Paragraph", "Multiple Choice", "Multiselect", "Date", and "Picture")
`questions/allow_other_option` | Bool | Only if 'Multiselect' or 'Multiple Choice' is selected, whether or not patient can select "Other" as a response
`questions/allow_customer_entry` | Bool | Only if 'allow_other_option' is selected, whether or not patient can write in custom response
`questions/items` | String array | Only if 'Multiselect' or 'Multiple Choice' is selected, response items that the patient can select from
`questions/tag` | String | Unique tag used to identify this survey question
`questions/logic/if/condition` | String | Only if 'Multiselect' or 'Multiple Choice' is selected, condition that needs to be met. Options are: 'is' or 'is not'
`questions/logic/if/choice` | String | Only if 'Multiselect' or 'Multiple Choice' is selected, condition that needs to be selected/not selected (depending on whether 'is' or 'is not' was selected for the 'condition')
`questions/logic/then/action` | String | Only if 'Multiselect' or 'Multiple Choice' is selected, action that will be taken. Options are: 'show' and 'jump'
`questions/logic/then/show` | String | Only if 'Multiselect' or 'Multiple Choice' is selected, text that will be shown if condition is met
`questions/logic/then/jump_to` | String | Only if 'Multiselect' or 'Multiple Choice' is selected, tag of survey question that needs to be jumped to if condition is met
```endpoint
POST /surveys
```

#### Example response

```json
{
  "id": "{survey_id}"
}
```

### Get surveys

Get all surveys and view which patients have completed them. Optionally, filter surveys based on patients. 

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of patient IDs for whom you want to retrieve all surveys for.  By default, all surveys for all patients are returned. 
```endpoint
GET /surveys
```

#### Example response

```json
{
  [
      {
        "id": "{survey_id}",
        "name": "Intake Form",
        "questions": [
            {
                "id": "{survey_question_id}",
                "title": "What medications are you currently taking?",
                "question_type": "Multiselect",
                "allow_other_option": true,
                "allow_custom_entry": true,
                "items": ["Metformin"],
                "tag": "medications",
                "logic": [
                    {
                        "if": {
                            "condition": "is",
                            "choice": "Metformin"
                        },
                        "then": {
                            "action": "show",
                            "show": "Metformin is a.."
                        }
                    }
                ]
            }
        ],
        "visible_to_everyone": false,
        "visible_to": ["{patient1_id}"],
        "completed_by": ["{patient1_id}"]
        }
  ]
}
```

### Log survey results

Log patient's responses to survey

#### Example request body

```json
{
  "patient_id": "{patient_id}",
  "questions": [
      {
          "id": "{survey_question_id}",
          "response": ["Metformin"]
      }
  ],
}
```

Property |  Type | Description
---|---|---
`patient_id` | String | ID of patient completing the survey
`questions/id` | String | Survey question ID
`questions/response` | String | Patient's response to the survey question
```endpoint
POST /survey/{survey_id}
```

#### Example response

```json
{
  "id": "{survey_response_id}"
}
```

### View survey results

View survey results. Optionally, filter responses to only see selected patients' responses. 

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of patient IDs for whom you want to retrieve all survey results for.  By default, all survey results for all patients are returned. 
```endpoint
GET /surveys/results
```

#### Example response

```json
{
  [
      {
        "id": "{survey_id}",
        "name": "Intake Form",
        "patient_id": "{patient_id}",
        "completed_at": 1637734361,
        "questions": [
            {
                "id": "{survey_question_id}",
                "title": "What medications are you currently taking?",
                "response": ["Metformin"]
            }
        ],
    }
  ]
}
```