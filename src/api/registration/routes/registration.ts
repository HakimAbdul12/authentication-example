export default {
  routes: [
    {
     method: 'POST',
     path: '/registration',
     handler: 'registration.registration',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
