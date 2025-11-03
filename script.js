        // Product data
        const products = [
            {
                id: 1,
                name: "NEON BLADE Gaming Laptop",
                price: 2499,
                category: "Electronics",
                icon: "fa-laptop"
            },
            {
                id: 2,
                name: "THORAX Mechanical Keyboard",
                price: 179,
                category: "Gaming",
                icon: "fa-keyboard"
            },
            {
                id: 3,
                name: "VOID PRO Wireless Headset",
                price: 129,
                category: "Gaming",
                icon: "fa-headphones"
            },
            {
                id: 4,
                name: "OMEGA Gaming Chair",
                price: 399,
                category: "Gaming",
                icon: "fa-chair"
            },
            {
                id: 5,
                name: "CYBERDECK Ultra Monitor",
                price: 599,
                category: "Electronics",
                icon: "fa-desktop"
            },
            {
                id: 6,
                name: "PHANTOM Pro Controller",
                price: 89,
                category: "Gaming",
                icon: "fa-gamepad"
            }
        ];

        // DOM Elements
        const productsContainer = document.getElementById('products-container');
        const cartCount = document.querySelector('.cart-count');
        let cartItems = 0;

        // Render products
        function renderProducts() {
            productsContainer.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <i class="fas ${product.icon}"></i>
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
                `;
                productsContainer.appendChild(productCard);
            });
            
            // Add event listeners to buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }

        // Add to cart function
        function addToCart(e) {
            cartItems++;
            cartCount.textContent = cartItems;
            
            // Animation effect
            const button = e.target;
            button.textContent = "ADDED!";
            button.style.backgroundColor = "#4CAF50";
            
            setTimeout(() => {
                button.textContent = "ADD TO CART";
                button.style.backgroundColor = "";
            }, 1500);
        }

        // Initialize
        renderProducts();

        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter form');
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! Prepare for brutal deals.`);
            this.reset();
        });