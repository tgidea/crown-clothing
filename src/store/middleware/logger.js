
//The store is just to facilitate movement and passing of actions through these reducers.
//but in order for this to be useful , we also need to pass logger
//Logger:  allow us to see the how the state look like before action is dispatched.
// i.e how state will look like after action performed.

// whenever you dispatch a action before that action hits the reducers, it hits the 
// middleware first.
// const middleware = [logger,middleware2, middleware3];

// Khud ka logger: 

//nested curry funciton
export const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());
    
    next(action);
    // to print next state , we first call 'next' to run all reducer and update state 
    console.log('next State:', store.getState());
    
}
