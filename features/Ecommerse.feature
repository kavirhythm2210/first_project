Feature: Ecommerse validations

Scenario: Placing Order

Given a login into Ecoomerse application with credentials "kavibabyj@gmail.com" and "Kavibabyj@12"
When Add "zara coat 3" to cart
Then Verify "zara coat 3" added in the cart
When Enter valid details and place the Order
Then Verify Order present in Order History
    Given a login into Ecoomerse application with credentials "hello@gmail.com" and "babyj@12"

