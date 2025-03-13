const mockData = [
  {
    id: "vvv1323",
    name: "John Doe",
    department: "Engineering",
    status: "ACTIVE",
    email: "john.doe@example.com",
    equipment: [
      {
        id: "eqp1001",
        name: "MacBook Pro",
        type: "LAPTOP_MAC",
      },
      {
        id: "eqp1002",
        name: "iPhone 13",
        type: "PHONE",
      },
      {
        id: "eqp1003",
        name: "Logitech Mouse",
        type: "MOUSE",
      },
      {
        id: "eqp1004",
        name: "Dell 24\" Monitor",
        type: "MONITOR",
      },
      {
        id: "eqp1005",
        name: "USB-C Charger",
        type: "CHARGER",
      },
    ],
  },
  {
    id: "vvv1324",
    name: "Jane Smith",
    department: "Marketing",
    status: "ACTIVE",
    email: "jane.smith@example.com",
    equipment: [
      {
        id: "eqp1006",
        name: "Dell XPS",
        type: "LAPTOP_WINDOWS",
      },
      {
        id: "eqp1007",
        name: "Mechanical Keyboard",
        type: "KEYBOARD",
      },
      {
        id: "eqp1008",
        name: "Jabra Headset",
        type: "HEADSET",
      },
    ],
  },
  {
    id: "vvv1325",
    name: "Bob Johnson",
    department: "HR",
    status: "ACTIVE",
    email: "bob.johnson@example.com",
    equipment: [
      {
        id: "eqp1009",
        name: "MacBook Pro",
        type: "LAPTOP_MAC",
      },
      {
        id: "eqp1010",
        name: "iPhone 13",
        type: "PHONE",
      },
      {
        id: "eqp1011",
        name: "HP LaserJet",
        type: "PRINTER",
      },
      {
        id: "eqp1012",
        name: "USB-C Charger",
        type: "CHARGER",
      },
    ],
  },
  {
    id: "vvv1326",
    name: "Alice Green",
    department: "Engineering",
    status: "ACTIVE",
    email: "alice.green@example.com",
    equipment: [
      {
        id: "eqp1013",
        name: "Dell XPS",
        type: "LAPTOP_WINDOWS",
      },
      {
        id: "eqp1014",
        name: "Logitech Mouse",
        type: "MOUSE",
      },
      {
        id: "eqp1015",
        name: "Mechanical Keyboard",
        type: "KEYBOARD",
      },
      {
        id: "eqp1016",
        name: "Dell 24\" Monitor",
        type: "MONITOR",
      },
      {
        id: "eqp1017",
        name: "USB-C Charger",
        type: "CHARGER",
      },
    ],
  },
  {
    id: "vvv1327",
    name: "Michael Brown",
    department: "Finance",
    status: "OFFBOARDED",
    email: "michael.brown@example.com",
    equipment: [
      {
        id: "eqp1018",
        name: "MacBook Pro",
        type: "LAPTOP_MAC",
      },
      {
        id: "eqp1019",
        name: "iPhone 13",
        type: "PHONE",
      },
      {
        id: "eqp1020",
        name: "HP LaserJet",
        type: "PRINTER",
      },
    ],
  },
  {
    id: "vvv1328",
    name: "Emily White",
    department: "Engineering",
    status: "ACTIVE",
    email: "emily.white@example.com",
    equipment: [
      {
        id: "eqp1021",
        name: "Dell XPS",
        type: "LAPTOP_WINDOWS",
      },
      {
        id: "eqp1022",
        name: "Logitech Mouse",
        type: "MOUSE",
      },
      {
        id: "eqp1023",
        name: "Jabra Headset",
        type: "HEADSET",
      },
      {
        id: "eqp1024",
        name: "USB-C Charger",
        type: "CHARGER",
      },
    ],
  },
  {
    id: "vvv1329",
    name: "Jacob Davis",
    department: "Operations",
    status: "ACTIVE",
    email: "jacob.davis@example.com",
    equipment: [
      {
        id: "eqp1025",
        name: "MacBook Pro",
        type: "LAPTOP_MAC",
      },
      {
        id: "eqp1026",
        name: "iPhone 13",
        type: "PHONE",
      },
      {
        id: "eqp1027",
        name: "Mechanical Keyboard",
        type: "KEYBOARD",
      },
      {
        id: "eqp1028",
        name: "Dell 24\" Monitor",
        type: "MONITOR",
      },
      {
        id: "eqp1029",
        name: "USB-C Charger",
        type: "CHARGER",
      },
    ],
  },
  {
    id: "vvv1330",
    name: "Sarah Wilson",
    department: "Design",
    status: "OFFBOARDED",
    email: "sarah.wilson@example.com",
    equipment: [
      {
        id: "eqp1030",
        name: "Dell XPS",
        type: "LAPTOP_WINDOWS",
      },
      {
        id: "eqp1031",
        name: "Jabra Headset",
        type: "HEADSET",
      },
      {
        id: "eqp1032",
        name: "HP LaserJet",
        type: "PRINTER",
      },
    ],
  },
  {
    id: "vvv1331",
    name: "Christopher Lee",
    department: "Engineering",
    status: "ACTIVE",
    email: "christopher.lee@example.com",
    equipment: [
      {
        id: "eqp1033",
        name: "MacBook Pro",
        type: "LAPTOP_MAC",
      },
      {
        id: "eqp1034",
        name: "Logitech Mouse",
        type: "MOUSE",
      },
      {
        id: "eqp1035",
        name: "Mechanical Keyboard",
        type: "KEYBOARD",
      },
      {
        id: "eqp1036",
        name: "Dell 24\" Monitor",
        type: "MONITOR",
      },
    ],
  },
  {
    id: "vvv1332",
    name: "Samantha Miller",
    department: "Sales",
    status: "ACTIVE",
    email: "samantha.miller@example.com",
    equipment: [
      {
        id: "eqp1037",
        name: "Dell XPS",
        type: "LAPTOP_WINDOWS",
      },
      {
        id: "eqp1038",
        name: "iPhone 13",
        type: "PHONE",
      },
      {
        id: "eqp1039",
        name: "Jabra Headset",
        type: "HEADSET",
      },
      {
        id: "eqp1040",
        name: "HP LaserJet",
        type: "PRINTER",
      },
      {
        id: "eqp1041",
        name: "USB-C Charger",
        type: "CHARGER",
      },
    ],
  },
];

module.exports = [
  {
    id: 'get-employees',
    url: '/api/employees',
    method: 'GET',
    variants: [
      {
        id: 'all',
        type: 'middleware',
        options: {
          middleware: (req, res, next, core) => {
            core.logger.info('Request received!');
            core.logger.info('allUsers');
            res.status(200);
            res.send(mockData);
          },
        },
      }
    ]
  },
  {
    id: 'get-employees-by-id',
    url: '/api/employees/:id',
    method: 'GET',
    variants: [
      {
        id: 'all',
        type: 'middleware',
        options: {
          middleware: (req, res, next, core) => {
            core.logger.info('Request received!');
            core.logger.info(req.params.id);
            core.logger.info('allUsers');
            res.status(200)
            res.send(mockData.find(employee => employee.id === req.params.id));
          },
        },
      }
    ]
  }
];
