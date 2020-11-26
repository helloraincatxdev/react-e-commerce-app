import Laptop from '../assets/laptop.jpeg';

const initState = {
    items: [
        { id: 0, title: 'LaptopX', price: 22900, imgUrl: require("../assets/banjo.jpg") },
        // { id: 1, title: 'T-shirtA', price: 1229 },
        // { id: 2, title: 'BanjoA', price: 900 },
        // { id: 3, title: 'Guitar', price: 300 },
        // { id: 4, title: 'Gaming PC', price: 1120 },
        // { id: 5, title: 'Milk', price: 20 },
    ],
    users: [
        { id: 0, name: 'raincatxdev' },
    ]
}

export default function itemReducer(state = initState, action) {
    console.log(action)
    return state
}