const initState = {
    items: [
        { id: '0614', title: 'HP 15s-fq1000TU i3-1005G1 4GB 256GB', price: 22900, imgUrl: require("../assets/laptop2.jpg").default },
        { id: '8934', title: 'T-shirtA', price: 1229, imgUrl: require("../assets/t-shirt.jpg").default },
        { id: '7038', title: 'Mulucky 5 String Banjo - Remo Drumhead Openback Beginner Kit With Gig Bag Tuner Picks Strings Strap - B1101', price: 900, imgUrl: require("../assets/banjo.jpg").default },
        { id: '8426', title: 'Best Choice Products 38in Beginner All Wood Acoustic Guitar', price: 300, imgUrl: require("../assets/guitar.jpg").default },
        { id: '5483', title: 'Astronomical Telescope Zoom 90X HD Outdoor Monocular Space Telescope with Tripod', price: 1120, imgUrl: require("../assets/telescope.jpg").default },
        { id: '5836', title: 'NVIDIA GeForce RTX 3080', price: 7720, imgUrl: require("../assets/gpu.jpeg").default },
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