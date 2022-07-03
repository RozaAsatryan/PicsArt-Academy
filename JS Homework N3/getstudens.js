function getStudentsWithNamesAndTopNotes(studentNotes) {
    studentNotes.forEach(obj => {
        var stdList = {};
        let topNote = obj.notes.sort((a, b) => b - a)[0];
        stdList.name = obj.name;
        stdList.topNote = topNote;
       var TopNotes = [];
       TopNotes.push(stdList); 
      console.log(TopNotes)
    });
}

getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
]);