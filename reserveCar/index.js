exports.handler = (event, context, callback) => {
    var reservationStatus = "OK";
    var car = "9c9a85ca-4a78-4b4f-88a8-9f0690caf667";
    if (event.Input.carName != "Fiat") {
        reservationStatus = "NOK";
        car = "233a93d3-45a3-4710-ae14-c1e209b97d4a";
    }
    const carReservationResponse = {
        id: context.awsRequestId,
        createdDate: new Date(),
        lastModifiedDate: new Date(),
        carId: car,
        tripId: event.travelName,
        status: reservationStatus
    };
    callback(null, carReservationResponse);
};
