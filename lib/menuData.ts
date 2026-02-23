// export const menuData = [
//   {
//     title: "Registrations & Licenses",
//     children: [
//       {
//         title: "Business Registrations",
//         children: [
//           { title: "Limited Liability Partnership (LLP)", href: "/llp" },
//           { title: "One Person Company (OPC)", href: "/opc" },
//           { title: "Private Limited Company", href: "/private-ltd" },
//         ],
//       },
//       {
//         title: "Licenses & Certification",
//         children: [
//           { title: "MSME Registration", href: "/msme" },
//           { title: "ISO Registration", href: "/iso" },
//           { title: "FSSAI Registration", href: "/fssai" },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Trademark & IP",
//     children: [
//       {
//         title: "Trademark",
//         children: [
//           { title: "Trademark Registration", href: "/tm-reg" },
//           { title: "Trademark Renewal", href: "/tm-renewal" },
//         ],
//       },
//       {
//         title: "Patent",
//         children: [
//           { title: "Patent Registration", href: "/patent" },
//         ],
//       },
//     ],
//   },
// ];

const menuData = [
  {
    id: "reg",
    title: "Registrations & Licenses",
    items: [
      "Private Limited Company",
      "LLP Registration",
      "MSME Registration",
      "GST Registration",
    ],
  },
  {
    id: "tm",
    title: "Trademark & IP",
    items: [
      "Trademark Registration",
      "Trademark Renewal",
      "Copyright Registration",
    ],
  },
  {
    id: "tax",
    title: "Tax & Compliance",
    items: [
      "Income Tax Filing",
      "GST Filing",
      "TDS Return Filing",
    ],
  },
];

export default menuData;