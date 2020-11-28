const initState = {
    items: [
        { id: '0614', title: 'LaptopX', price: 22900, imgUrl: require("../assets/laptop.jpeg").default },
        { id: '8934', title: 'T-shirtA', price: 1229, imgUrl: require("../assets/t-shirt.jpg").default },
        { id: '7038', title: 'BanjoA', price: 900, imgUrl: require("../assets/banjo.jpg").default },
        { id: '8426', title: 'Guitar', price: 300, imgUrl: require("../assets/guitar.jpg").default },
        { id: '5483', title: 'Gaming PC', price: 1120, imgUrl: require("../assets/pc.jpg").default },
        { id: '5836', title: 'Milk from Bulgaria', price: 20, imgUrl: require("../assets/milk.jpeg").default },
    ],
    users: [
        { id: 0, name: 'raincatxdev' },
    ],
    inCart: [],
}

export default function itemReducer(state = initState, action) {
    console.log(action)
    if(action.type === 'ADD_ITEM_TOCART') {
        return {
            ...state,
            inCart: [...state.inCart, action.payload],
        }
    }
    return state;
    
}