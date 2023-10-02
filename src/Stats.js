export default function Stats({ numItems }) {
  // When there is no task then below message will display
  if (!numItems.length) {
    return (
      <footer className="stats">
        <em>Make it productivity Day, Try adding Tasks</em>
      </footer>
    );
  }
  const numberOfItems = numItems.length;
  const numPackedItems = numItems.filter((item) => item.completed).length;

  const packedPercentage = Math.round((numPackedItems / numberOfItems) * 100);

  const taskGrammar = numberOfItems < 2 ? "task" : "tasks";
  const packedTaskGrammar = numPackedItems < 2 ? "task" : "tasks";
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "Congratulations!! You have completed all the tasks"
          : `You have ${numberOfItems} ${taskGrammar} on your list and you completed  
          ${numPackedItems} ${packedTaskGrammar} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
