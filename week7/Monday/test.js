const mainEl = document.querySelector("main");

// turn the background to reflect the var
mainEl.style.backgroundColor = "var(--main-bg)";

//create an h1 element
const h1 = document.createElement("H1");

// add text to the h1 html element
h1.innerHTML = "DOM Manipulation";

// appending it to the main
mainEl.appendChild(h1);

mainEl.classList.add("flex-ctr");
console.log(mainEl);

// Select the <nav id="top-menu"> element
const topMenuEl = document.querySelector("#top-menu");

// Set the height to 100%
topMenuEl.style.height = "100%";

// Set the background color using a CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a class of flex-around
topMenuEl.classList.add("flex-around");

const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Iterate over each link in the menuLinks array
menuLinks.forEach((link) => {
  // Create an <a> element
  const aElement = document.createElement("a");

  // Set the href attribute
  aElement.href = link.href;

  // Set the text content
  aElement.textContent = link.text;

  // Append the <a> element to the topMenuEl
  topMenuEl.appendChild(aElement);
});

// Select the <nav id="sub-menu"> element
const subMenuEl = document.querySelector("#sub-menu");

// Set the height to 100%
subMenuEl.style.height = "100%";

// Set the background color using a CSS custom property
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add a class of flex-around
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

// Set the top property to 0
subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link click behavior
  console.log(event.target.tagName);
  if (event.target.tagName !== "A") return; // Return if the clicked element isn't an <a>

  const linkText = event.target.textContent.toLowerCase(); // Get the text and convert to lower case
  const linkObject = menuLinks.find((link) => link.text === linkText); // Find the corresponding link object

  // Toggle the 'active' class and manage submenu visibility
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    subMenuEl.style.top = "0"; // Hide submenu
  } else {
    document
      .querySelectorAll("#top-menu a")
      .forEach((a) => a.classList.remove("active"));
    event.target.classList.add("active");
    if (linkObject.subLinks) {
      subMenuEl.style.top = "100%"; // Show submenu
      buildSubmenu(linkObject.subLinks); // Build and display the submenu
    } else {
      subMenuEl.style.top = "0"; // Hide submenu
    }
  }

  console.log("Clicked link text:", event.target.textContent); // Log the text of the clicked <a>
});

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = ""; // Clear existing submenu content

  subLinks.forEach((link) => {
    const aElement = document.createElement("a"); // Create a new <a> element
    aElement.href = link.href; // Set the href attribute
    aElement.textContent = link.text; // Set the text content
    subMenuEl.appendChild(aElement); // Append the <a> element to subMenuEl
  });
}

subMenuEl.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior

  // Return if the clicked element is not an <a> element
  if (event.target.tagName !== "A") return;

  // Log the content of the clicked <a> to verify the handler is working
  console.log("Submenu link clicked:", event.target.textContent);

  // Hide the submenu
  subMenuEl.style.top = "0";

  // Remove the active class from all top menu links
  document
    .querySelectorAll("#top-menu a")
    .forEach((a) => a.classList.remove("active"));

  // Update the main content area
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
