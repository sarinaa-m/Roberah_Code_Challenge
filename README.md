# Welcome to Your React Coding Challenge! ⭐

## The Challenge at a Glance 📖

Are you ready to showcase your React skills? We have an exciting challenge for you! You will interact with an API, create a user-friendly interface, implement search functionality and pagination, and, optionally, write tests. Don't hesitate to bring third-party tools to the table - there's no need to reinvent the wheel!

## Your Objective 🎯

Your task is to make sure you build an engaging and intuitive web application. To fetch product data, your application will interact with the `https://dummyjson.com/products` API endpoint. However, we're looking for selectivity here. You're to display only each product's `title`, `thumbnail`, `price`, and `discounted_price`.

Here's a fun twist: The `discounted_price` isn't served on a platter. You'll have to do a bit of arithmetic using the `price` and `discountPercentage` properties from the API response to calculate it.

Above all, remember we value creativity and user-centric design. Our main goal is to offer our users a seamless and enjoyable browsing experience. Let's create something exceptional that stands out!

## Detailed Instructions 📝

1. **Fetch and Display Products:** Connect with the `https://dummyjson.com/products` API endpoint to fetch data. Design an appealing UI to display these products. Ensure each card includes: `title`, `thumbnail`, `price`, and `discounted_price` (which should be calculated using the `price` and `discountPercentage`).

2. **Add to Cart Functionality:** Equip each product card with a button that allows users to add the product to a shopping cart. Once an item is added, the 'add' button could be disabled to prevent duplication (handling multiple additions of the same item is a plus!).

3. **Loading State:** Don't forget to implement a loading state during API calls. Providing visual feedback during data retrieval significantly enhances the user experience.

4. **Shopping Cart Icon:** Incorporate a shopping cart icon on your page. When clicked, a dropdown should reveal all items in the cart, each accompanied by an image, title, and a 'remove' button.

5. **Product Search Feature:** Include an input field for users to search for products. To implement this functionality, use the `https://dummyjson.com/products/search?q=<search_term>` API endpoint.

6. **Pagination:** Implement a simple pagination feature to enable users to navigate the products. You can choose the number of products per page, but we suggest displaying 10 for an optimal user experience. The complete set of products can be larger than three pages, but we suggest limiting it to three pages to provide a focused browsing experience. Achieve pagination by using the `https://dummyjson.com/products?limit=<number_of_products>` API endpoint, replacing `<number_of_products>` with the count of products you wish to display per page.

7. **Write Tests (Optional but Encouraged):** Are you up for going the extra mile? We'd love to see tests for your components using Vitest.

## Wireframe 🖍️

We have prepared a wireframe for the web application to help you visualize the desired layout and components. You can access the wireframe through this link: [Web Application Wireframe](./public/product_page.png)

The wireframe visually represents the expected user interface and component arrangement. It can serve as a reference as you build your application. Feel free to use it as a starting point or inspiration, but feel free. Feel free to add your creativity and adjust to meet the requirements and create an outstanding user experience.

## Resources 📚

1. [Products API Documentation](https://dummyjson.com/docs/products)
2. [React Documentation](https://react.dev/)
3. [Vite Configuration Guide](https://vitejs.dev/config/)
4. [Vitest Documentation](https://vitest.dev/guide/)

Let your imagination soar, and good luck! We're eager to see your creative solutions!
