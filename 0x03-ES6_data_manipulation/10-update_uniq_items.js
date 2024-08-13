export default function updateUniqueItems(groceries) {
  if (groceries instanceof Map) {
    for (const [Key, value] of groceries) {
      if (value === 1) {
	      groceries.set(Key, 100);
      }
    }
    return groceries;
  }
  
  throw new Error('Cannot process');
}
