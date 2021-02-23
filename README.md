# Ignite AWS Step Function Demo

## Intro

The repository contains code of a simple state machine and related stubs of lambda functions to support a presentation about State machines. The code is to be used as a Hello World application for a 5 min introduction into serverless world.

A State machine orchestrates the process of booking a trip and uses the concept of Sagas with compensating transactions (to be explained in details in the presentation).

## Instructions

Follow a generic guidance [Creating a Step Functions State Machine That Uses Lambda](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html) to create lamda functions and the state machine:
1. Create Lambda functions (use code from corresponding index.js files).
2. Create a State Machine (use content of the travel-agency-state-machine.json descriptor and modify 'FunctionName' to refer to a correct arn of created lambda functions).

Notes:
* Ensure Lambda Functions and Step Function are in the same region.
* Ensure the State machine role has permissions to execute Lambda Functions (attach proper policies).

## Examples

An example of a positive request:

``` json
{
    "travelName": "First travel",
    "flightCode": "KL1009",
    "hotelName": "TULIP INN",
    "carName": "Fiat"
}
```

An example of a negative request (should be cancelled on booking a car):

``` json
{
    "travelName": "First travel",
    "flightCode": "KL1009",
    "hotelName": "TULIP INN",
    "carName": "Audi"
}
```