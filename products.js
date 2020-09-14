var product_list = new Vue({
	el: '#js-grid-list',
	data: {
		layout: 'grid',
        products: [
        {
            title: "Viaje a Alaska",
            image: "https://images.squarespace-cdn.com/content/v1/54bee0c9e4b0441ce96c4681/1582680523953-O8LBM8T4ZEKADNM1HFMO/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pE4cef1KNtWo36k-CFnr6wOF2g5O-PFkVuvW_ba6dQUZZpzEt6WQHHQe4EHY-NJIA/1.png?format=2500w"
        },
        {
            title: "Viaje a Hawai",
            image: "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/destinations/hawaii/amazing-hawaii-beach-with-green-mountains.jpg?$750x667$"
        },
        {
            title: "Viaje a Europa",
            image: "https://www.dw.com/image/53617982_303.jpg"
        },
        {
            title: "Viaje a Singapur",
            image: "https://blog.efmdglobal.org/wp-content/uploads/2020/04/Singapore_blog-1024x528.jpg"
        }]
	}
});