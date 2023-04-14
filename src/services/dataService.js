
let catalog = [
    {
        "title": "Fries",
        "price": 4.50,
        "category": "Appetizers",
        "image": "",
        "_id": "1"
    },
    {
        "title": "Tots",
        "price": 4.50,
        "category": "Appetizers",
        "image": "",
        "_id": "2"
    },
    {
        "title": "Wings",
        "price": 6.50,
        "category": "Appetizers",
        "image": "",
        "_id": "3"
    },
    {
        "title": "House Salad",
        "price": 5.50,
        "category": "Appetizers",
        "image": "",
        "_id": "4"
    },
    {
        "title": "Hot Dog",
        "price": 6.00,
        "category": "Dogs",
        "image": "",
        "_id": "5"
    },
    {
        "title": "Cheese Dog",
        "price": 7.00,
        "category": "Dogs",
        "image": "",
        "_id": "6"
    },
    {
        "title": "Chili Cheese Dog",
        "price": 7.50,
        "category": "Dogs",
        "image": "",
        "_id": "7"
    },
    {
        "title": "T.J. Dog",
        "price": 6.00,
        "category": "Dogs",
        "image": "",
        "_id": "8"
    },
    {
        "title": "Cheeseburger",
        "price": 8.00,
        "category": "Burgers",
        "image": "",
        "_id": "9"
    },
    {
        "title": "Double Cheeseburger",
        "price": 10.50,
        "category": "Burgers",
        "image": "",
        "_id": "10"
    },
    {
        "title": "Spicy Chicken",
        "price": 8.50,
        "category": "Burgers",
        "image": "",
        "_id": "11"
    },
    {
        "title": "Bison Burger",
        "price": 9.00,
        "category": "Burgers",
        "image": "",
        "_id": "12"
    },
    {
        "title": "Fish & Chips",
        "price": 14.50,
        "category": "Entrees",
        "image": "",
        "_id": "13"
    },
    {
        "title": "Bangers & Mash",
        "price": 16.00,
        "category": "Entrees",
        "image": "",
        "_id": "14"
    },
    {
        "title": "Chicken Schnitzel",
        "price": 16.00,
        "category": "Entrees",
        "image": "",
        "_id": "15"
    },
    {
        "title": "Steak & Fries",
        "price": 18.00,
        "category": "Entrees",
        "image": "",
        "_id": "16"
    },

];

class DataService{

    getProducts(){
        return catalog;
    }

}
export default DataService;