export default {
  routes: [
    {
     method: 'GET',
     path: '/registration',
     handler: 'registration.registration',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
