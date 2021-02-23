exports.handler = (event, context, callback) => {

    const cancellationStatus = {
        id: event.Input.id,
        status: "CANCELLED"
    };
    callback(null, cancellationStatus);
};