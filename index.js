var app = Vue.createApp({
    data() {
        return {
            search: '',
            priceRange: 0,
            sortDirection: 'DESC',
            category: '',
            rate: 0,

            Items: [{
                    title: 'PlayStation',
                    price: 40000,
                    qty: '5',
                    rating: 2,
                    category: 'Electronics'
                },
                {
                    title: 'Boat Speakers',
                    price: 30000,
                    qty: '7',
                    rating: 4.5,
                    category: 'Electronics'
                },
                {
                    title: 'Fit-Watch',
                    price: 8000,
                    qty: '7',
                    rating: 5,
                    category: 'Electronics'
                },
                {
                    title: 'Nintendo',
                    price: 4000,
                    qty: '3',
                    rating: 4.8,
                    category: 'Electronics'
                },
                {
                    title: 'Chair',
                    price: 13000,
                    qty: '5',
                    rating: 2.5,
                    category: 'Furniture'
                },
                {
                    title: 'Table',
                    price: 22000,
                    qty: '7',
                    rating: 3.7,
                    category: 'Furniture'
                },
                {
                    title: 'Small-Table',
                    price: 3000,
                    qty: '7',
                    rating: 5,
                    category: 'Furniture'
                },
                {
                    title: 'Stool',
                    price: 14000,
                    qty: '3',
                    rating: 4.8,
                    category: 'Furniture'
                },
                {
                    title: 'Blue-Jeans',
                    price: 7000,
                    qty: '5',
                    rating: 1.5,
                    category: 'Clothes'
                },
                {
                    title: 'white-Shirt',
                    price: 22000,
                    qty: '7',
                    rating: 2.3,
                    category: 'Clothes'
                },
                {
                    title: 'Trouser',
                    price: 16000,
                    qty: '7',
                    rating: 4.3,
                    category: 'Clothes'
                },
                {
                    title: 'TrekPants',
                    price: 9000,
                    qty: '3',
                    rating: 2.1,
                    category: 'Clothes'
                }
            ]
        }
    },
    computed: {
        // Logic For Filtering
        filterSearch() {
            return this.Items.filter((item) => {
                return item.title.match(this.search) && item.rating >= this.rate && item.price >= this.priceRange &&
                    item.category.match(this.category)
            })
        },

    },
    methods: {
        // Logic for Sorting
        SortRating() {
            this.Items.sort(function(a, b) {
                if (this.sortDirection == 'DESC') {
                    return a.rating < b.rating ? 1 : -1;
                }

                if (this.sortDirection == 'ASC') {
                    return a.rating > b.rating ? 1 : -1;
                }
            }.bind(this));
        },
        SortPrice() {
            this.Items.sort(function(a, b) {
                if (this.sortDirection == 'DESC') {
                    return a.price < b.price ? 1 : -1;
                }

                if (this.sortDirection == 'ASC') {
                    return a.price > b.price ? 1 : -1;
                }
            }.bind(this));
        },

    }
})
app.mount('#App')