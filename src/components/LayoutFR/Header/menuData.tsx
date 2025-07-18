import { Menu } from "@/types/menu"

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "A Propos",
    path: "/apropos",
    newTab: false,
  },
  {
    id: 3,
    title: "Notre Expertise",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Audit",
        path: "/notreexpertise/audit",
        newTab: false,
      },
      {
        id: 42,
        title: "Intégration",
        path: "/notreexpertise/integration",
        newTab: false,
      },
      {
        id: 43,
        title: "Formation",
        path: "/notreexpertise/formations",
        newTab: false,
      },
    ],
  },
  {
    id: 44,
    title: "Espace Entreprise",
    path: "/espace-entreprise",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "E-Commerce",
  //   path: "https://store.datalysconsulting.com/",
  //   newTab: true,
  // },
  {
    id: 4,
    title: "E-Commerce",
    path: "/boutique",
    newTab: false,
  },
  {
    id: 5,
    title: "Événements",
    path: "/evenements",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
]
export default menuData
