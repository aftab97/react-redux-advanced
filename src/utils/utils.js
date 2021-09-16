export const peoplesColumns = [
  { field: "personId", headerName: "Person ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "isAuthorised",
    headerName: "Authorised",
    width: 150,
    editable: true,
  },

  {
    field: "isValid",
    headerName: "Valid",
    width: 150,
    editable: true,
  },
  {
    field: "isPalindrome",
    headerName: "Palindrome",
    width: 150,
    editable: true,
  },
  {
    field: "totalSports",
    headerName: "Favourite Sports",
    width: 500,
    editable: true,
  },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];
