## Vitals

Set vitals for patients to track. Enable patients to track vitals and view logged data.

### Create vital

Create a health vital (e.g. blood sugar, exercise) for the patient to track. Optionally, specify which patients should be tracking these vitals. 

#### Example request body

```json
{
  "name": "Exercise",
  "parameters": [{
    "parameter": "Duration",
    "parameter_type": "Number",
    "placeholder": "60",
    "units": "min",
    "displayOnChart": true
  },
  {
    "parameter": "Type",
    "parameter_type": "Short Answer",
    "placeholder": "Run"
  }],
  "assign_to_everyone": true,
  "assign_to": ["patient1_id", "patient_2_id"]
}
```

Property |  Type | Description
---|---|---
`name` | String | Name of vital
`parameter` | String | Name of vital parameter
`parameter_type` | String | Type of vital parameter. Options are: "Short Answer", "Number", "Paragraph", "Multiple Choice", "Multiselect", "Date", and "Picture"
`placeholder` | String | (only for "Short Answer", "Number", and "Paragraph" parameters) Placeholder to display for this parameters
`units` | String | (only for "Number" parameter) Units for parameter
`displayOnChart` | Bool | (only for "Number" parameter) Whether or not to display this parameter on the chart for this vital
`assign_to_everyone` | Bool | Whether or not all patients should be assigned to track this vital.
`assign_to` | String array | If `assign_to_everyone` is false, specify which patients should be tracking these vital.
```endpoint
POST /vital
```

#### Example response

```json
{
  "id": "{vital_id}"
}
```

### Get vitals for patients to track

Get all vital that patients are supposed to track. Optionally, specifiy a specific patients of whom you want to see which vitals they are supposed to track.  

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}"],
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of patients of whom you want to see which vital they are supposed to track. By default, returns all trackable vitals. 
```endpoint
GET /vital
```

#### Example response

```json
{
  [
    {
      "id": "{vital_id}",
      "name": "Exercise",
      "parameters": [
      {
        "id": "{parameter_id}",
        "parameter": "Duration",
        "parameter_type": "Number",
        "placeholder": "60",
        "units": "min",
        "displayOnChart": true
      },
      {
        "id": "{parameter_id}",
        "parameter": "Type",
        "parameter_type": "Short Answer",
        "placeholder": "Run"
      }],
      "assigned_to_everyone": true,
      "assigned_to": ["patient1_id", "patient_2_id"]
    }
  ]
  
}
```

### Log vital

Log patient-reported data for a vital

#### Example request body

```json
{
  "vital_id": "{vital_id}",
  "patient_id": "{patient_id}",
  "responses": [
  {
    "id": "{parameter_id}", 
    "response": 60
  },
  {
    "id": "{parameter_id}", 
    "response": "Run"
  }]
}
```

Property |  Type | Description
---|---|---
`vital_id` | String | ID of vital 
`patient_id` | String | ID of patient
`id` | String | ID of parameter
`response` | Any | Patient's logged response to parameter
```endpoint
POST /vital/log
```

#### Example response

```json
{
  "id": "{data_point_id}"
}
```

### View raw logged vitals data

View raw logged vital data. Optionally, specify which patients logged raw logged data you want to see. By default, get logged data from all patients.  

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}"],
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of IDs of patients whose raw logged data you want to see. By default, get raw logged data from all patients.
```endpoint
GET /vital/raw
```

#### Example response

```json
{
  [
    {
      "patient_id": "{patient_id}",
      "vital_id": "{vital_id}",
      "parameter_id": "{parameter_id}",
      "vital": "Exercise",
      "parameter": "Duration",
      "response": 60,
      "units": "min",
      "timestamp": 1637734361,
      "displayOnChart": true
    }
  ]
}
```

### View average vitals data

View daily average value for each vital. Optionally, specify which patients you want average values for. By default, returns daily average values across all patients.

#### Example request body

```json
{
  "patient_ids": ["{patient1_id}"],
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of IDs of patients whose daily average logged data you want to see. By default, get daily average logged data from all patients.
```endpoint
GET /vital/aggregated
```

#### Example response

```json
{
  [
    {
      "vital_id": "{vital_id}",
      "parameter_id": "{parameter_id}",
      "units": "min",
      "responses": [{
        "label": "Mon",
        "value": 60
      },
      {
        "label": "Tue",
        "value": 45
      }
      ]
    }
  ]
}
```
