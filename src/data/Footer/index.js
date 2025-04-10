import {
  faAt,
  faBlog,
  faCookie,
  faEnvelope,
  faHomeUser,
  faLocationDot,
  faLock,
  faLuggageCart,
  faPhone,
  faTag,
  faTrademark,
  faTruckDroplet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Visa from "./../../assets/visa.jpg";
import Mastercard from "./../../assets/master.jpg";
import AmericanExpress from "./../../assets/americanExpress.jpg";
import Paypal from "./../../assets/paypal.jpg";

export const footer = [
  {
    title: "Contact information",
    element: [
      {
        icon: faPhone,
        text: "+123 456 789 000",
      },
      {
        icon: faEnvelope,
        text: "sales@gmail.com",
      },
      {
        icon: faEnvelope,
        text: "services@gmail.com",
      },
    ],
  },
  {
    title: "Quick Links",
    element: [
      {
        icon: faUser,
        text: "My Account",
      },
      {
        icon: faTruckDroplet,
        text: "Delivery Information",
      },
      {
        icon: faTrademark,
        text: "Track My Order",
      },
      {
        icon: faLocationDot,
        text: "Location",
      },
    ],
  },
  {
    title: "Useful Links",
    element: [
      {
        icon: faHomeUser,
        text: "About Company",
      },
      {
        icon: faLuggageCart,
        text: "Careers",
      },
      {
        icon: faTag,
        text: "Our Brands",
      },
      {
        icon: faAt,
        text: "Contact Us",
      },
    ],
  },
  {
    title: "Privacy Policy",
    element: [
      {
        icon: faCookie,
        text: "Cookies",
      },
      {
        icon: faBlog,
        text: "Blog",
      },
      {
        icon: faLock,
        text: "Terms & Conditions",
      },
    ],
  },
];
export const iconPayment = [Visa, Mastercard, AmericanExpress, Paypal];
export const iconSocial = [
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
];
