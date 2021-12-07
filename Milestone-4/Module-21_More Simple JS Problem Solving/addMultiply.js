// === Use add and multiplication to calculate wood requirements

/* chairWood = 3cft 
   tableWood = 10cft 
   bedWood = 50cft
*/

function weedingFurnitureCalculation(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // Wood Calculation
    const chairWoodQuantity = perChairWood * chairQuantity;
    const tableWoodQuantity = perTableWood * tableQuantity;
    const bedWoodQuantity = perBedWood * bedQuantity;
    
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const totalFurnitureForWeeding = weedingFurnitureCalculation(3, 1, 1);
console.log(totalFurnitureForWeeding);