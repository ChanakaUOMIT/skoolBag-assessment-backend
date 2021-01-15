/**
 * Payload Response
 * @param message Message
 * @param Payload Response Data Payload
 */
export const PayloadResponse = (message, payload = {}) => {
    return {
        payload,
        message: message,
        success: true,
    };
};