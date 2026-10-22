// Everything that is specific to one house. See CLONING.md for the full checklist
// (colours live in theme.css; icons in icons/; install name in manifest.webmanifest).
export const siteConfig = {
  // Shown in the header and on the passcode screen as "<name> <title>".
  name: '83 Richmond Road',
  title: 'Task Tracker',

  // Keeps this app's saved data (passcode, "I'm", view) separate from any other copy
  // of the app hosted on the same website. Use a different value for every house.
  storagePrefix: 'richmond83',

  // Starting lists for a brand-new board. Once a board exists, people and rooms are
  // edited in the app (Manage) and stored in the shared database.
  people: ['Holly', 'Seb', 'Steve', 'Gail', 'Tradesperson', 'Other'],
  rooms: ['Bedroom 1', 'Bedroom 2', 'Bathroom', 'Living Room', 'Kitchen', 'Dining Room', 'Conservatory', 'Garden', 'Porch/Hall', 'Exterior Areas'],
};
