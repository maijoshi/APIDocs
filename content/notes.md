## Care Plans

Create, view, and complete care plan tasks. 

### Create care plan task 

### View care plan

### Complete care plan task 

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

## Notes

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