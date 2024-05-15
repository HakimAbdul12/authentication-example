
// export default ({ env }) => ({
//   // Other plugin configurations...
//   email: {
//     config: {
//       provider: 'smtp',
//       providerOptions: {
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: env('GMAIL_USERNAME'),
//           pass: env('GMAIL_PASSWORD'),
//         },
//         // Additional SMTP settings if required
//         tls: {
//           rejectUnauthorized: false,
//         },
//       },
//       settings: {
//         defaultFrom: 'abdulhakimaben@gmail.com',
//         defaultReplyTo: 'abdulhakimaben@gmail.com',
//         testAddress: 'abdulhakimaben@gmail.com',
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'abdulhakimaben@gmail.com',
          pass: 'dunoxrzupafoxlek',
        },
      },
      settings: {
        defaultFrom: 'abdulhakimaben@gmail.com',
        defaultReplyTo: 'abdulhakimaben@gmail.com',
      },
    },
  },
});
