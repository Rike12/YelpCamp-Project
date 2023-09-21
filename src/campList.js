window.campgrounds = [
    {
      id: 1,
      name: "Mount Ulap",
      description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/MountUlap.jpg",
    },
    {
      id: 2,
      name: "Calaguas Island",
      description: "A paradise of islands that can rival the white sand beauty of Boracay.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg",
    },
    {
      id: 3,
      name: "Onay Beach",
      description: "This is one of the best beach camping sites, beautiful and pristine.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/OnayBeach.jpg",
    },
    {
      id: 4,
      name: "Seven Sisters Waterfall",
      description: "The seven sisters is the 39th tallest waterfall in Norway.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/SevenSistersWaterfall.jpg",
    },
    {
      id: 5,
      name: "Latik Riverside",
      description: "Philippines is one of the most dazzling countries in all of Asia.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/LatikRiverside.jpg",
    },
    {
      id: 6,
      name: "Buloy Springs",
      description: "This is one of the best beach camping sites, beautiful and pristine.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/BuloySprings.jpg",
    },
  ];
  
  console.log(campgrounds);
  


// Your search functionality code goes here...
// Assuming you have an HTML container to display campground cards
function displayCamps() {
  // Get the campground container element
  const campgroundContainer = document.getElementById('camp-container');
  
  // Initialize an empty string to accumulate campground cards
  let campCards = '';

  // Map through the campgrounds array and create HTML elements for each campground
  campgrounds.forEach((campground) => {
    campCards += `
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" class="campground">
        <div class="rounded-lg border border-black-600">
          <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
            <img class="rounded-t-lg w-full p-4" src="${campground.imageSrc}" alt="${campground.name}" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
              ${campground.name}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              ${campground.description}
            </p>
            <button class="inline-block w-full h-12 px-6 font-bold rounded-lg border border-black-600 text-black-600"
        onclick="goToDetailsPage(${campground.id})">
        View Campgrounds
      </button>
          </div>
        </div>
      </div>
    `;
  });

  // Set the innerHTML of the container with all accumulated campground cards
  campgroundContainer.innerHTML = campCards;
}

displayCamps();


// Function to navigate to indiv.html with the campgroundId as a query parameter
function goToDetailsPage(campgroundId) {
  window.location.href = `indiv.html?id=${campgroundId}`;
}

