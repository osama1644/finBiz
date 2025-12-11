import type { AnalysisProps, CardData, Skelton } from "./types";
import img1 from "./images/5.jpg";
import img2 from "./images/129a85c6398ee468032dafaac68fdf5d7ae79f42.jpg";
export const CardsData: CardData[] = [
  {
    planContent: "cards.basic.plan",
    planColor: "var(--card1h2Color)",
    DescriptionContent: "cards.basic.description",
    DescriptionColor: "var(--cardPColor)",
    price: "$499",
    priceColor: "var(--cardPriceColor)",
    spanContent: "/month",
    spanColor: "var(--cardSpanColor)",
    iconColor: "var(--adventage)",
    adventages: ["cards.basic.adv1", "cards.basic.adv2", "cards.basic.adv3"],
    buttonContent: "cards.basic.button",
    buttonColor: "var(--card1btn-Color)",
    buttonBgColor: "var(--card1btnBg-Color)",
  },
  {
    planContent: "cards.pro.plan",
    planColor: "var(--card2h2Color)",
    DescriptionContent: "cards.pro.description",
    DescriptionColor: "var(--cardPColor)",
    price: "$499",
    priceColor: "var(--cardPriceColor)",
    spanContent: "/month",
    spanColor: "var(--cardSpanColor)",
    iconColor: "var(--adventage)",
    adventages: [
      "cards.pro.adv1",
      "cards.pro.adv2",
      "cards.pro.adv3",
      "cards.pro.adv4",
      "cards.pro.adv5",
      "cards.pro.adv6",
    ],
    buttonContent: "cards.pro.button",
    buttonColor: "var(--card2btn-Color)",
    buttonBgColor: "var(--card2btnBg-Color)",
  },
  {
    planContent: "cards.enterprise.plan",
    planColor: "var(--card3h2Color)",
    DescriptionContent: "cards.enterprise.description",
    DescriptionColor: "var(--cardPColor)",
    price: "$999",
    priceColor: "var(--cardPriceColor)",
    spanContent: "/month",
    spanColor: "var(--cardSpanColor)",
    iconColor: "var(--adventage)",
    adventages: [
      "cards.enterprise.adv1",
      "cards.enterprise.adv2",
      "cards.enterprise.adv3",
      "cards.enterprise.adv4",
      "cards.enterprise.adv5",
      "cards.enterprise.adv6",
      "cards.enterprise.adv7",
      "cards.enterprise.adv8",
    ],
    buttonContent: "cards.enterprise.button",
    buttonColor: "var(--card3btn-Color)",
    buttonBgColor: "var(--card3btnBg-Color)",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alfredo Lubin",
    text: '"“Your success drives ours — that’s why our offering goes beyond software"',
    stars: 5,
    img: img1,
  },
  {
    id: 2,
    name: "John Carter",
    text: 'We alighn our succeess with the success of our customers is why our offering',
    stars: 4,
    img: img2,
  },

  {
    id: 3,
    name: "Michael Smith",
    text: '"I really like the system at this management,i love recommending this software "',
    stars: 5,
    img: img1,
  },
];

export const AnalysisBoxes: AnalysisProps[] = [
  {
    id: 1,
    title: "dashboard.total_profit",
    price: "$350.240",
    increasedValue: "+18.23",
    sapnColor: "rgba(114, 167, 0, 0.54)",
    secondSpanColor: "rgba(114, 167, 0, 1)",
  },
  {
    id: 2,
    title: "dashboard.total_revenue",
    price: "$400.690",
    increasedValue: "+28.35",
    sapnColor: "rgba(238, 31, 31, 0.44)",
    secondSpanColor: "rgba(238, 31, 31, 1)",
  },
  {
    id: 3,
    title: "dashboard.product_sold",
    price: "$200.000",
    increasedValue: "+28.35",
    sapnColor: "rgba(0, 63, 219, 0.43)",
    secondSpanColor: "rgba(0, 63, 219, 1)",
  },
];
export const Skeltons: Skelton[] = [
  {
    id: 1,
    title: "dashboard.employee",
    skelton1BG: "#828282",
    skelton2BG: "#BDBDBD",
  },
  {
    id: 2,
    title: "dashboard.independent_contractor",
    skelton1BG: "#828282",
    skelton2BG: "#BDBDBD",
  },
  {
    id: 3,
    title: "dashboard.contracted_employee",
    skelton1BG: "#828282",
    skelton2BG: "#BDBDBD",
  },
  {
    id: 4,
    title: "dashboard.stakeholders",
    skelton1BG: "#828282",
    skelton2BG: "#BDBDBD",
  },
];
