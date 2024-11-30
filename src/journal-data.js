import { v4 as uuid } from "uuid"

const journalData = [
  {
    id: uuid(),
    title: "Learning React",
    content:
      "What I learned today is that React takes a lot of time and concentration! I'm excited to keep learning.",
    show: false,
  },
  {
    id: uuid(),
    title: "journal 2",
    content: "Entry Title: Getting the Basics Down\nThe concept I learned the most this week was the TCP/IP four-layer model. The video that we\nwatched on this made it very clear. The application layer is where the apps and websites that\nwe see on our clients are. Send the transport player where the information is packaged into\nsmaller pieces and then transported to the IP layer. In the IP layer, it is given an IP address and\nsent to that place. This is delivered using the network interface. Then this process goes in the\nopposite direction which puts it all back together. Understanding this concept is going to help me\ngoing forward because it gives me an idea of a general overview of what we are going to be\nstudying and doing. As far as the code itself goes I am probably learning the most in the class,\nbut that is only because I probably know the least in the class. One thing I learned after going\nover it again is that the Curly braces are an important part of coding with JavaScript.\nIt allows you to embed expressions, enabling more possibilities. As I learn more about\nJavaScript, I will be able to use these concepts I am learning to help me in the future",
    show: true,
  },
  {
    id: uuid(),
    title: "journal 3",
content: "This week, one of the things we talked about is how to handle events in web development. I was able to learn about them on a basic level. Basically, event handlers let you make your webpage react to user actions, like clicks or mouseovers. I learned two main ways to do this: directly in HTML and using JavaScript.First, you can add event handlers right in your HTML. For example, you can use the onmouseover attribute on a button to run a function when someone hovers over it.In this case, when you hover over the button, it triggers the alertMe function, which shows an alert saying 'Stop hovering!' It’s super easy for smaller tasks. To set an event handler using JavaScript, I learned that you have to define a function that performs an action, like showing an alert. Then, you select the HTML button element using JavaScript. Finally, you assign the function to an event, such as onmouseover, so that when the event occurs, the function is executed.",
    show: true,
  },
  {
    id: uuid(),
    title: "journal 4",
content: "Entry Title: Creating a Simple Server with Node.jsThis week, I learned how to create a basic HTTP server using Node.js. The process was straightforward and involved four main steps:1.	Import the createServer function from Node’s built-in http module to handle requests and responses.2.	Set the port variable to use an environment-specified port or default to 3001:3.	Create the server object by calling createServer. This handles incoming HTTP requests, responding with hello world for each request:4.	Invoke the listen method to detect incoming http requests, passing the port number and a callback function to log a confirmation message.This is a simple task but for a beginner this is a really cool thing to have been able to do.",
      show: true,
  },
  {
    id: uuid(),
    title: "journal 5",
  content: "Middleware in expressThis week, I picked up on middleware in Express, and it was pretty interesting. I learned how you can use the app.use() method to set up custom middleware, and how the order of things really matters. Middleware has to be mounted before any routes that depend on it, which I didn't realize at first. I also ran into an issue with the next() function — if you forget to include it, the request just hangs and the server can time out.the myLogger middleware logs each request, then moves on to the next step.Right here is mounting it so that the other routes can depend on it.It was cool to see how middleware can make things like logging or security checks easier to handle. This is something simple but necessary to learn."
  },
  {
    id: uuid(),
    title: "journal 6",
  content:"Action and Target attributesThis week, I learned about the action and target attributes in HTML forms and how they control form submission behavior. The action attribute defines where the form data should be sent once it’s submitted, which can be a specific URL or path. Meanwhile, the target attribute determines where the response will be displayed after submission. For instance, using _blank will open the result in a new tab, whereas _self will display it in the same window.One interesting aspect was understanding how these attributes interact with the form's method, such as POST, which sends data securely to the server. I also learned that enctype=multipart/form-dat allows forms to handle file uploads. Here’s an example of the form code I worked with:This is the example in The notes from this Week. "
  },
  {
    id: uuid(),
    title: "journal 7",
  content: "This week, I learned about dynamic route setup using React Router, which allows segments of the URL to act as dynamic placeholders. This feature enables the app to split these dynamic segments and pass them to APIs. The key is to use a colon (:) before a keyword in the URL (e.g., /books/:bookId), which designates that part of the URL as dynamic and capable of changing based on user input or data.There is an example I found with the following code:In this setup, the /books/:bookId route allows us to dynamically pass different bookId values, so that when a user visits a specific book’s page, the BookDetails component is rendered with data corresponding to that particular bookId. Initially, I struggled to understand how to properly capture and use these dynamic URL segments. Once I saw how React Router automatically parses the :bookId value and makes it available to the component, it made more sense. And I just have to remember that I have to use a semi-colon. "
  },
  {
    id: uuid(),
    title: "journal 8",
  content: "This week, I am going to talk about React's useEffect and useState hooks. What stood out to me was how these two hooks work together to manage both state and side effects within functional components. The useState hook allows you to track and update a value while useEffect monitors changes to that state and performs actions in response to them.In this code that we went over in class, I learned that by placing count inside the array of useEffect, the effect will only run when count changes, making the code more efficient. This was interesting because I realized how important dependency arrays are to avoid unnecessary re-renders or side effects. One challenge I faced was understanding when and how to use a cleanup function in useEffect."
  },
  {
    id: uuid(),
    title: "journal 9",
  content: "i delelted this file"
  },  
  {
    id: uuid(),
    title: "journal 10",
  content: "This week, I learned the Context API in React to manage state across many components, which is more useful and easier for data flow. The Data Context allows for a centralized state accessible from various components, which I found useful when creating a User Dashboard setup. By wrapping the main component in a Context Provider, It shows that it could pass user data to any child component without cumbersome prop drilling.\ Here is the app.jsx used: I learned that the Context Provider not only manages the global state but also updates it, making it easy to share user-related data across UserProfile and UserEmail. For instance, instead of manually passing user info, the example wrapped the components in UserProvider. This simplifies the code."
  },
  {
    id: uuid(),
    title: "journal 11",
  content: "This week, I learned about the leave no trace idea in React when working with use Effect(). Anytime you add something like an event listener or a timer in a component, it’s important to clean it up, otherwise, these processes stick around and can slow things down or even cause bugs. And it just makes it messier and harder to follow.This is an example code from the powerpoints that did the following.What I learned from the lecture is the event listener is here to update windowWidth whenever the window’s resized. But the key part here is the cleanup function because it removes the listener when the component unmounts, which keeps things tidy and efficient."
  },
  {
    id: uuid(),
    title: "journal 12",
  content: "This week, I looked into the Outlet hook in React Router, and I started to understand how useful it is for nested routes. The Outlet  tag acts like a placeholder where child or some branch route components dynamically render, depending on the current URL. It’s a simple and useful way to keep layouts like headers static while swapping out the main content.The react and handlebars concepts are comparable in this way also. The parent route in reactIs equivalent to the layout in handlebars, and child route to View. I think the most important thing I learned this week is the UseParams in react. The useParams hook in React Router lets the user access parts of the URL. It returns an object where each key is the parameter name (like id), and the value is whatever was in the URL. This will be important for me in the upcoming projects and so I need to learn how to use it."
  }
]

export default journalData
