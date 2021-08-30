import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@eample.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "John Doe",
    email: "John@eample.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@eample.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
