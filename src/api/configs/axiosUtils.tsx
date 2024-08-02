type ApiObject = {
  [key: string]: (...args: any[]) => Promise<any>; // Define each API call as a function returning a Promise
};

type CancelApiObject = {
  [key: string]: {
    handleRequestCancellation: () => AbortController;
  };
};

export function defineCancelApiObject(apiObject: ApiObject): CancelApiObject {
  // An object that will contain a cancellation handler associated with each API property name in the apiObject
  const cancelApiObject: CancelApiObject = {};

  // Iterate over each API property name
  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    // Create an object to hold the current AbortController
    const cancellationControllerObject: { controller?: AbortController } = {};

    // Associate the request cancellation handler with the API property name
    cancelApiObject[apiPropertyName] = {
      handleRequestCancellation: () => {
        // If the controller already exists, cancel the request
        if (cancellationControllerObject.controller) {
          cancellationControllerObject.controller.abort();
        }

        // Generate a new controller with the AbortController factory
        cancellationControllerObject.controller = new AbortController();

        return cancellationControllerObject.controller;
      },
    };
  });

  return cancelApiObject;
}

