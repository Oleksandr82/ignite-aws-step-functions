exports.handler = (event, context, callback) => {
    var reservationStatus = "OK";
    var flight = "193f7706-9093-449f-95e0-7f720b98e7f1";
    if (event.Input.flightCode != "KL1009") {
        reservationStatus = "NOK";
        flight = "be915b30-7476-461e-8148-2f35f05b1a95";
    }
    const flightReservationResponse = {
        id: context.awsRequestId,
        createdDate: new Date(),
        lastModifiedDate: new Date(),
        flightId: flight,
        tripId: event.travelName,
        status: reservationStatus
    };
    callback(null, flightReservationResponse);
};
