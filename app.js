/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Neesh";

const CARDS = [
  {
    name: "Notion",
    icon: "ri-git-repository-line",
    link: "https://www.notion.so/neesh-ilios/Ilios-f3744a799ff64c42be357226bf463922",
  },
  {
    name: "Discord",
    icon: "ri-discord-fill",
    link: "https://canary.discord.com/channels/@me",
  },
  {
    name: "GitHub",
    icon: "ri-github-fill",
    link: "https://github.com/Neesh774",
  },
  {
    name: "Whatsapp",
    icon: "ri-whatsapp-fill",
    link: "https://web.whatsapp.com/",
  },
  {
    name: "Gmail",
    icon: "ri-mail-fill",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    name: "Ilios Labs",
    icon: "ri-global-fill",
    link: "https://ilioslabs.dev",
  },
  {
    name: "Bubble",
    icon: "ri-bubble-chart-fill",
    link: "https://bubble.ilioslabs.dev/",
  },
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${currentHour%13}:${currentMinute}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]}, ${MONTHS[currentMonth]} ${currentNumber} ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("i");
    currentCardIcon.classList.add(card.icon);

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerTEXT = NAME;
printCards();
updateDate();
