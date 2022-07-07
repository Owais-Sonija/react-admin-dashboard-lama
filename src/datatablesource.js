export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// temporary data

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869__340.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
    status: "passive",
    email: "2snow@gmail.com",
    age: 25,
  },
  {
    id: 3,
    username: "John Doe",
    img: "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571__340.jpg",
    status: "pending",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Starc",
    img: "https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175__340.jpg",
    status: "active",
    email: "4snow@gmail.com",
    age: 32,
  },
  {
    id: 5,
    username: "Nelson Mandela",
    img: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565__340.jpg",
    status: "passive",
    email: "5snow@gmail.com",
    age: 64,
  },
  {
    id: 6,
    username: "Hakeem Sahab",
    img: "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235__340.jpg",
    status: "active",
    email: "6snow@gmail.com",
    age: 75,
  },
  {
    id: 7,
    username: "Selmon Bhai",
    img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg",
    status: "pending",
    email: "7snow@gmail.com",
    age: 27,
  },
  {
    id: 8,
    username: "Putin Roos",
    img: "https://cdn.pixabay.com/photo/2016/01/18/20/11/old-man-1147288__340.jpg",
    status: "pending",
    email: "8snow@gmail.com",
    age: 87,
  },
  {
    id: 9,
    username: "Goal Master",
    img: "https://cdn.pixabay.com/photo/2016/11/21/16/21/abs-1846250__340.jpg",
    status: "active",
    email: "9snow@gmail.com",
    age: 17,
  },
  {
    id: 10,
    username: "Shagird",
    img: "https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg",
    status: "passive",
    email: "19snow@gmail.com",
    age: 13,
  },
];
