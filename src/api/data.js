export const pages = [
  {
    id: "1",
    title: "Accordion",
    type: "accordion",
    items: [
      {
        id: 1,
        question: "Question 1",
        body: "Answer 1",
      },
      {
        id: 1,
        question: "Question 2",
        body: "Answer 2 ",
      },
      {
        id: 1,
        question: "Question 3",
        body: "Answer 3",
      },
      {
        id: 1,
        question: "Question 4",
        body: "Answer 4",
      },
    ],
  },
  {
    id: "2",
    title: "Contact",
    type: "contact",
    fields: [
      {
        name: "name",
        label: "Name",
      },
      {
        name: "email",
        label: "Email",
      },
      {
        name: "address",
        label: "Address",
      },
      {
        name: "message",
        label: "Message",
        multiline: true,
        rows: 4,
      },
    ],
  },
  {
    id: "3",
    title: "Simple",
    type: "simple",
    html: "<p>This is some HTML content live right now at channel 5.</p>",
  },
  {
    id: "4",
    title: "External Url",
    type: "external",
    externalUrl: "https://example.com",
  },
];
