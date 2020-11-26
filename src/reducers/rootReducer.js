const initState = {
    items: [
        { id: 0, title: 'LaptopX', price: 22900, imgUrl: require("../assets/laptop.jpeg").default },
        { id: 1, title: 'T-shirtA', price: 1229, imgUrl: require("../assets/t-shirt.jpg").default },
        { id: 2, title: 'BanjoA', price: 900, imgUrl: require("../assets/banjo.jpg").default },
        { id: 3, title: 'Guitar', price: 300, imgUrl: require("../assets/guitar.jpg").default },
        { id: 4, title: 'Gaming PC', price: 1120, imgUrl: require("../assets/pc.jpg").default },
        { id: 5, title: 'Milk', price: 20, imgUrl: require("../assets/milk.jpeg").default },
    ],
    users: [
        { id: 0, name: 'raincatxdev' },
    ]
}

export default function itemReducer(state = initState, action) {
    console.log(action)
    return state
}