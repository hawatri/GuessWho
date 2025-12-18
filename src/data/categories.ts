export interface CategoryData {
  name: string;
  color: string;
  items: string[];
}

export const categories: CategoryData[] = [
  {
    name: "Animals",
    color: "bg-green-500",
    items: [
      "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Monkey", "Gorilla", "Chimpanzee",
      "Kangaroo", "Koala", "Panda", "Polar Bear", "Brown Bear", "Wolf", "Fox", "Deer",
      "Rabbit", "Squirrel", "Hedgehog", "Raccoon", "Skunk", "Otter", "Seal", "Whale",
      "Dolphin", "Shark", "Octopus", "Jellyfish", "Penguin", "Eagle"
    ]
  },
  {
    name: "Tools",
    color: "bg-blue-500",
    items: [
      "Hammer", "Screwdriver", "Wrench", "Pliers", "Drill", "Saw", "Chisel", "File",
      "Sandpaper", "Level", "Measuring Tape", "Square", "Clamp", "Vice", "Anvil", "Axe",
      "Shovel", "Rake", "Hoe", "Pickaxe", "Crowbar", "Jack", "Winch", "Pulley",
      "Ladder", "Toolbox", "Workbench", "Grinder", "Router", "Lathe"
    ]
  },
  {
    name: "Actors",
    color: "bg-purple-500",
    items: [
      "Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Will Smith", "Robert Downey Jr.", "Chris Evans", "Ryan Reynolds", "Dwayne Johnson",
      "Johnny Depp", "Morgan Freeman", "Denzel Washington", "Samuel L. Jackson", "Matt Damon", "Ben Affleck", "George Clooney", "Hugh Jackman",
      "Ryan Gosling", "Christian Bale", "Mark Wahlberg", "Vin Diesel", "Jason Statham", "Liam Neeson", "Harrison Ford", "Tom Cruise",
      "Keanu Reeves", "Nicolas Cage", "John Travolta", "Bruce Willis", "Sylvester Stallone", "Arnold Schwarzenegger"
    ]
  },
  {
    name: "Sports",
    color: "bg-red-500",
    items: [
      "Football", "Basketball", "Baseball", "Soccer", "Tennis", "Golf", "Swimming", "Track and Field",
      "Boxing", "Wrestling", "Martial Arts", "Gymnastics", "Volleyball", "Hockey", "Cricket", "Rugby",
      "Badminton", "Table Tennis", "Cycling", "Running", "Skiing", "Snowboarding", "Surfing", "Skateboarding",
      "Rock Climbing", "Archery", "Bowling", "Darts", "Pool", "Chess"
    ]
  },
  {
    name: "Subjects",
    color: "bg-yellow-500",
    items: [
      "Mathematics", "Science", "English", "History", "Geography", "Physics", "Chemistry", "Biology",
      "Art", "Music", "Physical Education", "Computer Science", "Psychology", "Philosophy", "Economics", "Sociology",
      "Political Science", "Literature", "Foreign Languages", "Drama", "Dance", "Photography", "Journalism", "Law",
      "Medicine", "Engineering", "Architecture", "Business", "Marketing", "Accounting"
    ]
  }
];