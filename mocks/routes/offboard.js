module.exports = [
  {
    id: 'offboard',
    url: '/api/offboard',
    method: 'POST',
    variants: [
      {
        id: 'success',
        type: 'middleware',
        options: {
          middleware: (req, res, next, core) => {
            setTimeout(() => {
              res.status(200);
              res.send({});
            }, 5000)
          },
        },
      }
    ]
  },
];
