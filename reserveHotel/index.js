exports.handler = (event, context, callback) => {
    var reservationStatus = "OK";
    var hotel = "193f7706-9093-449f-95e0-7f720b98e7f1";
    if (event.Input.hotelName != "TULIP INN") {
        reservationStatus = "NOK";
        hotel = "edc6cef1-1fd9-4064-aa56-1529d7b5d1ca";
    }
    const hotelReservationResponse = {
        id: context.awsRequestId,
        createdDate: new Date(),
        lastModifiedDate: new Date(),
        hotelId: hotel,
        tripId: event.travelName,
        status: reservationStatus
    };
    callback(null, hotelReservationResponse);
};
