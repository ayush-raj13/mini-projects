const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "images/item-1.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "images/item-2.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "images/item-3.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "images/item-4.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "images/item-5.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "images/item-6.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "images/item-7.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "images/item-8.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "images/item-9.jpeg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ea quia! Nulla facilis inventore eligendi placeat velit eveniet.`,
      },
  ];

  const menuContainer = document.querySelector(".menu-container");
  const btnContainer = document.querySelector(".btn-container");

  window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
    displayMenuButtons();
  });

  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        //   console.log(item)
        return `<div class="menu-card">
        <div class="card-img">
            <img src="${item.img}" alt="${item.title}" width="200px" height="150px">
        </div>
        <div class="card-info">
            <div class="card-title">
                <p class="item-name">${item.title}</p>
                <p class="item-price">${item.price}</p>
            </div>
            <div class="item-desc">
                <p> ${item.desc} </p>
            </div>
        </div>
    </div>`
      });
      displayMenu = displayMenu.join("");
    //   console.log(displayMenu);
      menuContainer.innerHTML = displayMenu;
  }

function displayMenuButtons(){
    const categories = menu.reduce(
        function(values, item){
            if (!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
    },
        ["all"]
    );
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" data-id=${category}>${category}</button>`
    }).join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    // console.log(filterBtns);

    filterBtns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            // console.log(e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                // console.log(menuItem.category);

                if(menuItem.category === category){
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if(category === "all"){
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(menuCategory);
            }
        });
    });
    
}