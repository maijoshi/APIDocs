## Stripe Payment

Enable patients to pay using Stripe.

### Collect payment

Collect payment from patients. 

#### Example request body

```json
{
  "item": "Dermatology Appointment",
  "cost": 7000
}
```

Property |  Type | Description
---|---|---
`item` | String | Name of item patient is paying for
`cost` | Number | Cost of item in cents

```endpoint
POST /payment
```

#### Example response

```json
{
  "id": "{payment_id}"
}
```

### View invoices

View invoices of all payments. Optionally, filter invoices list by patients and/or providers.

#### Example request body

```json
{
  "patient_ids": ["patient1_id", "patient2_id"],
  "provider_ids": ["provider1_id", "provider2_id"]
}
```

Property |  Type | Description
---|---|---
`patient_ids` | String array | (optional) List of patients you want to view invoices for. By default, view invoices for all patients.
`provider_ids` | String array | (optional) List of providers you want to view invoices for. By default, view invoices for all providers.

```endpoint
GET /payment
```

#### Example response

```json
{ 
    [
        {
            "id": "{payment_id}",
            "timestamp": 1637734361, 
            "patient_id": "{patient_id}",
            "provider_id": "{provider_id}",
            "item_name": "Dermatology Appointment",
            "item_cost": 7000
        }
    ]
}
```