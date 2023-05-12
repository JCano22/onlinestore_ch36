import axios from 'axios';

let catalog = [
    {
        "title": "Fries",
        "price": 4.50,
        "category": "Appetizers",
        "image": "../images/fries.png",
        "_id": "1"
    },
    {
        "title": "Tots",
        "price": 4.50,
        "category": "Appetizers",
        "image": "../images/tots.png",
        "_id": "2"
    },
    {
        "title": "Wings",
        "price": 6.50,
        "category": "Appetizers",
        "image": "../images/wings.png",
        "_id": "3"
    },
    {
        "title": "House Salad",
        "price": 5.50,
        "category": "Appetizers",
        "image": "../images/salad.png",
        "_id": "4"
    },
    {
        "title": "Hot Dog",
        "price": 6.00,
        "category": "Dogs",
        "image": "../images/hot_dog.png",
        "_id": "5"
    },
    {
        "title": "Cheese Dog",
        "price": 7.00,
        "category": "Dogs",
        "image": "../images/cheese_dog.png",
        "_id": "6"
    },
    {
        "title": "Chili Cheese Dog",
        "price": 7.50,
        "category": "Dogs",
        "image": "../images/chili_dog.png",
        "_id": "7"
    },
    {
        "title": "T.J. Dog",
        "price": 6.00,
        "category": "Dogs",
        "image": "../images/tj_dog.png",
        "_id": "8"
    },
    {
        "title": "Cheeseburger",
        "price": 8.00,
        "category": "Burgers",
        "image": "../images/cheeseburger.png",
        "_id": "9"
    },
    {
        "title": "Double Cheeseburger",
        "price": 10.50,
        "category": "Burgers",
        "image": "../images/double_cheese.png",
        "_id": "10"
    },
    {
        "title": "Spicy Chicken",
        "price": 8.50,
        "category": "Burgers",
        "image": "../images/chix_burger.png",
        "_id": "11"
    },
    {
        "title": "Bison Burger",
        "price": 9.00,
        "category": "Burgers",
        "image": "../images/bufaloburger.png",
        "_id": "12"
    },
    {
        "title": "Fish & Chips",
        "price": 14.50,
        "category": "Entrees",
        "image": "../images/fish.png",
        "_id": "13"
    },
    {
        "title": "Bangers & Mash",
        "price": 16.00,
        "category": "Entrees",
        "image": "../images/bangers.png",
        "_id": "14"
    },
    {
        "title": "Chicken Schnitzel",
        "price": 16.00,
        "category": "Entrees",
        "image": "../images/schnitzel.png",
        "_id": "15"
    },
    {
        "title": "Steak & Fries",
        "price": 18.00,
        "category": "Entrees",
        "image": "../images/steak.png",
        "_id": "16"
    },

];

class DataService{
    serverURL = "http://127.0.0.1:5000";

    async getProducts(){
        //use this return to run FE without BE
        // return catalog;

        //call server to retrieve products
        let results = await axios.get(this.serverURL + "/api/catalog");

        //data is an axio keyword
        return results.data;
    }

    async getCategories(){
        let results = await axios.get(this.serverURL + "/api/categories")
        return results.data;
    }

    async getCoupons(){
        let results = await axios.get(this.serverURL + "/api/coupons")
        return results.data;
    }

    async saveProduct(prod){
        let results = await axios.post(this.serverURL + "/api/catalog", prod);
        return results.data;
    }

    async saveCoupon(coup){
        let results = await axios.post(this.serverURL + "/api/coupons", coup)
        return results.data;
    }

    async deleteCoupon(coup){
        let results = await axios.delete(this.serverURL + "/api/coupons/" + coup);
        return results.data;

    }

    async deleteProducts(title){
        let results = await axios.delete(this.serverURL + "/api/catalog/" + title);
        return results.data
    }

    async deleteProductById(id){
        let results = await axios.delete(this.serverURL + "/api/catalog/byid/" + id);
        return results.data
    }

}
export default DataService;