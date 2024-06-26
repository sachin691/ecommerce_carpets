import React from "react";
const columns = [
  { name: "ORDER-ID", uid: "order_id" },
  { name: "CUSTOMER INFO", uid: "user_id" },
  { name: "DATE", uid: "date" },
  { name: "CONTACT", uid: "shipping_info" },
  { name: "AMOUNT", uid: "order_price" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    orderId: "202403261050263901200001",
    name: "Tony Reichert",
    date: "12/02/2023",
    amount: "2589",
    role: "9599792729",
    team: "Noida,Uttarpardesh",
    status: "confirmed",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    orderId: "202403261050263901200001",
    name: "Zoey Lang",
    date: "12/02/2023",
    amount: "2589",
    role: "9599792729",
    team: "Noida,Uttarpardesh",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    orderId: "202403261050263901200001",
    name: "Jane Fisher",
    date: "12/02/2023",
    amount: "2589",
    role: "9599792729",
    team: "Noida,Uttarpardesh",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    orderId: "202403261050263901200001",
    name: "William Howard",
    date: "12/02/2023",
    amount: "2589",
    role: "9599792729",
    team: "Noida,Uttarpardesh",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    orderId: "202403261050263901200001",
    name: "Kristen Copper",
    date: "12/02/2023",
    amount: "2589",
    role: "9599792729",
    team: "Noida,Uttarpardesh",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

export { columns, users };
