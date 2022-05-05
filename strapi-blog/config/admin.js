module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d672f812016962122a4c31f6c923394'),
  },
});
