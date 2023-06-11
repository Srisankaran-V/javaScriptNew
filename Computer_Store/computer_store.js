const store = document.getElementById("store")

let parts = [  ["Monitors", "LCD Screens", "LED Screens", "Vibrant Colors"],
  ["Motherboards", "Fast"],
  ["Chips", "i9", "i7", "i5", "i3", "Core2Duo", "Pentium", "Very Fast"],
  ["Hard Drives", "2TB", "1TB", "100-500 GB", "Fast Reading"],
  ["DVD-ROMs", "Burn CDs", "Burn DVDs"],
  ["Cases", "ATX", "AT", "Mini", "Other Sizes", "Choice of Colors"],
  ["Power Supplies", "we can get one for any computer"]
];

for (let i = 0; i < parts.length; i++) {
  let part = parts[i];
  let features = part.slice(1).join(",")+"\n";
  store.innerHTML += (part[0] + ": " + features +"<br><br>");
}