const categories = [
    {
        id: 1,
        idCategory: '1',
        category: 'Burgers',
        image: require('../../images/icons/burger.png')
    },
    {
        id: 2,
        idCategory: '2',
        category: 'Pizza',
        image: require('../../images/pizza.png')
    },
    {
        id: 3,
        idCategory: '3',
        category: 'Snacks',
        image: require('../../images/snack.png')
    },
    {
        id: 4,
        idCategory: '4',
        category: 'Sushi',
        image: require('../../images/shushi.jpg')
    }
]

const foodData = [
    {
        category: 'Burgers',
        food: [
            {
                id: 1,
                name: "Burgers Story",
                description: "Mexican tortilla & tacos",
                price: 10.99,
                image: require('../../images/burgerstory.jpg'),
                location: {
                    latitude: 9.7799684,
                    longitude: 105.6189037
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13,
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            },
            {
                id: 2,
                name: "Burgers & CocaCola",
                description: "Chicken patty hamburger",
                price: 10.99,
                image: require('../../images/burgerandcoca.jpg'),
                location: {
                    latitude: 9.7799684,
                    longitude: 105.6189037
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            }
        ]
    },
    {
        category: 'Pizza',
        food: [
            {
                id: 1,
                name: "Pizza Storry",
                description: "Chicken patty Pizza",
                price: 10.99,
                image: require('../../images/Pizza/pizza1.jpg'),
                location: {
                    latitude: 9.8952218,
                    longitude: 105.0364203
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            },
            {
                id: 2,
                name: "Pizza",
                description: "Chicken patty Pizza",
                price: 10.99,
                image: require('../../images/Pizza/pizza2.jpg'),
                location: {
                    latitude: 9.8952218,
                    longitude: 105.0364203
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            },
        ]
    },
    {
        category: 'Snacks',
        food: [
            {
                id: 5,
                name: "Snack Story",
                description: "Chicken patty Snack",
                price: 10.99,
                image: require('../../images/Snacks/snack1.jpg'),
                location: {
                    latitude: 10.7968835,
                    longitude: 106.6487566
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            },
            {
                id: 6,
                name: "Snack",
                description: "Chicken patty Snack",
                price: 10.99,
                image: require('../../images/Snacks/snack2.jpg'),
                location: {
                    latitude: 10.7968835,
                    longitude: 106.6487566
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            },
        ]
    },
    {
        category: 'Sushi',
        food: [
            {
                id: 7,
                name: "Shushi story",
                description: "Chicken patty Shushi",
                price: 10.99,
                image: require('../../images/Shushi/shushi1.jpg'),
                location: {
                    latitude: 10.7813281,
                    longitude: 106.6746678
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            },
            {
                id: 8,
                name: "Shushi",
                description: "Chicken patty Shushi",
                price: 10.99,
                image: require('../../images/Shushi/shushi2.jpg'),
                location: {
                    latitude: 10.7813281,
                    longitude: 106.6746678
                },
                isFavourite: false,
                topping: [
                    {
                        idTopping: 1,
                        image: require('../../images/dishes/hamburger.png'),
                        nameTopping: 'Hamburger',
                        priceTopping: 11,
                        calories: 380.13
                    },
                    {
                        idTopping: 2,
                        image: require('../../images/dishes/hot_tacos.png'),
                        nameTopping: 'Hot Tacos',
                        priceTopping: 10.14,
                        calories: 210.13
                    },
                    {
                        idTopping: 3,
                        image: require('../../images/dishes/veg_biryani.png'),
                        nameTopping: 'Veg Biryani',
                        priceTopping: 9.75,
                        calories: 310.11
                    },
                    {
                        idTopping: 4,
                        image: require('../../images/dishes/wrap_sandwich.png'),
                        nameTopping: 'Wrap Sandwich',
                        priceTopping: 250.69,
                        calories: 110.11
                    }
                ]
            },
        ]
    },
]

const newFood = foodData.map((item) => {
    return {
        category: item.category,
        food: [...item.food.map((value) => {
            return {
                id: value.id,
                location: value.location,
                name: value.name,
                price: value.price,
                description: value.description,
                image: value.image,
                isFavourite: value.isFavourite,
                topping: [...value.topping.map((i, index) => {
                    return {
                        ...i,
                        quantity: 0,
                        currency: 0,
                        index: index
                    }
                })],
            }
        })],
    }
})

const favouriteFood = foodData.map((item) => {
    return {
        ...item.food
    }
})

export {
    categories,
    newFood,
    foodData,
    favouriteFood
}

// const hamburger = {
//     id: 1,
//     name: "Hamburger",
//     description: "Chicken patty hamburger",
//     categories: [1, 2],
//     price: 15.99,
//     calories: 78,
//     isFavourite: true,
//     image: require("../assets/dummyData/hamburger.png")
// }

// const hotTacos = {
//     id: 2,
//     name: "Hot Tacos",
//     description: "Mexican tortilla & tacos",
//     categories: [1, 3],
//     price: 10.99,
//     calories: 78,
//     isFavourite: false,
//     image: require("../assets/dummyData/hot_tacos.png")
// }

// const vegBiryani = {
//     id: 3,
//     name: "Veg Biryani",
//     description: "Indian Vegetable Biryani",
//     categories: [1, 2, 3],
//     price: 10.99,
//     calories: 78,
//     isFavourite: true,
//     image: require("../assets/dummyData/veg_biryani.png")
// }

// const wrapSandwich = {
//     id: 4,
//     name: "Wrap Sandwich",
//     description: "Grilled vegetables sandwich",
//     categories: [1, 2],
//     price: 10.99,
//     calories: 78,
//     isFavourite: true,
//     image: require("../assets/dummyData/wrap_sandwich.png")
// }

// const menu = [
//     {
//         id: 1,
//         name: "Featured",
//         list: [
//             hamburger, hotTacos, vegBiryani,
//         ]
//     },
//     {
//         id: 2,
//         name: "Nearby you",
//         list: [
//             hamburger, vegBiryani, wrapSandwich,
//         ]
//     },
//     {
//         id: 3,
//         name: "Popular",
//         list: [
//             hamburger, hotTacos, wrapSandwich,
//         ]
//     },
//     {
//         id: 4,
//         name: "Newest",
//         list: [
//             hamburger, hotTacos, vegBiryani,
//         ]
//     },
//     {
//         id: 5,
//         name: "Trending",
//         list: [
//             hamburger, vegBiryani, wrapSandwich,
//         ]
//     },
//     {
//         id: 6,
//         name: "Recommended",
//         list: [
//             hamburger, hotTacos, wrapSandwich,
//         ]
//     },

// ]


// export default {
//     myProfile,
//     categories,
//     menu,
// }

