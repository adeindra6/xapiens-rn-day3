class Cart
{
	constructor(cart = {})
	{
		this.cart = [];
	}

	addItem(cart)
	{
		this.cart[cart.item_id] = { item_id: cart.item_id, price: cart.price, quantity: cart.quantity || 1 };
	}

	removeItem(cart)
	{
		this.cart[cart.item_id] = { item_id: cart.item_id, price: 0, quantity: 0 };
	}

	addDiscount(discount)
	{
		let dc = parseFloat(discount) / 100.0;
		let price = this.totalPrice();
		price *= dc;
		console.log("Total Price (With Discount " + discount + ") : " + price);
	}

	totalItems()
	{
		let items = 0;
		for(let i=1; i<this.cart.length; i++)
		{
			if(this.cart[i].quantity > 0)
			{
				items += 1;
			}
		}
		console.log("Total Items : " + items);
	}

	totalQuantity()
	{
		let quantity = 0;
		for(let i=1; i<this.cart.length; i++)
		{
			quantity += this.cart[i].quantity;
		}
		console.log("Total Quantity : " + quantity);
	}

	totalPrice()
	{
		let price = 0;
		for(let i=1; i<this.cart.length; i++)
		{
			price += this.cart[i].price * this.cart[i].quantity;
		}
		return price;
	}

	showAll()
	{
		console.log("Show All Cart : ");
		for(let i=1; i<this.cart.length; i++)
		{
			console.log(this.cart[i]);
		}
	}
}

const cart = new Cart();

cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
cart.addItem({ item_id: 2, price: 10000})
cart.addItem({ item_id: 3, price: 5000, quantity: 2 })
cart.removeItem({ item_id: 2 });
cart.addItem({ item_id: 4, price: 400, quantity: 6 })
cart.addDiscount('50%');

cart.totalItems();
cart.totalQuantity();
cart.totalPrice();
cart.showAll();