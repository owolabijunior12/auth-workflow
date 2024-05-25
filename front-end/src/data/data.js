import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Users', image: iconsImgs.user },
    { id: 3, title: 'Drone', image: iconsImgs.plane },
    { id: 4, title: 'Companys', image: iconsImgs.wallet },
    { id: 5, title: 'Admins', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'payment', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];
export const  DemoDrones  = [

];

export const transactions = [
    {
        id: 11, 
        name: " Drone 23122200023",      
        date: "23/12/2024",
        amount: 22000
    },
    {
        id: 12, 
        name: "Drone 23072000023",       
        date: "23/07/2024",
        amount: 20000
    },
    {
        id: 13, 
        name: "Drone 23300000823",       
        date: "23/08/2024",
        amount: 30000
    },
    {
        id: 14, 
        name: "Drone 23300000823",       
        date: "23/08/2024",
        amount: 30000
    },
    {
        id: 15, 
        name: "Drone 23300000823",       
        date: "23/08/2024",
        amount: 30000
    },
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 90,
        value2: 30
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: 30
    },
    {
        id: 17,
        month: "Apr",
        value1:null,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: null,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Modules",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "frames",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "wires",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "DataBase Payment",
        type: "Automated",
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type:"Automated",
        amount: 100
    }
];

export const payment = [
    {
        id: 24,
        title: "Amala Joint",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Korede Spag",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "Best Shawama",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/2024",
        amount_left: 40000
    }
]